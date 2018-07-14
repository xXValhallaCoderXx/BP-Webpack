const path = require("path");

const PATHS = {
  app: path.resolve(__dirname, "../src"),
  globalCSS: path.resolve(__dirname, "../src/assets/styles"),
  cssModules: path.resolve(__dirname, "../src/app"),
  build: path.resolve(__dirname, "../dist")
};

module.exports = PATHS;
