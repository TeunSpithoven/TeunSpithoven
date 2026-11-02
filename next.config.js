/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    agentUpgrade: "security",
    viewTransition: true,
  },
};

module.exports = nextConfig;
