const path = require("path");

const PATHS = {
  app: path.resolve(__dirname, "../src"),
  app1: path.resolve(__dirname, "../src/app1"),
  app2: path.resolve(__dirname, "../src/app2"),
  app3: path.resolve(__dirname, "../src/app3"),
  globalCSS: path.resolve(__dirname, "../src/assets/styles"),
  cssModules: path.resolve(__dirname, "../src"),
  sharedComponentModules: path.resolve(__dirname, "../src/sharedComponents"),
  build: path.resolve(__dirname, "../dist")
};

module.exports = PATHS;