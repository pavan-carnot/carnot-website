/** @type {import('next').NextConfig} */
const BASE_PATH = "/carnot-website"

const nextConfig = {
  output: "export",
  distDir: "docs",
  basePath: BASE_PATH,
  env: {
    // Expose to client so <img> tags can construct correct URLs
    NEXT_PUBLIC_BASE_PATH: BASE_PATH,
  },
  images: {
    unoptimized: true,
  },
};

export default nextConfig;