const { defineConfig } = require("@vue/cli-service");
const path = require("path");

module.exports = defineConfig({
  transpileDependencies: true,
  productionSourceMap: false,
  // devServer: {
  //   port: 8080 //👈 can change me
  // },
  pwa: {
    name: "Wedemy",
    themeColor: "#5943be",
    msTileColor: "#000000",
    appleMobileWebAppCapable: "yes",
    appleMobileWebAppStatusBarStyle: "black"
  },
  configureWebpack: {
    resolve: {
      symlinks: false,
      alias: {
        vue: path.resolve('./node_modules/vue')
      }
    }
  }
});
