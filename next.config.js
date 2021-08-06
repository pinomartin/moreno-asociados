module.exports = {
  reactStrictMode: true,
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"]
    });

    return config;
  }
}

// const withSass = require('@zeit/next-sass');
// const withImages = require('next-images');
// const withLess = require('@zeit/next-less')
// const withCSS = require('@zeit/next-css')

// module.exports = withCSS(withLess(withImages(withSass({
//   env: {
//     ANY_ENV_KEY: "ANY_ENV_VARIABLE"
//   }
// }))));
