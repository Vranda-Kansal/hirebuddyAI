/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  reactCompiler: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
      },
    ],
    // Image optimization settings
    formats: ['image/webp', 'image/avif'], // Modern formats
    // ⭐ ADD THIS LINE:
    qualities: [75, 85, 90], // Support quality 75, 85, and 90
  },
};

export default nextConfig;
