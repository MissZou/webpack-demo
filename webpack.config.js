const webpack = require('webpack');

module.exports = {
  entry: './src/entry.js',
  output: {
    path: __dirname,
    filename: './dist/bundle.js'
  },
  module: {
    loaders: [
      {test: /\.css$/, loader: 'style!css'}
    ]
  },
  plugins: [
    new webpack.BannerPlugin('This file is created by zouweiyun')
  ]
}