/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.microcms-assets.io'
      },
      {
        protocol: 'https',
        hostname: 'sdk.form.run/js/v2/embed.js'
      }
    ]
  }
}

module.exports = nextConfig
