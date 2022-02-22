/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["tailwindui.com", "res.cloudinary.com"],
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 768, 1024, 1280, 1536],
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
  webpack: (config, options) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: [{ loader: "@svgr/webpack", options: { typescript: true } }],
    });

    return config;
  },
  async redirects() {
    return [
      {
        source: "/auth",
        destination: "/login",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
