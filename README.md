# webpack-demo2

在 [release_v1](https://github.com/jiaozitang/webpack-demo/tree/release_v1) 配置基础上，优化 webpack 配置。

将支持以下功能：
- 优化效率工具
  - 编译进度条
  - 编译速度分析
  - 打包体积分析
- 优化开发体验
    - 自动更新
    - 热更新
- 优化构建速度
    - 更新版本
    - 缓存
    - 减少 loader、plugins
    - resolve 配置
    - 多进程
    - 区分环境
    - 其他
- 优化打包体积
    - 代码压缩
        - JS 压缩
        - CSS 压缩
    - 代码分离
        - 抽离重复代码
        - CSS 文件分离
        - 最小化 entry chunk
    - Tree Shaking
      - JS
      - CSS
    - CDN
- 优化加载速度
    - 按需加载
    - 浏览器缓存
    - CDN


# 快速开始

1. 安装依赖

```
npm i
```

2. 本地开发

```
npm run dev
```

3. 打包

```
npm run build
```