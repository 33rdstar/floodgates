import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */

  // Pin the workspace root explicitly: this project lives nested a couple of
  // directories below a stray package-lock.json, which otherwise makes
  // Turbopack warn about an ambiguous root.
  turbopack: {
    root: __dirname,
  },

  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
