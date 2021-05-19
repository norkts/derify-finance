/*
 * @Author: kim
 * @Date: 2021-04-02 14:29:45
 * @LastEditors: kim
 * @LastEditTime: 2021-04-02 14:30:10
 * @FilePath: /orbits-app/vue.config.js
 */
module.exports = {
  publicPath: "",
  outputDir: "dist",
  assetsDir: "static",
  lintOnSave: false,
  chainWebpack: () => {},
  configureWebpack: {
    externals: {},
  },
  productionSourceMap: false,
  // css相关配置
  parallel: require("os").cpus().length > 1,
  devServer: {
    open: process.platform === "darwin",
    host: "0.0.0.0",
    port: 8000,
    https: false,
    hotOnly: false,
    // proxy: {
    //   "/api": {
    //     target: "", //API服务器的地址
    //     changeOrigin: true,
    //   },
    // },
  },
  // 第三方插件配置
  pluginOptions: {},
};