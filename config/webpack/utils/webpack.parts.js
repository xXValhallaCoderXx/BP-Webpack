const webpack = require("webpack");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const UglifyWebpackPlugin = require("uglifyjs-webpack-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const PATHS = require("../paths");

exports.setFreeVariable = (key, value) => {
  const env = {};
  env[key] = JSON.stringify(value);
  return {
    plugins: [new webpack.DefinePlugin(env)]
  };
};

// DEVELOPMENT CONFIGS

exports.devServer = ({ host, port } = {}) => ({
  devServer: {
    stats: "errors-only",
    hotOnly: true,
    host,
    port,
    overlay: {
      errors: true,
      warnings: true
    }
  }
});

exports.generateSourceMaps = ({ type }) => ({
  devtool: type
});

// PRODUCTION CONFIGS

exports.clean = path => ({
  plugins: [new CleanWebpackPlugin([path], { allowExternal: true })]
});

exports.minifyJavaScript = () => ({
  optimization: {
    minimizer: [
      new UglifyWebpackPlugin({
        cache: true,
        parallel: 4,
        exclude: /\/node_modules/,
        sourceMap: true
      })
    ]
  }
});

exports.minifyCSS = ({ options }) => ({
  plugins: [
    new OptimizeCSSAssetsPlugin({
      cssProcessor: require("cssnano"),
      cssProcessorOptions: options,
      canPrint: false
    })
  ]
});

exports.page = ({ path, template, title, entry, chunks } = {}) => ({
  entry,
  plugins: [
    new HtmlWebpackPlugin({
      filename: `${path}.html`,
      template,
      title,
    })
  ]
});

// CSS CONFIG
exports.loadCSS = ({ include, exclude } = {}) => ({
  module: {
    rules: [
      {
        test: /^((?!\.module).)*scss$/,
        include: PATHS.sharedFolder,
        exclude: PATHS.projectApps(),
        use: ["style-loader", "css-loader", "sass-loader"]
      },
      {
        test: /\.module.scss$/,
        include: PATHS.projectApps(),
        exclude: PATHS.sharedFolder,
        use: [
          {
            loader: "style-loader"
          },
          {
            loader: "css-loader",
            options: {
              modules: true,
              localIdentName: "[local]_[hash:base64:8]"
            }
          },
          {
            loader: "sass-loader"
          }
        ]
      }
    ]
  }
});

exports.extractCSS = () => {
  return {
    plugins: [
      new MiniCssExtractPlugin({
        // `allChunks` is needed to extract from extracted chunks as well
        allChunks: true,
        filename: "static/styles/[name].[hash:8].css"
      })
    ],
    module: {
      rules: [
        {
          test: /^((?!\.module).)*scss$/,
          include: PATHS.sharedFolder,
          exclude: PATHS.projectApps(),
          use: [
            {
              loader: MiniCssExtractPlugin.loader,
              options: {
                // you can specify a publicPath here
                // by default it use publicPath in webpackOptions.output
                // publicPath: '../'
              }
            },
            {
              loader: "css-loader"
            },
            {
              loader: "sass-loader"
            },
            autoprefix()
          ]
        },
        {
          test: /\.module.scss$/,
          include: PATHS.projectApps(),
          exclude: PATHS.sharedFolder,
          use: [
            {
              loader: MiniCssExtractPlugin.loader,
              options: {
                // you can specify a publicPath here
                // by default it use publicPath in webpackOptions.output
                // publicPath: '../'
              }
            },
            {
              loader: "css-loader",
              options: {
                importLoaders: 1,
                modules: true,
                localIdentName: "[local]_[hash:base64:8]"
              }
            },
            {
              loader: "sass-loader"
            },
            autoprefix()
          ]
        }
      ]
    }
  };
};

autoprefix = () => ({
  loader: "postcss-loader",
  options: {
    plugins: () => [require("autoprefixer")()]
  }
});

// IMAGE CONFIGS

exports.loadImages = ({ include, exclude, options } = {}) => ({
  module: {
    rules: [
      {
        test: /\.(png|jpg|svg)$/,
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

// JAVASCRIPT CONFIGS

exports.loadJavaScript = ({ include, exclude } = {}) => ({
  module: {
    rules: [
      {
        test: /\.js$/,
        include,
        exclude,
        use: "babel-loader"
      }
    ]
  }
});
