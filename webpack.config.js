require('dotenv').config()

const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  devServer: {
    stats: "errors-only",
    host: process.env.HOST, // Defaults to `localhost`
    port: process.env.PORT, // Defaults to 8080
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Webpack demo",
    }),
  ],
};
