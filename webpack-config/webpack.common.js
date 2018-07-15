const webpack = require("webpack");
const merge = require("webpack-merge");
const PATHS = require("./paths");
const path = require("path");
const parts = require("./webpack.parts");
const HtmlWebpackPlugin = require("html-webpack-plugin");

commonConfig = app =>
  merge([
    {
      entry: {
        app: PATHS.app
      },
      plugins: [
        new HtmlWebpackPlugin({
          title: "Webpack demo",
          template: path.resolve(__dirname, "../src/index.html")
        }),
        new webpack.NamedModulesPlugin()
      ],
      resolve: {
        extensions: ['.wasm', '.mjs', '.js', '.json', ".ts", ".tsx"]
      }
    },
    parts.loadTypescript({ include: PATHS.app }),
    parts.setFreeVariable("SOME_VAR", "This is from the freeee variables")
  ]);

module.exports = commonConfig;
