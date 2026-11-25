/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "novusapparels.com",
      },
      {
        protocol: "https",
        hostname: "cdn.coverr.co",
      },
    ],
  },
  // Suppress Three.js SSR warnings
  webpack: (config) => {
    config.externals = config.externals || [];
    return config;
  },
};

export default nextConfig;
