const path = require("path");
const merge = require("webpack-merge");

const common = require("./config/webpack.common");
const production = require("./config/webpack.production");
const development = require("./config/webpack.development");
const developmentLint = require("./config/webpack.lint");

module.exports = env => {
  process.env.BABEL_ENV = env.target;
  switch (env.target) {
    case "production":
      console.log("Production Mode!");
      return merge(common.commonConfig, production.productionConfig);
    case "development":
      if (env.lint === "true") {
        console.log("Development Mode! - With Lint");
        return merge(common.commonConfig, developmentLint.developmenLintConfig);
      }
      console.log("Development Mode! - No Lint");
      return merge(common.commonConfig, development.developmentConfig);
  }
};
