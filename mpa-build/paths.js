const path = require("path");

// File Path Relative To This File

const PATHS = {
  // DEVELOPMENT BUILD PATHS
  devAppEntry: name => {
    return path.resolve(__dirname, `../../src/${name}`);
  },

  // PRODUCTION BUILD PATHS
  prodAppEntry: path.resolve(__dirname, "../../src"),
  build: path.resolve(__dirname, "../../dist"), // Root Output Build Path
  buildRecords: path.resolve(__dirname, "../../dist/static/records.json"), // Output path for records.json file
  projectApps: appArray => {
    appArray = ["app1", "app2", "app3"]
    let paths = [];
    appArray.map(app => {
      paths.push(path.resolve(__dirname, `../../src/${app}`))
    })
    return paths;
  },
  // GENERIC PATHS
  sharedFolder: path.resolve(__dirname, "../../src/shared"),
  nodeModules: path.resolve(__dirname, "../../node_modules")
};

module.exports = PATHS;
