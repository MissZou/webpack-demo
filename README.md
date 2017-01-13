# webpack-demo
webpack 学习

## 我所认为的一个webpack项目应该具备的功能

- 静态资源服务器，实现热插拔功能
- 支持各种loader，基本的如对es6,scss,vue等的支持
- 文件的打包压缩，最后生成的dist文件夹中的内容可以直接使用
- 生产环境和开发环境分离，图片等资源可以通过publicPath自动修改前缀，小于一定大小的图片自动转化为base64


