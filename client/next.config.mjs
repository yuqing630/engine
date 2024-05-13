/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/api/:content*",
        destination: "http://localhost:5000/api/:content*",
      },
    ];
  },
};

export default nextConfig;
