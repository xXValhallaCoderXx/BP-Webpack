const path = require("path");

const PATHS = {
  app: path.resolve(__dirname, "../src"),
  globalCSS: path.resolve(__dirname, "../src/styles"),
  appCssMod: path.resolve(__dirname, "../src/app"),
  componentCssMod: path.resolve(__dirname, "../src/components"),
  build: path.resolve(__dirname, "../dist")
};

module.exports = PATHS;
