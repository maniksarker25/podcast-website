import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import { siteConfig } from "@/config/site";

export const alt = `${siteConfig.name} — Radio, podcasts, video & live`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/** Social share card used by every page (generated at build time). */
export default async function Image() {
  const logo = await readFile(join(process.cwd(), "public/favicon.png"));
  const logoSrc = `data:image/png;base64,${logo.toString("base64")}`;
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 72,
          background: "radial-gradient(70% 90% at 85% 10%, #7a1630 0%, transparent 60%), #17181b",
          color: "#f3f3f5",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element -- ImageResponse renders plain <img> */}
        <img src={logoSrc} width={234} height={149} alt="" />
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div style={{ fontSize: 78, fontWeight: 700, lineHeight: 1, letterSpacing: -2 }}>
            Where every message finds its audience.
          </div>
          <div style={{ fontSize: 30, color: "#a3a3ad" }}>Radio · Podcasts · Video · Live</div>
        </div>
      </div>
    ),
    size
  );
}
