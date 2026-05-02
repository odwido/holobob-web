import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/qr",
        destination: "/?utm_source=qr&utm_medium=print",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
