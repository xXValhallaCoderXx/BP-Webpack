const merge = require("webpack-merge");
const commonConfig = require("./webpack.common");
const developmentConfig = require("./webpack.dev");
const productionConfig = require("./webpack.prod");
const pages = require("./pages");

module.exports = env => {
  console.log("** MODE ** ", env.target);
  const { target, app } = env;
  process.env.BABEL_ENV = target;
  mode = target;

  if (mode === "production") {
    return merge([productionConfig].concat(pages));
  } else {
    return merge(commonConfig, developmentConfig(app), { mode });
  }
};
