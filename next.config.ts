import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'co.nixblix.com',
        /* pathname: '/cdn/shop/files/**', */
      },
      {
        protocol: 'https',
        hostname: 'ik.imagekit.io',
        /* pathname: '/cdn/shop/files/**', */
      },
    ],
  },
};

export default nextConfig;
