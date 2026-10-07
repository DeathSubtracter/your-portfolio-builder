const letters: Record<string, string[]> = {
  K: ["10001","10010","10100","11000","10100","10010","10001"],
  Y: ["10001","10001","01010","00100","00100","00100","00100"],
  H: ["10001","10001","10001","11111","10001","10001","10001"],
  O: ["01110","10001","10001","10001","10001","10001","01110"],
  A: ["01110","10001","10001","11111","10001","10001","10001"],
  N: ["10001","11001","11001","10101","10011","10011","10001"],
  G: ["01111","10000","10000","10111","10001","10001","01111"],
  P: ["11110","10001","10001","11110","10000","10000","10000"],
  R: ["11110","10001","10001","11110","10100","10010","10001"],
  T: ["11111","00100","00100","00100","00100","00100","00100"],
  F: ["11111","10000","10000","11110","10000","10000","10000"],
  L: ["10000","10000","10000","10000","10000","10000","11111"],
  I: ["11111","00100","00100","00100","00100","00100","11111"],
};

function pixelPath(text: string) {
  let x = 0;
  const parts: string[] = [];
  for (const letter of text) {
    if (letter === " ") { x += 4; continue; }
    letters[letter]?.forEach((row, y) => [...row].forEach((pixel, column) => {
      if (pixel === "1") parts.push(`M${x + column} ${y}h1v1h-1z`);
    }));
    x += 6;
  }
  return parts.join("");
}

export function PortfolioTitle() {
  return <h1 className="portfolio-title" aria-label="Ky Hoang Portfolio"><svg viewBox="-2 -2 57 19" role="img" aria-label="KY HOANG PORTFOLIO" shapeRendering="crispEdges">
    <g transform="translate(3 0)"><path className="title-extrusion" d={pixelPath("KY HOANG")} transform="translate(-.7 1.5)"/><path className="title-outline" d={pixelPath("KY HOANG")}/><path className="title-face" d={pixelPath("KY HOANG")}/></g>
    <g transform="translate(9 11) scale(.65 .65)"><path className="title-extrusion" d={pixelPath("PORTFOLIO")} transform="translate(-.5 1.2)"/><path className="title-outline" d={pixelPath("PORTFOLIO")}/><path className="title-face" d={pixelPath("PORTFOLIO")}/></g>
  </svg></h1>;
}