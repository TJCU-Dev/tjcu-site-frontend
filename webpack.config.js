var Webpack = require("webpack");
var HtmlwebpackPlugin = require('html-webpack-plugin');
module.exports = {
  entry: ["./src/"],
  output: {
    path: __dirname + "/build/",
    filename: "bundle.js"
  },
  resolve: {
    alias: {
      jquery: "jquery/src/jquery"
    }
  },
  plugins: [
    new HtmlwebpackPlugin({
      template: './tmp-index.html',
      filename: './index.html'
    }),
    new Webpack.ProvidePlugin({
      $: 'jquery'
    }),
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
    contentBase: __dirname, //本地服务器所加载的页面所在的目录
    colors: true, //终端中输出结果为彩色
    historyApiFallback: true, //不跳转
    inline: true, //实时刷新
    port: 3001,
    host: '127.0.0.1',
    proxy: {
    '/api/*': {
        target: 'http://127.0.0.1:3000',
        secure: false,
    },
    '/img/*': {
        target: 'http://127.0.0.1:3000/',
        pathRewrite: {'^/img/' : '/'},
        changeOrigin: true,
        secure: false,
    }
  }
  }
}
