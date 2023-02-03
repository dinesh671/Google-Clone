/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      'upload.wikimedia.org',
      'lh3.googleusercontent.com',
      'www.googleapis.com',
    ],
  },
};

module.exports = nextConfig
