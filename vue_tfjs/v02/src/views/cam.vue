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
    }
  }
}
</script>

<style></style>
