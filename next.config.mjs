/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.oxygentimes.com",
      },
    ],
  },
};

export default nextConfig;

