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
  metadataBase: new URL('https://kedai-om-jhon-pjd98ag2e-lalosianturi21s-projects.vercel.app'),
}

module.exports = nextConfig
