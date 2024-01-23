const { join } = require("path");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,

  images: {
    dangerouslyAllowSVG: true,
  },

  sassOptions: {
    includePaths: [join(__dirname, "styles")]
  }
}

module.exports = nextConfig
