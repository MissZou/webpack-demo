var webpack = require('webpack');
var path = require('path');
var projectRoot = path.resolve(__dirname, './');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var plugins = [
    new webpack.BannerPlugin('This file is created by zouweiyun'),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    }),
    new ExtractTextPlugin(path.join('main.css'), {
      allChunks: true
    })
  ]

module.exports = {
  entry: './src/entry.js',
  output: {
    path: __dirname,
    filename: './dist/bundle.js'
  },
  module: {
    loaders: [
      { 
        test: /\.css$/, 
        loader: ExtractTextPlugin.extract(
          'style-loader',
          'css-loader?-autoprefixer!postcss-loader'
        )
      }, 
      {
        test: /\.js$/,
        loader: 'babel',
        query: {
          presets: ['es2015']
        },
        include: projectRoot,
        exclude: /node_modules/
      }
    ]
  },
  postcss:()=>{
    return [
      require('autoprefixer')
    ];
  },
  plugins: plugins
}
