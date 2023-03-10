const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  productionSourceMap: false,
  css: {
    extract: true
  },
  configureWebpack: {
    optimization: {
      splitChunks: false
    }
  }
})
