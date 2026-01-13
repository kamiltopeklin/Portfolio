/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export', // Enable static export for GitHub Pages
  images: {
    unoptimized: true, // Required for static export
  },
  trailingSlash: true, // Recommended for GitHub Pages
  basePath: process.env.NODE_ENV === 'production' ? '/Portfolio' : '', // Adjust if your repo name is different
  assetPrefix: process.env.NODE_ENV === 'production' ? '/Portfolio' : '',
}

module.exports = nextConfig

