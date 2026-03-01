/** @type {import('next').NextConfig} */
const nextConfig = {
<<<<<<< HEAD
  output: 'export',
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.palaissaadien.com'
      }
    ]
  }
=======
  output: 'export', // Tells Next.js to produce a static site (HTML/CSS/JS)
  basePath: '/palaissaadien.com', // Replace with your repo name
  images: {
    unoptimized: true, // Required for static export on GitHub Pages
  },
>>>>>>> 547d39f53b36d28710e7134aa0f4119a8c34e1cc
};

export default nextConfig;
