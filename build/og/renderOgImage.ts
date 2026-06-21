import { readFileSync } from "node:fs";
import path from "node:path";
import satori from "satori";
import { Resvg } from "@resvg/resvg-js";

// Resolve paths relative to project root (process.cwd()) so they work both when
// running directly from source and when bundled by Vite/SvelteKit for prerendering.
const PROJECT_ROOT = process.cwd();
const OG_ASSET_DIR = path.resolve(PROJECT_ROOT, "build/og");
const FONT_DIR = path.resolve(OG_ASSET_DIR, "fonts");
const STATIC_DIR = path.resolve(PROJECT_ROOT, "static");

// Match the family name + files chosen in Task 1.
const FONT_FAMILY = "Mona Sans";
let fontsCache: { name: string; data: Buffer; weight: 400 | 600 | 700; style: "normal" }[] | null =
  null;
function loadFonts() {
  if (!fontsCache) {
    fontsCache = [
      {
        name: FONT_FAMILY,
        data: readFileSync(path.join(FONT_DIR, "Mona-Sans-Regular.ttf")),
        weight: 400,
        style: "normal",
      },
      {
        name: FONT_FAMILY,
        data: readFileSync(path.join(FONT_DIR, "Mona-Sans-SemiBold.ttf")),
        weight: 600,
        style: "normal",
      },
      {
        name: FONT_FAMILY,
        data: readFileSync(path.join(FONT_DIR, "Mona-Sans-Bold.ttf")),
        weight: 700,
        style: "normal",
      },
    ];
  }
  return fontsCache;
}

// Rasterize an SVG logo to a PNG data URI so satori embeds a raster image
// (resvg renders standalone SVG cleanly; its <image> support is raster-oriented).
// Logos keep their native aspect ratio: the SVG is fit inside a `box`×`box`
// square (whichever dimension is larger is constrained to `box`), and the
// actual rendered width/height are returned so satori draws it undistorted.
// Rendered at 2× then displayed at 1× for crisper edges.
function logoImage(imgRelPath: string, box = 180): { src: string; width: number; height: number } {
  const svg = readFileSync(path.join(STATIC_DIR, imgRelPath), "utf8");
  const scale = 2;
  let rendered = new Resvg(svg, { fitTo: { mode: "width", value: box * scale } }).render();
  if (rendered.height > box * scale) {
    rendered = new Resvg(svg, { fitTo: { mode: "height", value: box * scale } }).render();
  }
  const src = `data:image/png;base64,${Buffer.from(rendered.asPng()).toString("base64")}`;
  return { src, width: rendered.width / scale, height: rendered.height / scale };
}

// The "VS" graphic (raster PNG with transparency) used between the two columns.
// Cached; sized to a target height preserving its native aspect ratio.
let vsCache: { src: string; width: number; height: number } | null = null;
function vsImage(targetHeight = 110): { src: string; width: number; height: number } {
  if (!vsCache) {
    const buf = readFileSync(path.join(OG_ASSET_DIR, "vs.png"));
    const natW = buf.readUInt32BE(16);
    const natH = buf.readUInt32BE(20);
    vsCache = {
      src: `data:image/png;base64,${buf.toString("base64")}`,
      width: Math.round((natW / natH) * targetHeight),
      height: targetHeight,
    };
  }
  return vsCache;
}

let popperCache: string | null = null;
function popperDataUri(size = 40): string {
  if (!popperCache) {
    const svg = readFileSync(path.join(STATIC_DIR, "popper.svg"), "utf8");
    const png = new Resvg(svg, { fitTo: { mode: "width", value: size } }).render().asPng();
    popperCache = `data:image/png;base64,${Buffer.from(png).toString("base64")}`;
  }
  return popperCache;
}

const text = (value: string, style: Record<string, unknown>) => ({
  type: "div",
  props: { style: { display: "flex", ...style }, children: value },
});

// Title typography. The title box has a constant height (room for up to
// TITLE_MAX_LINES lines at full size), so whatever the title length every column
// is the same height and the two logos stay vertically aligned. titleFontSize()
// shrinks the font only when a title is long enough that it would otherwise need
// more than TITLE_MAX_LINES lines — so long names (e.g. "Angular Renaissance",
// "Ember Octane") and any future framework are handled automatically, with no
// per-title tweaks.
const TITLE_TEXT_WIDTH = 400; // usable width inside the 420px column
const TITLE_MAX_FONT = 50;
const TITLE_MIN_FONT = 30;
const TITLE_MAX_LINES = 2;
const TITLE_LINE_HEIGHT = 1.15;
// Conservative average glyph advance (em) for Mona Sans Bold — intentionally
// generous so width is never under-estimated (which would risk overflow).
const TITLE_AVG_GLYPH_EM = 0.6;
const TITLE_BOX_HEIGHT = Math.ceil(TITLE_MAX_FONT * TITLE_LINE_HEIGHT * TITLE_MAX_LINES);

function titleFontSize(title: string): number {
  const estLinesAtMax = (title.length * TITLE_AVG_GLYPH_EM * TITLE_MAX_FONT) / TITLE_TEXT_WIDTH;
  if (estLinesAtMax <= TITLE_MAX_LINES) return TITLE_MAX_FONT;
  const fitted = (TITLE_TEXT_WIDTH * TITLE_MAX_LINES) / (title.length * TITLE_AVG_GLYPH_EM);
  return Math.max(TITLE_MIN_FONT, Math.floor(fitted));
}

const column = (title: string, imgRel: string) => {
  const logo = logoImage(imgRel);
  return {
    type: "div",
    props: {
      style: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "28px",
        width: "420px",
      },
      children: [
        // Fixed-size box centers the aspect-preserved logo, so titles stay
        // vertically aligned across columns regardless of each logo's ratio.
        {
          type: "div",
          props: {
            style: {
              display: "flex",
              width: "180px",
              height: "180px",
              alignItems: "center",
              justifyContent: "center",
            },
            children: [
              {
                type: "img",
                props: { src: logo.src, width: logo.width, height: logo.height, alt: "" },
              },
            ],
          },
        },
        // Constant-height, center-aligned title box (see titleFontSize above):
        // its fixed height keeps every column the same height, so a title that
        // wraps to two lines never pushes its logo up relative to the other.
        {
          type: "div",
          props: {
            style: {
              display: "flex",
              width: "100%",
              height: `${TITLE_BOX_HEIGHT}px`,
              alignItems: "flex-start",
              justifyContent: "center",
              textAlign: "center",
              fontSize: `${titleFontSize(title)}px`,
              fontWeight: 700,
              lineHeight: TITLE_LINE_HEIGHT,
              color: "white",
            },
            children: title,
          },
        },
      ],
    },
  };
};

export async function renderComparisonOgPng(opts: {
  titleA: string;
  titleB: string;
  imgA: string;
  imgB: string;
}): Promise<Uint8Array> {
  const tree = {
    type: "div",
    props: {
      style: {
        width: "1200px",
        height: "630px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "56px",
        backgroundColor: "#111827",
        fontFamily: FONT_FAMILY,
      },
      children: [
        {
          type: "div",
          props: {
            style: {
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              gap: "48px",
            },
            children: [
              column(opts.titleA, opts.imgA),
              (() => {
                const vs = vsImage();
                return {
                  type: "img",
                  props: { src: vs.src, width: vs.width, height: vs.height, alt: "vs" },
                };
              })(),
              column(opts.titleB, opts.imgB),
            ],
          },
        },
        {
          type: "div",
          props: {
            style: { display: "flex", flexDirection: "row", alignItems: "center", gap: "14px" },
            children: [
              { type: "img", props: { src: popperDataUri(40), width: 40, height: 40, alt: "" } },
              text("Component Party", { fontSize: "32px", fontWeight: 600, color: "#9ca3af" }),
            ],
          },
        },
      ],
    },
  };

  const svg = await satori(tree as never, { width: 1200, height: 630, fonts: loadFonts() });
  const png = new Resvg(svg, { fitTo: { mode: "width", value: 1200 } }).render().asPng();
  return png;
}
