import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/site-config";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #0b0b0d 0%, #17171b 60%, #2a0d0e 100%)",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            marginBottom: 28,
          }}
        >
          <div
            style={{
              display: "flex",
              width: 72,
              height: 72,
              borderRadius: 16,
              background: "linear-gradient(135deg, #ff3b3f, #a30e14)",
              color: "#fff",
              fontSize: 40,
              fontWeight: 700,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            R
          </div>
          <div style={{ display: "flex", fontSize: 52, fontWeight: 700, color: "#f2f1ef" }}>
            REDLINE<span style={{ color: "#ff3b3f" }}>AUTO</span>
          </div>
        </div>
        <div style={{ display: "flex", fontSize: 30, color: "#a3a2a8", textAlign: "center", padding: "0 80px" }}>
          {siteConfig.tagline}
        </div>
      </div>
    ),
    { ...size }
  );
}
