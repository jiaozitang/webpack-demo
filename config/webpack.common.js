const HtmlWebpackPlugin = require('html-webpack-plugin');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');
const paths = require('./paths');

console.log(__dirname)

module.exports = {
  // 入口
  entry: {
    index: './src/index.js',
  },
  // 输出
  output: {
    filename: '[name].bundle.js' || '[name].[contenthash].bundle.js',
    path: paths.appDist,
    publicPath: paths.appPublic,
    // 编译前清除目录
    clean: true
  },
  plugins: [
    // 生成html，自动引入所有bundle
    new HtmlWebpackPlugin({
      title: 'release_v0',
    }),
    // 进度条
    new ProgressBarPlugin({
      format:'  :msg [:bar] :percent (:elapsed s)'
    }),
  ],
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        include: paths.appSrc,
        use: [
          MiniCssExtractPlugin.loader,
          // 将 JS 字符串生成为 style 节点
          'style-loader',
          // 将 CSS 转化成 CommonJS 模块
          'css-loader',
          // 将 Sass 编译成 CSS
          'sass-loader',
        ],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        include: [
          paths.appSrc,
        ],
        type: 'asset/resource',
      },
      {
        test: /.(woff|woff2|eot|ttf|otf)$/i,
        include: [
           paths.appSrc,
         ],
        type: 'asset/resource',
      },
      {
        test: /\.m?js$/,
        include: [
          paths.appSrc,
        ],
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],

            // 引入 Babel runtime 作为一个独立模块，来避免重复引入
            plugins: ['@babel/plugin-transform-runtime'],

            // 开启缓存
            cacheDirectory: true,
          },

        }
      }
    ],
  },
}

