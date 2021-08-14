const webpack = require('webpack')
const { merge } = require('webpack-merge');
const SpeedMeasurePlugin = require('speed-measure-webpack-plugin');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const common = require('./webpack.common')

const smp = new SpeedMeasurePlugin();

const isNeedSpeed = true

const config = merge(common, {
  // 模式
  mode: 'development',
  // 开发工具，开启 source map，编译调试
  devtool: 'eval-cheap-module-source-map',
  // 开发模式，自动更新改动
  devServer: {
    contentBase: './dist',
    hot: true, // 热更新
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new ReactRefreshWebpackPlugin(),
  ],
})

module.exports = isNeedSpeed ? smp.wrap(config) : config
