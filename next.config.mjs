/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Produce a static site (HTML/CSS/JS) for GitHub Pages
  images: {
    unoptimized: true, // Required: static export can't run the image optimizer
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.palaissaadien.com',
      },
    ],
  },
};

export default nextConfig;
