const { merge } = require('webpack-merge');
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const common = require('./webpack.common')

module.exports = merge(common, {
  // 模式
  mode: 'production',
  optimization: {
    minimizer: [
      new CssMinimizerPlugin(),
    ],
  },
})