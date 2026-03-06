/** @type {import('next').NextConfig} */
const BASE_PATH = "/carnot-website"
const isProd = process.env.NODE_ENV === "production"

const nextConfig = {
  output: isProd ? "export" : undefined,
  distDir: isProd ? "docs" : ".next",
  basePath: isProd ? BASE_PATH : "",
  env: {
    // Expose to client so <img> tags can construct correct URLs
    NEXT_PUBLIC_BASE_PATH: isProd ? BASE_PATH : "",
  },
  images: {
    unoptimized: true,
  },
};

export default nextConfig;