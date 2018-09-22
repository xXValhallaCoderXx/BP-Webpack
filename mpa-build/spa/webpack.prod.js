const merge = require("webpack-merge");
const path = require("path");
const PATHS = require("../paths");
const parts = require("../webpack.parts");
const HtmlWebpackPlugin = require("html-webpack-plugin");
// const BundleAnalyzerPlugin = require("webpack-bundle-analyzer")
//   .BundleAnalyzerPlugin;

spaProdConfig = app =>
  merge([
    parts.clean(PATHS.spaProdBuild(app)),

    {
      entry: {
        app: PATHS.devEntry(app)
      },
      output: {
        path: PATHS.spaProdBuild(app),
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
          chunks: "all"
        }
      },
      plugins: [
        //new BundleAnalyzerPlugin(),
        new HtmlWebpackPlugin({
          title: `${app}.`.toUpperCase(),
          template: path.resolve(__dirname, `../../scc/${app}/index.html`)
        }),
      ],
      recordsPath: PATHS.spaBuildRecords(app)
    },
    parts.minifyJavaScript(),
    parts.minifyCSS({
      options: {
        discardComments: {
          removeAll: true
        },
        safe: true
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

module.exports = spaProdConfig;