/* eslint-disable import/prefer-default-export */
// eslint-disable-next-line @typescript-eslint/no-var-requires
const StyleLintPlugin = require('stylelint-webpack-plugin');

module.exports = {
  configureWebpack: {
    plugins: [
      new StyleLintPlugin({
        files: ['src/**/*.{vue,scss}'],
      }),
    ],
  },
};
