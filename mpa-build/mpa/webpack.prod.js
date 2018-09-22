const merge = require("webpack-merge");
const PATHS = require("../paths");
const parts = require("../webpack.parts");
const safeParser = require('postcss-safe-parser');
// const CopyWebpackPlugin = require("copy-webpack-plugin");
// const BundleAnalyzerPlugin = require("webpack-bundle-analyzer")
//   .BundleAnalyzerPlugin;

const productionConfig = merge([
  parts.clean(PATHS.build),

  {
    output: {
      path: PATHS.build
      // filename: "static/js/[name].js",
      // chunkFilename: "static/js/[name].js"
    },
    stats: {
      all: undefined,
      children: false,
      modules: false
    },
    mode: "production",
    optimization: {
      splitChunks: {
        chunks: "all",
        cacheGroups: {
          styles: {
            name: "common-styles",
            test: /\.s|css$/,
            minChunks: 2,
            enforce: true
          }
        }
      }
    },
    // plugins: [
    //   new BundleAnalyzerPlugin()
    // ],
    recordsPath: PATHS.buildRecords
  },
  parts.minifyJavaScript(),
  parts.minifyCSS({
    options: {
      discardComments: {
        removeAll: true
      },
      parser: safeParser,
    }
  }),
  parts.extractCSS({
    exclude: /node_modules/
  }),
  parts.loadImages({
    options: {
      limit: 50000,
      name: "static/images/[name].[ext]"
    }
  })
]);

module.exports = productionConfig;