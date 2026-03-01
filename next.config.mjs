/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Tells Next.js to produce a static site (HTML/CSS/JS)
  basePath: '/palaissaadien.com', // Replace with your repo name
  images: {
    unoptimized: true, // Required for static export on GitHub Pages
  },
};

export default nextConfig;
