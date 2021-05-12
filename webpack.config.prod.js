const path = require('path')
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");


module.exports = {
  mode: "production",
  plugins: [
    new MiniCssExtractPlugin(),
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    }),
  ],
  entry: {
    polyfill: "babel-polyfill",
    app: "./src/js/index.js",
    css: "./src/css/index.js",
  },
  output: {
    filename: "[name].dist.js",
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: [path.resolve(__dirname, "node_modules")],
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader, // instead of style-loader
          "css-loader",
        ],
      },
      {
        test: /\.html$/i,
        loader: 'html-loader',
      }
    ],
  },
};