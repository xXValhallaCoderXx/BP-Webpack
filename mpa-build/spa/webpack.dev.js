const webpack = require("webpack");
const merge = require("webpack-merge");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const PATHS = require("../paths");
const parts = require("../webpack.parts");

spaDevConfig = app =>
  merge([
    {
      entry: {
        app: PATHS.devEntry(app)
      },
      plugins: [
        new HtmlWebpackPlugin({
          title: `Developing - ${app}`,
          template: PATHS.devHtmlTemplate(app)
        }),
        new webpack.HotModuleReplacementPlugin()
      ]
    },
    parts.generateSourceMaps({type: "eval-source-map"}),
    parts.devServer({
      host: process.env.HOST,
      port: process.env.PORT
    }),
    parts.developmentCSS({
      include: PATHS.app,
      exclude: /node_modules/
    }),
    parts.loadImages()
  ]);

module.exports = spaDevConfig;