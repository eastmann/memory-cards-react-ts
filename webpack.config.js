const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: process.env.NODE_ENV || 'production',
  entry: './src/script.tsx',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.[contenthash].js'
  },
  module: {
    rules: [{
      test: /\.js$/,
      use: 'babel-loader',
      exclude: /node_modules/
    }, {
      test: /\.css$/,
      use: ['style-loader', 'css-loader'],
    }, {
      test: /\.svg$/,
      type: 'asset/inline'
    }, {
      test: /\.(ts|tsx)$/,
      use: 'ts-loader',
      exclude: /node_modules/
    }]
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js']
  },
  plugins: [new HtmlWebpackPlugin({
    template: './src/index.html'
  })],
  devServer: {
    open: true,
  },
  performance: {
    hints: false,
    maxEntrypointSize: 512000,
    maxAssetSize: 512000
  }
}
