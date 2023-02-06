<template>
  <div>ex1 예제</div>
  <button @click="tf1">바 차트 만들기</button>
  <div id="plot1"></div>
  <!-- 텐서플로우 내부에서 제공하는 바 차트를 만드려 한다. -->
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
    tf1: function () {
      const data = [
        { index: 'foo', value: 1 },
        { index: 'bar', value: 99 },
        { index: 3, value: 3 },
        { index: 5, value: 6 }
      ]
      this.$tfvis.render.barchart(document.getElementById('plot1'), data, {
        yLabel: 'My value', // 세로축 이름
        xLabel: 'ㅇㅅㅇ', // 가로축 이름
        width: 400
      })
    }
  }
}
</script>

<style></style>
