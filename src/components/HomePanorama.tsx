import { useEffect, useRef } from "react";
import front from "@/assets/panorama/0.png";
import right from "@/assets/panorama/1.png";
import back from "@/assets/panorama/2.png";
import left from "@/assets/panorama/3.png";
import top from "@/assets/panorama/4.png";
import bottom from "@/assets/panorama/5.png";

const vertexSource = `
  attribute vec2 position;
  varying vec2 view;
  void main() {
    view = position;
    gl_Position = vec4(position, 0.0, 1.0);
  }
`;

const fragmentSource = `
  precision highp float;
  varying vec2 view;
  uniform samplerCube world;
  uniform float aspect;
  uniform float yaw;
  void main() {
    vec3 ray = normalize(vec3(view.x * aspect * 0.65, view.y * 0.65, 1.0));
    float pitch = 0.07;
    ray.yz = mat2(cos(pitch), -sin(pitch), sin(pitch), cos(pitch)) * ray.yz;
    ray.xz = mat2(cos(yaw), -sin(yaw), sin(yaw), cos(yaw)) * ray.xz;
    gl_FragColor = textureCube(world, ray);
  }
`;

// Render the six adjoining panorama faces as a skybox, rather than sliding a
// flat photograph. The title and menu are separate, stationary DOM elements.
export function HomePanorama() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const gl = canvas.getContext("webgl", {
      alpha: false,
      antialias: false,
      powerPreference: "low-power",
    });
    if (!gl) return; // The CSS backdrop remains visible without WebGL.

    const shaders: WebGLShader[] = [];
    const compile = (type: number, source: string) => {
      const shader = gl.createShader(type);
      if (!shader) return null;
      shaders.push(shader);
      gl.shaderSource(shader, source);
      gl.compileShader(shader);
      return gl.getShaderParameter(shader, gl.COMPILE_STATUS) ? shader : null;
    };
    const vertex = compile(gl.VERTEX_SHADER, vertexSource);
    const fragment = compile(gl.FRAGMENT_SHADER, fragmentSource);
    const program = gl.createProgram();
    const buffer = gl.createBuffer();
    const texture = gl.createTexture();
    let disposed = false;
    let loaded = false;
    let frame = 0;
    let lastTime: number | undefined;
    let yaw = Math.PI;
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const images: HTMLImageElement[] = [];

    const release = () => {
      disposed = true;
      cancelAnimationFrame(frame);
      canvas.removeAttribute("data-ready");
      images.forEach((image) => {
        image.onload = null;
        image.onerror = null;
      });
      gl.deleteTexture(texture);
      gl.deleteBuffer(buffer);
      gl.deleteProgram(program);
      shaders.forEach((shader) => gl.deleteShader(shader));
    };
    if (!vertex || !fragment || !program || !buffer || !texture) {
      release();
      return;
    }
    gl.attachShader(program, vertex);
    gl.attachShader(program, fragment);
    gl.linkProgram(program);
    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
      release();
      return;
    }
    gl.useProgram(program);
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 3, -1, -1, 3]), gl.STATIC_DRAW);
    const position = gl.getAttribLocation(program, "position");
    gl.enableVertexAttribArray(position);
    gl.vertexAttribPointer(position, 2, gl.FLOAT, false, 0, 0);
    const aspectUniform = gl.getUniformLocation(program, "aspect");
    const yawUniform = gl.getUniformLocation(program, "yaw");
    gl.uniform1i(gl.getUniformLocation(program, "world"), 0);
    gl.bindTexture(gl.TEXTURE_CUBE_MAP, texture);
    gl.texParameteri(gl.TEXTURE_CUBE_MAP, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
    gl.texParameteri(gl.TEXTURE_CUBE_MAP, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
    gl.texParameteri(gl.TEXTURE_CUBE_MAP, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_CUBE_MAP, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);

    const draw = () => {
      if (!loaded || disposed || gl.isContextLost()) return;
      gl.uniform1f(aspectUniform, canvas.clientWidth / canvas.clientHeight);
      gl.uniform1f(yawUniform, yaw);
      gl.drawArrays(gl.TRIANGLES, 0, 3);
    };
    const resize = () => {
      // Bound GPU work on large/retina displays; the background is blurred.
      const scale = Math.min(1, 1920 / canvas.clientWidth, 1080 / canvas.clientHeight);
      canvas.width = Math.max(1, Math.round(canvas.clientWidth * scale));
      canvas.height = Math.max(1, Math.round(canvas.clientHeight * scale));
      gl.viewport(0, 0, canvas.width, canvas.height);
      draw();
    };
    const animate = (time: number) => {
      if (disposed || !loaded || motion.matches || document.hidden || gl.isContextLost()) return;
      if (lastTime !== undefined) {
        // A full revolution takes 7.5 minutes; resume without a camera jump.
        yaw = (yaw + Math.min(time - lastTime, 100) * ((Math.PI * 2) / 450000)) % (Math.PI * 2);
      }
      lastTime = time;
      draw();
      frame = requestAnimationFrame(animate);
    };
    const updateMotion = () => {
      cancelAnimationFrame(frame);
      lastTime = undefined;
      if (disposed || !loaded || document.hidden) return;
      draw();
      if (!motion.matches && !gl.isContextLost()) frame = requestAnimationFrame(animate);
    };
    const contextLost = (event: Event) => {
      event.preventDefault();
      cancelAnimationFrame(frame);
      canvas.removeAttribute("data-ready");
    };
    const observer = new ResizeObserver(resize);
    observer.observe(canvas);
    motion.addEventListener("change", updateMotion);
    document.addEventListener("visibilitychange", updateMotion);
    canvas.addEventListener("webglcontextlost", contextLost);

    const faces = [
      [gl.TEXTURE_CUBE_MAP_POSITIVE_X, right],
      [gl.TEXTURE_CUBE_MAP_NEGATIVE_X, left],
      [gl.TEXTURE_CUBE_MAP_POSITIVE_Y, top],
      [gl.TEXTURE_CUBE_MAP_NEGATIVE_Y, bottom],
      [gl.TEXTURE_CUBE_MAP_POSITIVE_Z, front],
      [gl.TEXTURE_CUBE_MAP_NEGATIVE_Z, back],
    ] as const;
    let remaining = faces.length;
    faces.forEach(([target, url]) => {
      const image = new Image();
      images.push(image);
      image.onload = () => {
        if (disposed || gl.isContextLost()) return;
        gl.bindTexture(gl.TEXTURE_CUBE_MAP, texture);
        gl.texImage2D(target, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, image);
        if (--remaining === 0) {
          loaded = true;
          resize();
          canvas.setAttribute("data-ready", "true");
          updateMotion();
        }
      };
      image.src = url;
    });

    return () => {
      observer.disconnect();
      motion.removeEventListener("change", updateMotion);
      document.removeEventListener("visibilitychange", updateMotion);
      canvas.removeEventListener("webglcontextlost", contextLost);
      release();
    };
  }, []);

  return <canvas ref={canvasRef} className="home-panorama" aria-hidden="true" />;
}
