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
      title: 'Hello World app',
      template: './tmp-index.html',

    })
  ],
  eslint: {
  configFile: './.eslintrc'
},
  module: {
    loaders: [{
      test: /\.css$/,
      loader: "style!css"
    }, {
      test: /\.js/,
      exclude: /(node_modules|bower_components)/,
      loader: 'babel',
      query: {
        presets: ['react', 'es2015']
      }
    }, {
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'eslint-loader'
    }]
  }
}
