/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  distDir: "docs",
  basePath: "/carnot-website",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;