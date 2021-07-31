const { merge } = require('webpack-merge');
const paths = require('./paths');
const common = require('./webpack.common')

module.exports = merge(common, {
  // 模式
  mode: 'production',
  // 输出
  output: {
    filename: '[name].[contenthash].bundle.js',
    path: paths.appDist,
    publicPath: paths.appPublic,
    // 编译前清除目录
    clean: true,
  },
})