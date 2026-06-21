import { readFileSync } from "node:fs";
import path from "node:path";
import satori from "satori";
import { Resvg } from "@resvg/resvg-js";

// Resolve paths relative to project root (process.cwd()) so they work both when
// running directly from source and when bundled by Vite/SvelteKit for prerendering.
const PROJECT_ROOT = process.cwd();
const FONT_DIR = path.resolve(PROJECT_ROOT, "build/og/fonts");
const STATIC_DIR = path.resolve(PROJECT_ROOT, "static");

// Match the family name + files chosen in Task 1.
const FONT_FAMILY = "Mona Sans";
let fontsCache: { name: string; data: Buffer; weight: 400 | 700; style: "normal" }[] | null = null;
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
function logoPngDataUri(imgRelPath: string, size = 180): string {
  const svg = readFileSync(path.join(STATIC_DIR, imgRelPath), "utf8");
  const png = new Resvg(svg, { fitTo: { mode: "width", value: size } }).render().asPng();
  return `data:image/png;base64,${Buffer.from(png).toString("base64")}`;
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

const column = (title: string, imgRel: string) => ({
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
      { type: "img", props: { src: logoPngDataUri(imgRel), width: 180, height: 180, alt: "" } },
      text(title, { fontSize: "64px", fontWeight: 700, color: "white" }),
    ],
  },
});

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
              text("vs", { fontSize: "56px", color: "#6b7280" }),
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
              text("Component Party", { fontSize: "32px", color: "#9ca3af" }),
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
