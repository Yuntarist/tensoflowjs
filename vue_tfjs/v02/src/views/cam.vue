<template>
  <div>Cam</div>
  <button @click="webcamLaunch()">캠켜</button>
  <div id="display"></div>
</template>

<script>
// eslint-disable-next-line
/* eslint-disable */
export default {
  name: 'app',
  data() {
    return {}
  },
  methods: {
    webcamLaunch: function () {
      const display = document.getElementById('display') // 캠 화면이 켜지는 곳
      const videoElement = document.createElement('video')
      //웹캠 이미지를 표시하기 위한 요소릉 추가
      display.appendChild(videoElement)
      videoElement.width = 500
      videoElement.height = 500
      const webcamIterator = tf.data.webcam(videoElement)

      //img: 입력 웹캠 이미지를 나타내는 텐서
      // const img = webcamIterator.capture()
      // img.print()
      this.$tfjs.render.dtd(document.getElementById('display'), display)
    }
  }
}

// 나오긴 하는데 에러가 많이뜸
// GET http://localhost:8080/data-load.ts net::ERR_ABORTED 404 (Not Found)
// Refused to execute script from 'http://localhost:8080/data-load.ts' because its MIME type ('text/html') is not executable, and strict MIME type checking is enabled.
// runtime-core.esm-bundler.js?d2dd:236 Uncaught TypeError: Cannot read properties of undefined (reading 'render')at Proxy.webcamLaunch
</script>

<style></style>
