const path = require('path');
const { merge } = require('webpack-merge')
const common = require('./webpack.config.common')
const SpeedMeasurePlugin = require("speed-measure-webpack-plugin");
const smp = new SpeedMeasurePlugin();

const needSpeed = false

const config = merge(common, {
  // 模式
  mode: 'development',
  // 开发 source map ,编译调试
  devtool: 'inline-source-map',
  // 开发模式，自动更新改动
  devServer: {
    contentBase: './dist',
  },
  // 输出
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    // 编译前清除目录
    clean: true
  },
})

module.exports = config // needSpeed ? smp.wrap(config) : 