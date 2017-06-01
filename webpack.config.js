const path = require('path');

const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');	

const PATHS = {
  app: path.join(__dirname, 'src'),
  build: path.join(__dirname, 'dist'),
}

module.exports = {
  entry: {
    app: PATHS.app, // resolved to **/index.js if the directory contains index.js
    vendor: ['p5'],
  },
  output: {
    filename: '[name].bundle.js',
    path: PATHS.build,
  },
  
  module: {
    rules: [
     { 
       test: /\.js$/,
       enforce: 'pre',

       loader: 'eslint-loader',
       options: {
         emitWarning: true,
       },
     },
     {
       test: /\.js$/,
       include: PATHS.app,

       loader: 'babel-loader',
       options: {
         // Enable caching for improved performance during
         // development.
         // It uses default OS directory by default. If you need
         // something more custom, pass a path to it.
         // I.e., { cacheDirectory: '<path>' }
         cacheDirectory: true,
       },
     },
    ]
  },
  
  devtool: 'inline-source-map',
  devServer: {
    watchOptions: {
      aggregateTimeout: 300,
      poll: 1000,
    },
  },

  plugins: [
    new HtmlWebpackPlugin({
      title: 'Processing',
      // favicon: './favicon.ico',
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
    }),
  ],
};
