const HtmlWebpackPlugin = require('html-webpack-plugin');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');
const paths = require('./paths');

console.log(123123123, paths.appTsConfig)

module.exports = {
  // 入口
  entry: {
    index: './src/index.tsx',
  },
  // 输出
  output: {
    filename: '[name].bundle.js' || '[name].[contenthash].bundle.js',
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
      title: 'release_v0',
    }),
    // 进度条
    new ProgressBarPlugin({
      format:'  :msg [:bar] :percent (:elapsed s)'
    }),
  ],
  externals: {
    "react": "React",
    "react-dom": "ReactDOM"
  },
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
        test: /\.(tsx|ts)$/,
        use: {
          loader: 'ts-loader',
          options: {
            configFile: paths.appTsConfig
  　　　　　}
        },
        exclude: /node_modules/,
        
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

