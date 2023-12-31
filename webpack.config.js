const HtmlWebpackPlugin = require("html-webpack-plugin");
const FileManagerPlugin = require("filemanager-webpack-plugin");
const path = require("path");
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer").BundleAnalyzerPlugin;

module.exports = {
  entry: {
    index: path.join(__dirname, "source", "pages", "index.js"),
    gallery: path.join(__dirname, "source", "pages", "gallery", "index.js"),
    articles: path.join(__dirname, "source", "pages", "articles", "index.js"),
  },
  output: {
    path: path.join(__dirname, "dist"),
    filename: "[name].[contenthash:8].js",
    // assetModuleFilename: path.join("assets", "img", "[name][ext]"),
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "source", "pages", "index.html"),
      chunks: ["index"],
      filename: path.join(__dirname, "dist", "index.[contenthash:8].html"),
    }),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "source", "pages", "gallery", "index.html"),
      chunks: ["gallery"],
      filename: path.join(__dirname, "dist", "gallery", "index.[contenthash:8].html"),
    }),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "source", "pages", "articles", "index.html"),
      chunks: ["articles"],
      filename: path.join(__dirname, "dist", "articles", "index.[contenthash:8].html"),
    }),
    new FileManagerPlugin({
        events: {
            onStart: {
                delete: ["dist"],
            },
        },
    }),
    new BundleAnalyzerPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.html$/i,
        loader: "html-loader",
      },
      // {
      //   test: /\.(png|jpg|jpeg|gif)$/i,
      //   type: "asset/resource",
      // },
    ],
  },
  devServer: {
    watchFiles: path.join(__dirname, "source"),
    port: 9000,
  },
};
