import { useId } from "react";
import { profile } from "@/data/portfolio";

// Original, solid pixel geometry. Continuous outlines let bevels and extrusion
// follow the glyph rather than outlining individual pixels.
const letters: Record<string, { path: string; width: number; cracks?: string }> = {
  K: {
    width: 8,
    path: "M0 0H3V4H4V2H5V0H8V3H6V5H5V7H6V9H8V12H5V10H4V8H3V12H0Z",
    cracks: "M1.2 0L1.4 2.2H2.3L2.1 3.5M0 8.5H1.4L1.2 10.2H2.5M6.7 10V11H6V12",
  },
  Y: {
    width: 8,
    path: "M0 0H3V4H5V0H8V5H7V6H6V7H5V12H3V7H2V6H1V5H0Z",
    cracks: "M6.5 0L6.2 2H7.2L6.8 3.4M3 8.5H4.2L4 10.5H3.5V12",
  },
  H: {
    width: 8,
    path: "M0 0H3V4H5V0H8V12H5V7H3V12H0Z",
    cracks: "M1.6 0L1.9 2H2.6L2.3 3.5M0 8H1.4L1.7 9.4M6.4 8L6.1 9H7L7.3 12",
  },
  O: {
    width: 8,
    path: "M1 0H7V1H8V11H7V12H1V11H0V1H1ZM3 3V9H5V3Z",
    cracks: "M4 0L4.3 1.2H5L5.2 2.2M0 7H1.4L1.2 9.6H2.2L2.6 12M6 9L6.6 10.2H8",
  },
  A: {
    width: 8,
    // The counter becomes a Creeper face: two square eyes and a stepped mouth.
    path: "M.5 0H7.5V.6H8V12H5V8H3V12H0V.6H.5ZM1.8 2.1H3.3V3.7H1.8ZM4.7 2.1H6.2V3.7H4.7ZM3.3 3.7H4.7V4.8H5.5V7.1H4.7V6.2H3.3V7.1H2.5V4.8H3.3Z",
    cracks: "M6.8 0L6.5 1.3H7.3L7 3M0 9H1.7L1.4 10.4H2V12M5.4 9.2H6.8L7.1 12",
  },
  N: {
    width: 8,
    path: "M0 0H3V2H4V4H5V0H8V12H5V10H4V8H3V12H0Z",
    cracks: "M6.6 0L6.9 2H5.8L6 3M0 8H1.2L1.5 9H2L1.8 11M5.7 8.2H6.6L6.9 9.5H8",
  },
  G: {
    width: 8,
    path: "M1 0H8V3H3V9H5V7H4V5H8V12H1V11H0V1H1Z",
    cracks: "M5 0L5.3 1.3H6L5.8 2.4M0 7H1.2L1.6 9H2L2.3 10.5M5.5 9H6.8L7.1 12",
  },
  P: { width: 8, path: "M0 0H7V1H8V6H7V7H3V12H0ZM3 3V4H5V3Z" },
  R: { width: 8, path: "M0 0H7V1H8V6H6V8H7V10H8V12H5V10H4V8H3V12H0ZM3 3V4H5V3Z" },
  T: { width: 8, path: "M0 0H8V3H5V12H3V3H0Z" },
  F: { width: 8, path: "M0 0H8V3H3V5H7V8H3V12H0Z" },
  L: { width: 8, path: "M0 0H3V9H8V12H0Z" },
  I: { width: 5, path: "M0 0H5V3H4V9H5V12H0V9H1V3H0Z" },
};

function wordGeometry(word: string) {
  let x = 0;
  const geometry = [...word].flatMap((letter) => {
    if (letter === " ") {
      x += 1.5;
      return [];
    }
    const glyph = letters[letter];
    if (!glyph) return [];
    const position = x;
    x += glyph.width + 1.5;
    return [{ ...glyph, x: position }];
  });
  return { geometry, width: x - 1.5 };
}

function LogoWord({ word, id, details = false }: { word: string; id: string; details?: boolean }) {
  const { geometry, width } = wordGeometry(word);
  const depth = details ? 3.3 : 1.8;
  return (
    <>
      {geometry.map((glyph, index) => {
        // Fan the outer letters slightly outward; the stone sides recede inward.
        const offset = (glyph.x + glyph.width / 2 - width / 2) / (width / 2);
        const slant = details ? offset * 6 : 0;
        const side = details ? -offset * 1.4 : -0.35;
        const clipId = `${id}-letter-${index}`;
        return (
          <g
            key={index}
            transform={`translate(${glyph.x} 0) skewX(${slant})`}
            strokeLinejoin="miter"
          >
            <defs>
              <clipPath id={clipId}>
                <path d={glyph.path} clipRule="evenodd" />
              </clipPath>
            </defs>
            <path
              className="home-title-back"
              d={glyph.path}
              fillRule="evenodd"
              transform={`translate(${side} ${depth})`}
            />
            <g className="home-title-extrusion" fill={`url(#${id}-depth)`}>
              {Array.from({ length: 16 }, (_, layer) => {
                const progress = (16 - layer) / 16;
                return (
                  <path
                    key={layer}
                    d={glyph.path}
                    fillRule="evenodd"
                    transform={`translate(${side * progress} ${depth * progress})`}
                  />
                );
              })}
            </g>
            <path className="home-title-outline" d={glyph.path} fillRule="evenodd" />
            <path
              className="home-title-face"
              d={glyph.path}
              fill={`url(#${id}-stone)`}
              fillRule="evenodd"
            />
            {details && (
              <g clipPath={`url(#${clipId})`}>
                <path
                  className="home-title-chisel"
                  d={
                    index % 2 === 0
                      ? "M0 0H2.7L2.2 .28H.3V2.8L0 3.2ZM8 8V12H5.5L5.8 11.7H7.7V8.4Z"
                      : "M4 0H8V3.5L7.7 3.1V.28H4.4ZM0 9.2L.3 9.6V11.7H2.8L3.2 12H0Z"
                  }
                />
                <path
                  className="home-title-crack-light"
                  d={glyph.cracks}
                  transform="translate(.08 .12)"
                />
                <path className="home-title-cracks" d={glyph.cracks} />
              </g>
            )}
          </g>
        );
      })}
    </>
  );
}

export function PortfolioTitle() {
  const id = `portfolio-logo-${useId().replace(/:/g, "")}`;
  const name = profile.name.toUpperCase();
  const nameWidth = wordGeometry(name).width;
  return (
    <h1 className="portfolio-title" aria-label={`${profile.name} Portfolio`}>
      <svg viewBox="0 0 76 19" aria-hidden="true" focusable="false">
        <defs>
          <linearGradient id={`${id}-name-stone`} x2="0" y2="1">
            <stop stopColor="var(--home-logo-bevel)" />
            <stop offset=".08" stopColor="var(--home-logo-face)" />
            <stop offset=".85" stopColor="var(--home-logo-face)" />
            <stop offset="1" stopColor="var(--home-logo-bottom)" />
          </linearGradient>
          <linearGradient id={`${id}-name-depth`} x2="0" y2="1">
            <stop stopColor="var(--home-logo-side)" />
            <stop offset=".72" stopColor="var(--home-logo-side)" />
            <stop offset="1" stopColor="var(--home-logo-side-bottom)" />
          </linearGradient>
          <linearGradient id={`${id}-subtitle-stone`} href={`#${id}-name-stone`} />
          <linearGradient id={`${id}-subtitle-depth`} href={`#${id}-name-depth`} />
        </defs>
        <g transform={`translate(${(76 - nameWidth) / 2} .6) scale(1 .71)`}>
          <LogoWord word={name} id={`${id}-name`} details />
        </g>
        <g transform="translate(19.37 10.4) scale(.46 .37)">
          <LogoWord word="PORTFOLIO" id={`${id}-subtitle`} />
        </g>
      </svg>
    </h1>
  );
}
