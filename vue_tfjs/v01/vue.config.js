const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    proxy: {
      '/v1': {
        target: 'https://openapi.naver.com',
        changeOrigin: true
      }
      // '/v2': {
      //   target: 'https://openapi.google.com',
      //   changeOrigin: true
      // }
    }
  }
})
