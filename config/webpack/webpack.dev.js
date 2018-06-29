const path = require("path");
const webpack = require("webpack");
const merge = require("webpack-merge");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const PATHS = require("./paths");

const parts = require("./webpack.parts");

developmentConfig = app =>
  merge([
    {
      entry: {
        app: path.resolve(__dirname, `../../src/${app}`)
      },
      plugins: [
        new HtmlWebpackPlugin({
          title: `Developing - `,
          template: path.resolve(
            __dirname,
            `../../src/${app}/index.html`
          )
        }),
        new webpack.HotModuleReplacementPlugin()
      ]
    },
    parts.generateSourceMaps({ type: "eval-source-map" }),
    parts.devServer({
      host: process.env.HOST,
      port: process.env.PORT
    }),
    parts.loadCSS(),
    parts.loadImages(),
    parts.loadJavaScript({
      include: PATHS.devAppEntry(app),
      exclude: PATHS.nodeModules
    })
  ]);

module.exports = developmentConfig;
