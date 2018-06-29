const path = require("path");
const webpack = require("webpack");
const merge = require("webpack-merge");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const parts = require("./webpack.parts");

developmentConfig = currentApp =>
  merge([
    {
      entry: {
        app: path.resolve(__dirname, `../../src/${currentApp}`)
      },
      plugins: [
        new HtmlWebpackPlugin({
          title: `Developing - `,
          template: path.resolve(__dirname, `../../src/${currentApp}/index.html`)
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
    parts.loadImages()
  ]);

module.exports = developmentConfig;