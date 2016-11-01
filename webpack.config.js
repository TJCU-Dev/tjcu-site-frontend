var Webpack = require("webpack");
var HtmlwebpackPlugin = require('html-webpack-plugin');
module.exports = {
  entry: ["./src/"],
  output: {
    path: __dirname,
    filename: "./build/bundle.js"
  },
  plugins: [
    new HtmlwebpackPlugin({
      template: './tmp-index.html'
    })
  ],
  module: {
    loaders: [{
      test: /\.css$/,
      loader: "style!css"
    }, {
      test: /\.js/,
      exclude: /(node_modules|bower_components)/,
      loader: 'babel',
      query: {
        presets: ['es2015','react',"stage-0"]
      }
    }]
  }
}
