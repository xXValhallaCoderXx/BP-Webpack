const path = require("path");

const PATHS = {
  cssModules: path.resolve(__dirname, "../src"),
  build: path.resolve(__dirname, "../dist"),
  appCSSModules: apps => {
    // Gets a name of current Apps
    // Defines an entry point for Global CSS in each application
    let paths = [];
    apps.map(app_name => {
      paths.push(
        path.resolve(__dirname, `../src/${app_name}/app`)
      );
    });
    return paths;
  },
  appEntryProd: apps => {
    // Gets a name of current Apps
    // Defines an entry point for Global CSS in each application

    return apps.map(app_name => {
     return path.resolve(__dirname, `../src/${app_name}`)
    });

  },
  appHtmlTemplate: app_name => {
    // Gets a name of current Apps
    // Defines an entry point for Global CSS in each application
    return path.resolve(__dirname, `../src/${app_name}/index.html`)
  },
  appGlobalModules: path.resolve(__dirname, "../src/shared/styles/index.scss"),
  appCSSModules2: path.resolve(__dirname, "../src"),
};

module.exports = PATHS;