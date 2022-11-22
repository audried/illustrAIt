/** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
//   swcMinify: true,
//   images: {
//     domains: ['openailabsprodscus.blob.core.windows.net'],
//   },
// }

// module.exports = nextConfig

module.exports = {
  images: {
    domains: ['openailabsprodscus.blob.core.windows.net',"openailabsprodscus.blob.core.windows.net", 'i.scdn.co', 'labs.openai.com' ],
    formats: ['image/avif', 'image/webp'],
  },
  reactStrictMode: true,
  swcMinify: false,
}


