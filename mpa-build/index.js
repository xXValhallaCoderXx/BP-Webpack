const merge = require("webpack-merge");
const commonConfig = require("./webpack.common");

// SPA Configs
const spaDevConfig = require("./spa/webpack.dev");
const spaProdConfig = require("./spa/webpack.prod");

// MPA Config
const productionConfig = require("./mpa/webpack.prod");
const pages = require("./mpa/pages");

module.exports = env => {
  console.log("** MODE ** ", env.target);
  const { target, name, type } = env;
  process.env.BABEL_ENV = target;
  console.log("CHEESE: ", env)
  mode = target;
  if (type === "spa") {
    if (target === "development") {
      return merge(commonConfig(env), spaDevConfig(name), {mode});
    } else {
      return merge(commonConfig(env), spaProdConfig(name), {mode});
    }
  } else {
    return merge([commonConfig(env), productionConfig].concat(pages));
  }
}
