const merge = require("webpack-merge");
const parts = require("./utils/webpack.parts");
const webpack = require("webpack");
const config = require("../../env-vars.json");

commonConfig = app =>
  merge([
    {
      plugins: [new webpack.NamedModulesPlugin()]
    },
    // Will read from env-vars.json and set Variables for Production/Development
    parts.setFreeVariables(config[app.target])
  ]);

module.exports = commonConfig;
