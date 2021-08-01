const HtmlWebpackPlugin = require('html-webpack-plugin');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const paths = require('./paths');

const ctx = {
  isEnvDevelopment: process.env.NODE_ENV === 'development',
  isEnvProduction: process.env.NODE_ENV === 'production',
}

module.exports = {
  // 入口
  entry: {
    index: './src/index.tsx',
  },
  // 输出
  output: {
    // 仅在生产环境添加 hash
    filename: ctx.isEnvProduction ? '[name].[contenthash].bundle.js' : '[name].bundle.js',
    path: paths.appDist,
    // publicPath: paths.appPublic,
    // 编译前清除目录
    clean: true
  },
  resolve: {
    extensions: ['.tsx', '.jsx', '.ts', '.js'],
  },
  plugins: [
    // 生成html，自动引入所有bundle
    new HtmlWebpackPlugin({
      title: 'release_v1',
    }),
    // 进度条
    new ProgressBarPlugin({
      format:'  :msg [:bar] :percent (:elapsed s)'
    }),
    // 打包体积分析
    new BundleAnalyzerPlugin(),
    // 提取 CSS
    new MiniCssExtractPlugin()
  ],
  module: {
    rules: [
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
        test: /\.module\.(scss|sass)$/,
        include: paths.appSrc,
        use: [
          // 将 JS 字符串生成为 style 节点
          'style-loader',
          MiniCssExtractPlugin.loader,
          // 将 CSS 转化成 CommonJS 模块
          {
            loader: 'css-loader',
            options: {
              // Enable CSS Modules features
              modules: true,
              importLoaders: 2,
              // 0 => no loaders (default);
              // 1 => postcss-loader;
              // 2 => postcss-loader, sass-loader
            },
          },
          // 将 PostCSS 编译成 CSS
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [
                  [
                    // postcss-preset-env 包含 autoprefixer
                    'postcss-preset-env',
                  ],
                ],
              },
            },
          },
          // 将 Sass 编译成 CSS
          'sass-loader',
        ],
      },
      {
        test: /\.(js|ts|jsx|tsx)$/,
        include: paths.appSrc,
        use: [
          {
            loader: 'esbuild-loader',
            options: {
              loader: 'tsx',
              target: 'es2015',
            },
          }
        ]
      }
    ],
  },
}

