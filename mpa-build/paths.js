const path = require("path");

// File Path Relative To This File

const PATHS = {
  // DEVELOPMENT PATHS

  // Path for targetting current application being worked on
  devEntry: name => {
    console.log("NAM:E ", name)
    return path.resolve(__dirname, `../mpa-app/${name}`);
  },
  // Path to target current applications index.html for development
  devHtmlTemplate: name => {
    return path.resolve(__dirname, `../mpa-app/${name}/index.html`);
  },

  // PRODUCTION PATHS
  build: path.resolve(__dirname, "../dist"), // Root Output Build Path
  buildRecords: path.resolve(__dirname, "../dist/static/records.json"), // Output path for records.json file
  app: path.resolve(__dirname, "../mpa-app"),
  // SPA Production Build
  spaProdBuild: name => {
    return path.resolve(__dirname, `../spa-dist/${name}`);
  },
  spaBuildRecords: name => {
    return path.resolve(__dirname, `../spa-dist/${name}/static/records.json`);
  },

  // DEVELOP & BUILD PATHS
  // Path to Node Modules for Excluding for Transpilation
  nodeModules: path.resolve(__dirname, "../node_modules"),
  ["mpa-shared"]: path.resolve(__dirname, "../scc-shared")
};

module.exports = PATHS;
