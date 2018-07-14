const path = require("path");
const webpack = require("webpack");
const merge = require("webpack-merge");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const parts = require("./webpack-config/webpack.parts");

const PATHS = {
  app: path.resolve(__dirname, "src"),
  globalCSS: path.resolve(__dirname, "src/assets/styles"),
  cssModules: path.resolve(__dirname, "src/app"),
  build: path.resolve(__dirname, "dist")
};

const commonConfig = merge([
  {
    entry: {
      app: PATHS.app
    },
    plugins: [
      new HtmlWebpackPlugin({
        title: "Webpack demo",
        template: path.resolve(__dirname, "src/index.html")
      }),
      new webpack.NamedModulesPlugin()
    ]
  },
  parts.loadJavaScript({ include: PATHS.app }),
  parts.setFreeVariable("SOME_VAR", "This is from the freeee variables")
]);

const productionConfig = merge([
  parts.clean(PATHS.build),
  parts.minifyJavaScript(),
  parts.minifyCSS({
    options: {
      discardComments: {
        removeAll: true
      },
      safe: true
    }
  }),
  {
    output: {
      publicPath: "/", // Need this if you got Source maps on for Images to load
      filename: "[name].[chunkhash:8].js",
      chunkFilename: "static/js/[name].[chunkhash:8].js"
    },
    optimization: {
      splitChunks: {
        cacheGroups: {
          commons: {
            test: /[\\/]node_modules[\\/]/,
            name: "vendor",
            chunks: "all"
          }
        }
      },
      runtimeChunk: {
        name: "manifest"
      }
    },
    recordsPath: path.join(__dirname, "records.json")
  },
  // parts.generateSourceMaps({ type: "source-map" }),
  parts.extractGlobalCSS({ include: PATHS.globalCSS }),
  parts.extractCSS({ include: PATHS.cssModules }),

  parts.loadImages({
    options: {
      limit: 50000,
      name: "static/images/[name].[hash:8].[ext]"
    }
  })
]);

const developmentConfig = merge([
  {
    plugins: [new webpack.HotModuleReplacementPlugin()]
  },
  parts.generateSourceMaps({ type: "eval-source-map" }),
  parts.devServer({
    host: process.env.HOST,
    port: process.env.PORT
  }),
  parts.loadGlobalCSS({ include: PATHS.globalCSS }),
  parts.cssModules({ include: PATHS.cssModules }),
  parts.loadImages()
]);

module.exports = mode => {
  console.log("**MODE** ", mode);
  process.env.BABEL_ENV = mode.target;
  mode = mode.target;
  if (mode === "production") {
    return merge(commonConfig, productionConfig, { mode });
  }
  return merge(commonConfig, developmentConfig, { mode });
};
