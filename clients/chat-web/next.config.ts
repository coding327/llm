import type { NextConfig } from "next";
import path from "node:path";

const nextConfig: NextConfig = {
  /* config options here */
  transpilePackages: ["@autix/contracts"],
  output: "standalone",
  outputFileTracingRoot: path.join(__dirname, "../../"), // Set the outputFileTracingRoot to the monorepo root
  env: {
    // You can add environment variables here if needed
    NEXT_PUBLIC_API_BASE_URL: '/api', // Use the proxy path for API calls in the frontend
  },
  allowedDevOrigins: ["10.246.8.70"], // 允许来自指定IP地址的请求，替换为你的开发环境IP地址
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: `http://localhost:4001/:path*`, // 将API请求代理到后端服务的地址
      },
    ];
  },
};

export default nextConfig;
