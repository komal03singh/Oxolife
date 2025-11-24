/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.oxygentimes.com",
        pathname: "/storage/productlargeimages/**",
      },
    ],
  },
};

export default nextConfig;


