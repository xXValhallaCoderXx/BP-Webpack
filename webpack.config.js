const path = require("path");
const webpack = require("webpack");
const merge = require("webpack-merge");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const parts = require("./webpack-config/webpack.parts");

const PATHS = {
  app: path.resolve(__dirname, "src"),
  build: path.resolve(__dirname, "dist")
};

const commonConfig = merge([
  {
    plugins: [
      new HtmlWebpackPlugin({
        title: "Webpack demo"
      })
    ]
  },
  parts.loadJavaScript({ include: PATHS.app })
]);

const productionConfig = merge([
  parts.clean(PATHS.build),
  parts.minifyJavaScript(),
  // parts.minifyCSS({
  //   options: {
  //     discardComments: {
  //       removeAll: true
  //     },
  //     safe: true
  //   }
  // }),
  {
    output: {
      publicPath: "/" // Need this if you got Source maps on for Images to load
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
      }
    }
  },
  parts.generateSourceMaps({ type: "source-map" }),
  parts.extractCSS({
    use: ["css-loader", parts.autoprefix()]
  }),
  parts.loadImages({
    options: {
      limit: 50000,
      name: "static/images/[name].[ext]"
    }
  })
]);

const developmentConfig = merge([
  parts.generateSourceMaps({ type: "cheap-eval-source-map" }),
  parts.devServer({
    // Customize host/port here if needed
    host: process.env.HOST,
    port: process.env.PORT
  }),
  parts.loadCSS(),
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
