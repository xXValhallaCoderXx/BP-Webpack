const merge = require('webpack-merge');
const webpack = require('webpack');
const parts = require('./webpack.parts');

const x = require('./paths');

exports.developmenLintConfig = merge([
  //parts.generateSourceMaps({ type: 'cheap-module-eval-source-map' }),
  parts.devServer({
    host: process.env.HOST,
    port: process.env.PORT,
  }),
  parts.lintJavaScript({ include: x.PATHS.app }),
  {
    plugins: [
      new webpack.LoaderOptionsPlugin({
        options: {
          eslint: {
            failOnWarning: false,
            failOnError: true,
            fix: false,
          },
        },
      }),

    ],
  },
  parts.loadCSS(),
  parts.loadImages(),
]);