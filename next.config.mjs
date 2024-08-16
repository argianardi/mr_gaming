/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        pathname: '/dtzvdufwr/image/upload/**',
      },
    ],
  },
};

export default nextConfig;
