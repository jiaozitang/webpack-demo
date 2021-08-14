const { merge } = require('webpack-merge');
const common = require('./webpack.common')

module.exports = merge(common, {
  // 模式
  mode: 'production',
})