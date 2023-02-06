<template>
  <div>ex3 예제</div>
  <button @click="tf1">히스토그램 그리기</button>
  <div id="plot1"></div>
  <div id="plot2"></div>
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
      const data = [1, 5, 5, 5, 10, -3, -3]
      this.$tfvis.render.histogram(document.getElementById('plot1'), data, {
        width: 800
      })
      this.$tfvis.render.histogram(document.getElementById('plot2'), data, {
        maxBins: 2,
        width: 400
      })
    }
  }
}
</script>

<style>
canvas {
  width: 60% !important;
  /* !important는 내가 지정한 CSS의 우선순위를 높여준다. */
  display: inline !important;
}
</style>
