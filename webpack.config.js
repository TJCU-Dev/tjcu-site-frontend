var Webpack = require("webpack");
var HtmlwebpackPlugin = require('html-webpack-plugin');
module.exports = {
  entry: ["./src/"],
  output: {
    path: __dirname,
    filename: "./build/bundle.js",
      publicPath: "/build/",
  },
  plugins: [
    new HtmlwebpackPlugin({
      template: './tmp-index.html',
      filename: './build/index.html'
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
        presets: ['es2015', 'react', "stage-0"]
      }
    }]
  },
  devServer: {
    contentBase: __dirname+"/build/", //本地服务器所加载的页面所在的目录
    colors: true, //终端中输出结果为彩色
    historyApiFallback: true, //不跳转
    inline: true, //实时刷新
    port: 21212,
    host:'127.0.0.1'
  }
}
