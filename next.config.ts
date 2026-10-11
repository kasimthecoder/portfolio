import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  outputFileTracingRoot: __dirname,
  reactStrictMode: true,
  trailingSlash: true,
  async redirects() {
    return [
      {
        source: "/",
        has: [{ type: "host", value: "kasimsaifi.in" }],
        destination: "https://www.kasimsaifi.in/",
        permanent: true,
      },
      {
        source: "/:path*",
        has: [{ type: "host", value: "kasimsaifi.in" }],
        destination: "https://www.kasimsaifi.in/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
