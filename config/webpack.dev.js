const { merge } = require('webpack-merge');
const paths = require('./paths');
const common = require('./webpack.common')

module.exports = merge(common, {
  // 模式
  mode: 'development',
  // 开发工具，开启 source map，编译调试
  devtool: 'eval-cheap-module-source-map',
  // 开发模式，自动更新改动
  devServer: {
    contentBase: './dist',
  },
  
})
