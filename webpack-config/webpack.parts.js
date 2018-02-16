const ExtractTextPlugin = require("extract-text-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const cssnano = require("cssnano");
const BabelWebpackPlugin = require("babel-minify-webpack-plugin");
const webpack = require("webpack");

exports.devServer = ({ host, port, hostCheck } = {}) => ({
  devServer: {
    historyApiFallback: true,
    stats: "errors-only",
    hotOnly: true,
    inline: true,
    disableHostCheck: hostCheck || false,
    host, // Defaults to `localhost`
    port, // Defaults to 8080
    overlay: {
      errors: true,
      warnings: true
    }
  }
});

exports.lintJavaScript = ({ include, exclude, options }) => ({
  module: {
    rules: [
      {
        test: /\.js$/,
        include,
        exclude,
        enforce: "pre",
        loader: "eslint-loader",
        options
      }
    ]
  }
});

exports.loadCSS = ({ include, exclude } = {}) => ({
  module: {
    rules: [
      {
        test: /\.css$/,
        include,
        exclude,
        use: [
          {
            loader: "style-loader"
          },
          {
            loader: "css-loader",
            options: {
              modules: true,
              localIdentName: "[local]___[hash:base64:5]"
            }
          }
        ]
      }
    ]
  }
});

exports.loadGlobalCSS = ({ include, exclude } = {}) => ({
  module: {
    rules: [
      {
        test: /\.css$/,
        include,
        exclude,
        use: [
          {
            loader: "style-loader"
          },
          {
            loader: "css-loader"
          }
        ]
      }
    ]
  }
});

exports.extractCSS = ({ include, exclude }) => {
  // Output extracted CSS to a file
  const plugin = new ExtractTextPlugin({
    filename: "/static/css/[name].css"
  });
  return {
    module: {
      rules: [
        {
          test: /\.css$/,
          include,
          exclude,
          use: plugin.extract({
            use: [
              {
                loader: "css-loader",
                options: {
                  modules: true
                }
              },
              autoprefix()
            ]
          })
        }
      ]
    },
    plugins: [plugin]
  };
};

const autoprefix = () => ({
  loader: "postcss-loader",
  options: {
    plugins: () => [require("autoprefixer")()]
  }
});

exports.loadImages = ({ include, exclude, options } = {}) => ({
  module: {
    rules: [
      {
        test: /\.(png|jpg|svg|gif)$/,
        include,
        exclude,
        use: {
          loader: "url-loader",
          options
        }
      }
    ]
  }
});

exports.compressImages = ({ include, exclude } = {}) => ({
  module: {
    rules: [
      {
        test: /\.(gif|png|jpe?g|svg)$/,
        loaders: [
          {
            loader: "image-webpack-loader",
            query: {
              mozjpeg: {
                progressive: true,
                quality: "75"
              },
              gifsicle: {
                interlaced: false
              },
              optipng: {
                optimizationLevel: 4
              },
              pngquant: {
                quality: "75-90",
                speed: 3
              }
            }
          }
        ]
      }
    ]
  }
});

exports.loadFonts = ({ include, exclude, options } = {}) => ({
  module: {
    rules: [
      {
        // Capture eot, ttf, woff, and woff2
        test: /\.(eot|ttf|woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
        include,
        exclude,
        use: {
          loader: "file-loader",
          options
        }
      }
    ]
  }
});

exports.loadJavaScript = ({ include, exclude }) => ({
  module: {
    rules: [
      {
        test: /\.(ts|tsx)?$/,
        include,
        exclude,
        use: [
          {
            loader: "babel-loader",
            options: {
              cacheDirectory: true
            }
          },
          {
            loader: "ts-loader"
          }
        ]
      }
    ]
  }
});

exports.generateSourceMaps = ({ type }) => ({
  devtool: type
});

exports.extractBundles = bundles => ({
  plugins: bundles.map(
    bundle => new webpack.optimize.CommonsChunkPlugin(bundle)
  )
});

exports.clean = path => ({
  plugins: [new CleanWebpackPlugin([path], { allowExternal: true })]
});

exports.minifyJavaScript = () => ({
  plugins: [new BabelWebpackPlugin()]
});

exports.minifyCSS = ({ options }) => ({
  plugins: [
    new OptimizeCSSAssetsPlugin({
      cssProcessor: cssnano,
      cssProcessorOptions: options,
      canPrint: false
    })
  ]
});
