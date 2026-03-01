/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.palaissaadien.com'
      }
    ]
  }
};

export default nextConfig;
