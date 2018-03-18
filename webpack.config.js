const path = require("path");
const webpack = require("webpack");
const merge = require("webpack-merge");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const parts = require("./webpack-config/webpack.parts");
const developmentConfig = require("./webpack-config/webpack.dev");

const PATHS = require("./webpack-config/paths");


const commonConfig = merge([
  {
    plugins: [new webpack.NamedModulesPlugin()]
  },
  parts.loadJavaScript({ include: PATHS.app }),
  parts.setFreeVariable("SOME_VAR", "This is from the freeee variables")
]);


module.exports = mode => {
  console.log("**MODE** ", mode);
  const { target, application } = mode;
  process.env.BABEL_ENV = target;
  mode = target;

  const pages = [
    parts.page({
      title: "Webpack Boiler - Page 1",
      template: path.resolve(__dirname, "src/app/app1/index.html"),
      path: "app1",
      chunks: ["app1", "manifest", "vendor"],
      entry: {
        app1: PATHS.app1
      }
    }),
    parts.page({
      title: "Webpack Boiler - Page 2",
      template: path.resolve(__dirname, "src/app/app2/index.html"),
      path: "app2",
      chunks: ["app2", "manifest", "vendor"],
      entry: {
        app2: PATHS.app2
      }
    }),
    parts.page({
      title: "Webpack Boiler - Page 3",
      template: path.resolve(__dirname, "src/app/app3/index.html"),
      path: "app3",
      chunks: ["app3", "manifest", "vendor"],
      entry: {
        app3: PATHS.app3
      }
    })
  ];

  if (mode === "production") {
    return merge([commonConfig, productionConfig, { mode }].concat(pages));
  } else {
    return merge(commonConfig, developmentConfig(application), { mode });
  }
};


