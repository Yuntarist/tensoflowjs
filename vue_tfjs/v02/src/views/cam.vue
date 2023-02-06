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
      const img = webcamIterator.capture()
      img.print()
      this.$tfjs.render.dtd(document.getElementById('display'), display)
    }
  }
}
</script>

<style></style>
