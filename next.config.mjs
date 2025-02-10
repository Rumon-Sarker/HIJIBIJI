/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "res.cloudinary.com",
      "i.ibb.co.com",
      "img.daisyui.com",
      "ucarecdn.com",
    ],
  },
  webpack: (config, { isServer }) => {
    if (isServer) {
      config.externals.push("@prisma/client");
    }
    return config;
  },
};

export default nextConfig;
