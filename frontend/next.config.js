/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

module.exports = nextConfig;

module.exports = {
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback = {
        // fixes proxy-agent dependencies
        net: false,
        dns: false,
        tls: false,
        assert: false,
        // fixes next-i18next dependencies
        path: false,
        fs: false,
        // fixes mapbox dependencies
        events: false,
        // fixes sentry dependencies
        process: false
      }
    }
    return config;
  }
};
