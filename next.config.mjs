/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.banggooso.com',
        port: '',
        pathname: '/assets/bing/**',
      },
    ],
  },
  compiler: {
    removeConsole: process.env.NEXT_PUBLIC_DEPLOY_ENV === 'production',
  },
  async redirects() {
    return [
      // {
      //   source: '/((?!teasing|privacy).*)', // 모든 경로에서 /teasing을 제외한 경로를 캡처
      //   destination: '/teasing',
      //   permanent: false, // 302 리다이렉트 (임시)
      // },
      {
        source: '/',
        destination: '/teasing',
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
