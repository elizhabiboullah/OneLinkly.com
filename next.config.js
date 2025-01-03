/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['onelinkly.com'],
  },
  async redirects() {
    return [
      {
        source: '/',
        destination: '/dashboard',
        permanent: true,
      },
    ]
  }
}

module.exports = nextConfig 