const HtmlWebpackPlugin = require('html-webpack-plugin');
const FileManagerPlugin = require('filemanager-webpack-plugin');
const path = require('path');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: {
    index: path.join(__dirname, 'source', 'pages', 'index.js'),
    gallery: path.join(__dirname, 'source', 'pages', 'gallery', 'index.js'),
    articles: path.join(__dirname, 'source', 'pages', 'articles', 'index.js'),
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].[contenthash:8].js',
    assetModuleFilename: path.join('assets', 'img', '[name][ext]'),
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'source', 'pages', 'index.html'),
      chunks: ['index'],
      filename: path.join(__dirname, 'dist', 'index.html'),
    }),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'source', 'pages', 'gallery', 'index.html'),
      chunks: ['gallery'],
      filename: path.join(__dirname, 'dist', 'gallery', 'index.html'),
    }),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'source', 'pages', 'articles', 'index.html'),
      chunks: ['articles'],
      filename: path.join(__dirname, 'dist', 'articles', 'index.html'),
    }),
    new MiniCssExtractPlugin(
      {
        filename: '[name].[contenthash].css',
      },
    ),
    new FileManagerPlugin({
        events: {
            onStart: {
                delete: ['dist'],
            },
        },
    }),
    new BundleAnalyzerPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.html$/i,
        loader: 'html-loader',
        options: {
          sources: {
            list: [
              '...',
              {
                tag: 'a',
                attribute: 'href',
                type: 'src',
                filter: (tag, attribute, attributes) => {
                  const entry = attributes.find(attr => attr.name === attribute);
                  return entry.value.includes('_slide.jpg');
                },
              },
            ],
          },
        },
      },
      {
        test: /\.(scss|css)$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.(png|jpg|jpeg|webp)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.svg$/,
        type: 'asset/resource',
        generator: {
          filename: path.join('icons', '[name][ext]'),
        },
      },
      {
        test: /\.(woff2?|eot|ttf|otf)$/i,
        type: 'asset/resource',
        generator: {
          filename: '[name][ext]',
        }
      },
    ],
  },
  devServer: {
    watchFiles: path.join(__dirname, 'source'),
    port: 9000,
  },
};
