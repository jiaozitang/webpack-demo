const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path')

module.exports = {
  // 入口
  entry: {
    index: './src/index.js',
  },
  plugins: [
    // 生成html,自动引入所有bundle
    new HtmlWebpackPlugin({
      title: 'Development',
    }),
  ],
  // 可以将公共的依赖模块提取到已有的入口 chunk 中
  // 或者提取到一个新生成的 chunk。
  optimization: {
    moduleIds: 'deterministic',
    runtimeChunk: 'single',
   splitChunks: {
     cacheGroups: {
       vendor: {
         test: /[\\/]node_modules[\\/]/,
         name: 'vendors',
         chunks: 'all',
       },
     },
   },
  },
  module: {
    rules: [
      // 加载css
      {
        test: /\.css$/i,
        // include: path.resolve(__dirname, 'src'),
        use: ['style-loader', 'css-loader']
      },
      // 加载css
      {
        test: /\.scss$/i,
        // include: [path.resolve(__dirname, 'src')],
        use: [
          // 将 JS 字符串生成为 style 节点
          'style-loader',
          // 将 CSS 转化成 CommonJS 模块
          'css-loader',
          // 将 Sass 编译成 CSS
          'sass-loader',]
      },
      // 加载图片
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        // include: [path.resolve(__dirname, 'src')],
        type: 'asset/resource',
      },
    ]
  }
}

