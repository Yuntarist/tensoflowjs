<template>
  <div>Camtest</div>
  <button @click="webcamLaunch()">캠켜</button>
  <!-- 버튼을 클릭하지않고 그냥 화면에 냅다 띄우는 방법은 뭘까요 -->
  <div id="display"></div>
  <!-- 이곳에 현재 캠이 켜짐, 정확하게는 div#display안 video태그가 만들어짐. -->
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
      // 웹캠 이미지를 표시하기 위한 요소를 추가
      display.appendChild(videoElement)
      videoElement.width = 500
      videoElement.height = 500
      const webcamIterator = tf.data.webcam(videoElement)
      // 이걸 사용하지는 않는데 이걸 지우면 캠이 켜지질 않음.
    }
  }
}
</script>

<style></style>
