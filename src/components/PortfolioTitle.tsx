import { profile } from "@/data/portfolio";

// Original, solid pixel geometry. Continuous outlines let bevels and extrusion
// follow the glyph rather than outlining individual pixels.
const letters: Record<string, { path: string; width: number; cracks?: string }> = {
  K: {
    width: 8,
    path: "M0 0H3V4H4V2H5V0H8V3H6V5H5V7H6V9H8V12H5V10H4V8H3V12H0Z",
    cracks: "M1.2 0V1.8H2V3M6.7 10V11H6V12",
  },
  Y: {
    width: 8,
    path: "M0 0H3V4H5V0H8V5H7V6H6V7H5V12H3V7H2V6H1V5H0Z",
    cracks: "M6.5 0V2H7.2M3 9H4V10.5",
  },
  H: { width: 8, path: "M0 0H3V4H5V0H8V12H5V7H3V12H0Z", cracks: "M1.6 0V2H2.3V3M6.4 8V9H7V12" },
  O: {
    width: 8,
    path: "M1 0H7V1H8V11H7V12H1V11H0V1H1ZM3 3V9H5V3Z",
    cracks: "M4 0V1.2H5V2M1.4 8V9.6H2.2V11",
  },
  A: {
    width: 8,
    path: "M1 0H7V1H8V12H5V8H3V12H0V1H1ZM3 3V5H5V3Z",
    cracks: "M6.2 0V1.8H7V3M.8 9H1.7V12",
  },
  N: {
    width: 8,
    path: "M0 0H3V2H4V4H5V0H8V12H5V10H4V8H3V12H0Z",
    cracks: "M6.6 0V2H5.8M0 8H1.2V9H2V11",
  },
  G: {
    width: 8,
    path: "M1 0H8V3H3V9H5V7H4V5H8V12H1V11H0V1H1Z",
    cracks: "M5 0V1.3H6V2M1.2 7V9H2V10",
  },
  P: { width: 8, path: "M0 0H7V1H8V6H7V7H3V12H0ZM3 3V4H5V3Z" },
  R: { width: 8, path: "M0 0H7V1H8V6H6V8H7V10H8V12H5V10H4V8H3V12H0ZM3 3V4H5V3Z" },
  T: { width: 8, path: "M0 0H8V3H5V12H3V3H0Z" },
  F: { width: 8, path: "M0 0H8V3H3V5H7V8H3V12H0Z" },
  L: { width: 8, path: "M0 0H3V9H8V12H0Z" },
  I: { width: 5, path: "M0 0H5V3H4V9H5V12H0V9H1V3H0Z" },
};

function wordGeometry(word: string, detail = false) {
  let x = 0;
  return [...word].map((letter, index) => {
    if (letter === " ") {
      x += 4.5;
      return null;
    }
    const glyph = letters[letter];
    if (!glyph) return null;
    const position = x;
    x += glyph.width + 1.5;
    return (
      <path
        key={index}
        d={detail ? glyph.cracks : glyph.path}
        transform={`translate(${position} 0)`}
        fillRule="evenodd"
      />
    );
  });
}

function LogoWord({ word, details = false }: { word: string; details?: boolean }) {
  return (
    <>
      <g className="home-title-back" transform="translate(-1.3 2.3)" strokeLinejoin="miter">
        {wordGeometry(word)}
      </g>
      <g className="home-title-extrusion">
        {[5, 4, 3, 2, 1].map((step) => (
          <g key={step} transform={`translate(${-step * 0.26} ${step * 0.46})`}>
            {wordGeometry(word)}
          </g>
        ))}
      </g>
      <g className="home-title-outline" strokeLinejoin="miter">
        {wordGeometry(word)}
      </g>
      <g className="home-title-face" strokeLinejoin="miter">
        {wordGeometry(word)}
      </g>
      {details && <g className="home-title-cracks">{wordGeometry(word, true)}</g>}
    </>
  );
}

export function PortfolioTitle() {
  return (
    <h1 className="portfolio-title" aria-label={`${profile.name} Portfolio`}>
      <svg viewBox="0 0 76 19" aria-hidden="true" focusable="false">
        <g transform="translate(5 1) scale(1 .75) skewX(-8)">
          <LogoWord word={profile.name.toUpperCase()} details />
        </g>
        <g transform="translate(18 12.2) scale(.49 .37)">
          <LogoWord word="PORTFOLIO" />
        </g>
      </svg>
    </h1>
  );
}
