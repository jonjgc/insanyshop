/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
  compiler: {
    styledComponents: true, // Adicionar esta linha ajuda na integração com styled-components
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
