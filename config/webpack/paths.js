const path = require("path");

// File Path Relative To This File

const PATHS = {
  // DEVELOPMENT BUILD PATHS


  // PRODUCTION BUILD PATHS
  build: path.resolve(__dirname, "../../dist"), // Root Output Build Path
  buildRecords: path.resolve(__dirname, "../../dist/static"), // Output path for records.json file

};

module.exports = PATHS;