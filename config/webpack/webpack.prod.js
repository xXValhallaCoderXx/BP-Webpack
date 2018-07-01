const path = require("path");
const merge = require("webpack-merge");
const PATHS = require("./paths");
const parts = require("./utils/webpack.parts");


const productionConfig = merge([
  parts.clean(PATHS.build),

  {
    entry: {
      ['global-styles']: path.resolve(__dirname, "../../src/shared/styles/index.scss")
    },
    output: {
      publicPath: "/", // Need this if you got Source maps on for Images to load
      filename: "static/js/[name].[chunkhash:8].js",
      chunkFilename: "static/js/[name].[chunkhash:8].js"
    },
    plugins: [
    ],
    optimization: {
      splitChunks: {
        chunks : "all"
      },
      runtimeChunk: {
        name: "manifest"
      }
    },
    recordsPath: PATHS.buildRecords
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
  parts.extractCSS(),

  parts.loadImages({
    options: {
      limit: 50000,
      name: "static/images/[name].[hash:8].[ext]"
    }
  }),
  parts.loadJavaScript({
    include: PATHS.prodAppEntry,
    exclude: PATHS.nodeModules
  })
]);

module.exports = productionConfig;
