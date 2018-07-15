const webpack = require("webpack");
const merge = require("webpack-merge");
const PATHS = require("./paths");
const parts = require("./webpack.parts");

developmentConfig = app =>
  merge([
    {
      plugins: [new webpack.HotModuleReplacementPlugin()]
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
