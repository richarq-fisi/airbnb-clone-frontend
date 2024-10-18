/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
        port: "8000",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "noroot.pythonanywhere.com",
        pathname: "/media/uploads/**",
      },
    ],
  },
};

export default nextConfig;
