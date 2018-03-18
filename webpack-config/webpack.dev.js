const path = require("path");
const webpack = require("webpack");
const merge = require("webpack-merge");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const PATHS = require("./paths");

const parts = require("./webpack.parts");

developmentConfig = currentApp =>
  merge([
    {
      entry: {
        app: path.resolve(__dirname, `../src/app/${currentApp}`)
      },
      plugins: [
        new HtmlWebpackPlugin({
          title: `Developing - `,
          template: path.resolve(__dirname, `../src/app/${currentApp}/index.html`)
        }),
        new webpack.HotModuleReplacementPlugin()
      ]
    },
    parts.generateSourceMaps({ type: "eval-source-map" }),
    parts.devServer({
      host: process.env.HOST,
      port: process.env.PORT
    }),
    parts.loadGlobalCSS({ include: PATHS.globalCSS }),
    parts.cssModules({ include: PATHS.cssModules }),
    parts.loadImages()
  ]);

module.exports = developmentConfig;
