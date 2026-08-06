import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  allowedDevOrigins: ["test.jashanpreet.me"],
  output: "standalone",
};

export default nextConfig;
