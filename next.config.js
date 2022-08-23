import { i18n } from "./next-i18next.config";
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  i18n: {
    locales: ["en", "th"],
    defaultLocale: "en",
  },
};

module.exports = nextConfig;
