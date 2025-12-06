/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'github-readme-activity-graph.vercel.app',
        pathname: '/**',
      },
    ],
  },
}

module.exports = nextConfig
