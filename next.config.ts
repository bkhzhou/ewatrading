import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/ewatrading",
  assetPrefix: "/ewatrading/",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
