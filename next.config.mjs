/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n: {
    locales: ['en'], 
    defaultLocale: 'en',
  },
  images: {
    remotePatterns: [
      {
        hostname: 'res.cloudinary.com'
      }
    ]
  },
  trailingSlash: true,
};

export default nextConfig;
