/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: '/',
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.microcms-assets.io'
      }
    ]
  },
  async headers() {
    return [
      {
        source: '/contact',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN'
          }
        ]
      },
      {
        source: '/blog',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          }
        ]
      },
      {
        source: '/blog/p/:current*',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          }
        ]
      },
      {
        source: '/blog/:slug*',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          }
        ]
      }
    ]
  }
}

module.exports = nextConfig
