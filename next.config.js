/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['uploadthing.com', 'lh3.googleusercontent.com'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'utfs.io',
      },
    ],
  },
  metadataBase: new URL('https://kedai-om-jhon-ucgd.vercel.app'),
}

module.exports = nextConfig
