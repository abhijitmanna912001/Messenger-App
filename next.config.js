/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
    experimental: {
      swcPlugins: [
        [
          "next-superjson-plugin",
          {
            excluded: [],
          },
        ],
      ],
    },
  },
  images: {
    domains: [
      "res.cloudinary.com",
      "avatars.githubusercontent.com",
      "lh3.googleusercontent.com",
    ],
  },
};

module.exports = nextConfig;
