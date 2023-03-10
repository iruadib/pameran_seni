/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  async redirects() {
    return [
      {
        source: '/proposal',
        destination: '/',
        permanent: true
      }
    ]
  }
}

module.exports = nextConfig
