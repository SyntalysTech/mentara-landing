/** @type {import('next').NextConfig} */
const nextConfig = {
  // Vercel handles Next.js natively, no need for static export
  images: {
    unoptimized: false,
  },
}

module.exports = nextConfig
