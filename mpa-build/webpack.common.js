const merge = require("webpack-merge");
const webpack = require("webpack");
const path = require("path");
const parts = require("./webpack.parts");
const config = require("../mpa-app/env-vars.json");
const PATHS = require("./paths");

commonConfig = env =>
  merge([
    {
      output: {
        publicPath: "/", // Need this if you got Source maps on for Images to load
        filename: "static/js/[name].js",
        chunkFilename: "static/js/[name].js"
      },
      plugins: [new webpack.NamedModulesPlugin()]
    },
    parts.setFreeVariables(config[env.target]),
    parts.loadJavaScript({
      include: env.target === "spa" ? PATHS.devEntry(env.name) : PATHS.app,
      exclude: /node_modules/
    })
  ]);

module.exports = commonConfig;