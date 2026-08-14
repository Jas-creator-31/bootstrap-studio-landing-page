import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  allowedDevOrigins: ['nextjs.jashanpreet.me'],
  output: "standalone",
};

export default nextConfig;
