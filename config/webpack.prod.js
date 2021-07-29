const path = require('path');
const { merge } = require('webpack-merge')
const common = require('./webpack.common')

module.exports = merge(common, {
  // 模式
  mode: 'production',
  // 输出
  output: {
    filename: '[name].[contenthash].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    // 编译前清除目录
    clean: true
  },
})