const path = require("path");
const merge = require("webpack-merge");
const PATHS = require("./paths");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const parts = require("./webpack.parts");

const productionConfig = merge([
  parts.clean(PATHS.build),

  {
    entry: {
      app1: path.resolve(__dirname, "../src/app1"),
      app2: path.resolve(__dirname, "../src/app2"),
      app3: path.resolve(__dirname, "../src/app3")
    },
    output: {
      publicPath: "/", // Need this if you got Source maps on for Images to load
      filename: "static/js/[name].[chunkhash:8].js",
      chunkFilename: "static/js/[name].[chunkhash:8].js"
    },
    plugins: [
      new HtmlWebpackPlugin({
        title: `Storyfier`,
        template: PATHS.appHtmlTemplate("app1")
      })
    ],
    optimization: {
      splitChunks: {
        cacheGroups: {
          commons: {
            test: /[\\/]node_modules[\\/]/,
            name: "vendor",
            chunks: "all"
          },
          styles: {
            name: "styles",
            test: /\.css$/,
            chunks: "all",
            enforce: true
          }
        }
      },
      runtimeChunk: {
        name: "manifest"
      }
    },
    recordsPath: path.join(__dirname, "../records.json")
  },
  //parts.generateSourceMaps({ type: "source-map" }),

  parts.minifyJavaScript(),
  parts.minifyCSS({
    options: {
      discardComments: {
        removeAll: true
      },
      safe: true
    }
  }),
  //parts.extractGlobalCSS({ include: PATHS.appGlobalModules }),
  parts.extractCSS({ include: PATHS.appCSSModules(["app1", "app2", "app3"]) }),

  parts.loadImages({
    options: {
      limit: 50000,
      name: "static/images/[name].[hash:8].[ext]"
    }
  })
]);

module.exports = productionConfig;
