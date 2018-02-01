const merge = require("webpack-merge");
const path = require("path");
const HtmlPlugin = require("html-webpack-plugin");
const parts = require("./webpack.parts");
const x = require("./paths");

exports.commonConfig = merge([
  {
    entry: {
      app: x.PATHS.app
    },
    output: {
      path: x.PATHS.build,
      filename: "static/js/[name].js"
    },
    resolve: {
      alias: {
        ReduxUtils: path.join(__dirname, "../src/__utils__/redux-helper")
      }
    },
    plugins: [
      new HtmlPlugin({
        title: "Webpack - React",
        template: x.PATHS.htmlTemplate
      })
    ]
  },
  parts.loadFonts({
    options: {
      name: "static/fonts/[name].[ext]"
    }
  }),
  parts.loadJavaScript({ include: x.PATHS.app })
]);
