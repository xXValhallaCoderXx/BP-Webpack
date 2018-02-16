const merge = require("webpack-merge");
const parts = require("./webpack.parts");
const webpack = require("webpack");
const x = require("./paths");

exports.testingConfig = merge([
  parts.generateSourceMaps({ type: "source-map" }),
  {
    performance: {
      hints: "warning", // 'error' or false are valid too
      maxEntrypointSize: 80000, // in bytes
      maxAssetSize: 450000 // in bytes
    },
    plugins: [
      new webpack.DefinePlugin({
        "process.env": {
          NODE_ENV: '"production"'
        }
      })
    ]
  },
  parts.clean(x.PATHS.build),
  parts.minifyJavaScript(),
  parts.minifyCSS({
    options: {
      discardComments: {
        removeAll: true
      },
      // Run cssnano in safe mode to avoid
      // potentially unsafe transformations.
      safe: true
    }
  }),

  parts.extractCSS({ include: x.PATHS.app }),
  parts.loadImages({
    options: {
      limit: 15000,
      publicPath: "../../",
      name: "static/images/[name].[ext]"
    }
  }),
  parts.compressImages(),
  parts.extractBundles([
    {
      name: "vendor",
      minChunks: ({ resource }) =>
        resource &&
        resource.indexOf("node_modules") >= 0 &&
        resource.match(/\.js$/)
    },
    {
      name: "manifest",
      minChunks: Infinity
    }
  ])
]);
