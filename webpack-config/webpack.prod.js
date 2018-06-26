const path = require("path");
const merge = require("webpack-merge");
const PATHS = require("./paths");

const parts = require("./webpack.parts");


const productionConfig = merge([
  parts.clean(PATHS.build),

  {
    output: {
      publicPath: "/", // Need this if you got Source maps on for Images to load
      filename: "static/js/[name].[chunkhash:8].js",
      chunkFilename: "static/js/[name].[chunkhash:8].js"
    },
    optimization: {
      splitChunks: {
        cacheGroups: {
          commons: {
            test: /[\\/]node_modules[\\/]/,
            name: "vendor",
            chunks: "all"
          },
          styles: {
            name: 'styles',
            test: /\.css$/,
            chunks: 'all',
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
  parts.extractGlobalCSS({ include: PATHS.appGlobalModules }),
  parts.extractCSS({ include: PATHS.appCSSModules(["app1", "app2", "app3"]) }),

  parts.loadImages({
    options: {
      limit: 50000,
      name: "static/images/[name].[hash:8].[ext]"
    }
  })
]);

module.exports = productionConfig;