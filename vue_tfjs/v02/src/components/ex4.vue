<template>
  <div>ex4 예제</div>
  <button @click="tf1">히트맵</button>
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
      const data = {
        values: [
          [1, 0, 0],
          [0, 0.3, 0.7],
          [0, 0.7, 0.3]
          // heatmap에 전달되는 값은 중첩된 자바스크립트 배열 또는
          //2D tf.tensor를 넣을 수 있다.
        ],
        xTickLabels: ['Apple', 'Orange', 'Tangerline'],
        // option안에 있는 xTickLabels와 다른것임. // x축에 따라 놓인 개별 행의 라벨들
        yTickLabels: ['Apple', 'Orange', 'Tangerline']
      }
      const option = {
        width: 500,
        height: 300,
        xLabel: 'Actual Fruit',
        yLabel: 'Recognized Fruit',
        colorMap: 'blue' // 그외 grayscale, viridis
      }
      this.$tfvis.render.heatmap(document.getElementById('plot1'), data, option)
    }
  }
}
</script>

<style></style>
