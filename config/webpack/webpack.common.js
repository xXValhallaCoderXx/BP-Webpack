const merge = require("webpack-merge");
const parts = require("./utils/webpack.parts");
const webpack = require("webpack");

const commonConfig = merge([
  {
    plugins: [new webpack.NamedModulesPlugin()]
  },
  parts.setFreeVariable("SOME_VAR", "This is from the freeee variables")
]);

module.exports = commonConfig;
