const path = require("path");
const merge = require("webpack-merge");
const PATHS = require("./paths");

const parts = require("./webpack.parts");


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
    recordsPath: path.join(__dirname, "../records.json")
  },
  parts.generateSourceMaps({ type: "source-map" }),
  parts.extractGlobalCSS({ include: PATHS.globalCSS }),
  parts.extractCSS({ include: PATHS.cssModules }),

  parts.loadImages({
    options: {
      limit: 50000,
      name: "static/images/[name].[hash:8].[ext]"
    }
  })
]);

module.exports = productionConfig;