const ExtractTextPlugin = require("extract-text-webpack-plugin");

exports.devServer = ({ host, port } = {}) => ({
  devServer: {
    stats: "errors-only",
    host, // Defaults to `localhost`
    port, // Defaults to 8080
    overlay: {
      errors: true,
      warnings: true
    }
  }
});

exports.loadCSS = ({ include, exclude } = {}) => ({
  module: {
    rules: [
      {
        test: /\.css$/,
        include,
        exclude,
        use: ["style-loader", "css-loader"]
      }
    ]
  }
});

exports.extractCSS = ({ include, exclude, use }) => {
  // Output extracted CSS to a file
  const plugin = new ExtractTextPlugin({
    // `allChunks` is needed to extract from extracted chunks as wel\

    allChunks: true,
    filename: "static/styles/[name].css"
  });
  return {
    module: {
      rules: [
        {
          test: /\.css$/,
          include,
          exclude,
          use: plugin.extract({
            use,
            fallback: "style-loader"
          })
        }
      ]
    },
    plugins: [plugin]
  };
};

exports.autoprefix = () => ({
  loader: "postcss-loader",
  options: {
    plugins: () => [require("autoprefixer")()]
  }
});

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

exports.generateSourceMaps = ({ type }) => ({
  devtool: type
});
