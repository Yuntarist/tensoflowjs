<template>
  <div>ex5 예제</div>
  <button @click="tf1">스캐터 플롯</button>
  <div id="plot1"></div>
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
      const series1 = Array(100)
        .fill(0)
        .map((y) => Math.random() * 100 - Math.random() * 50)
        .map((y, x) => ({ x, y }))
      const series2 = Array(100)
        .fill(0)
        .map((y) => Math.random() * 100 - Math.random() * 150)
        .map((y, x) => ({ x, y }))
      const series = ['First', 'Second']
      const data = { values: [series1, series2], series }
      const surface = { name: 'Scatterplot', tab: 'Charts' }
      this.$tfvis.render.scatterplot(
        document.getElementById('plot1'),
        data,
        surface
      )
    }
  }
}
</script>

<style></style>
