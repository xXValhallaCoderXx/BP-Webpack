const merge = require("webpack-merge");
const parts = require("./webpack.parts");
const webpack = require("webpack");

const x = require("./paths");

exports.developmentConfig = merge([
  {
    entry: [x.PATHS.app],
    plugins: [
      new webpack.DefinePlugin({
        "process.env": {
          NODE_ENV: '"development"'
        }
      }),
      new webpack.HotModuleReplacementPlugin(),
      new webpack.NamedModulesPlugin()
    ]
  },
  parts.generateSourceMaps({ type: "cheap-module-eval-source-map" }),
  parts.devServer({
    host: process.env.HOST,
    port: process.env.PORT,
    //hostCheck: false
  }),
  parts.loadCSS({ include: x.PATHS.cssModules }),
  parts.loadGlobalCSS({ include: x.PATHS.globalCSS }),
  parts.loadImages()
]);
