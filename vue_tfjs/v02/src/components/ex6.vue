<template>
  <div>ex6 예제 with Chart.js</div>
  <button id="btnEx6" @click="chart()">Chartjs</button>
  <canvas id="myChart"></canvas>
</template>

<script setup>
// eslint-disable-next-line
/* eslint-disable */
// ex6에서는 script setup을 이용합니다.
import Chart from 'chart.js/auto'
// Chart사이트에서 /auto기능은 간단한 기능들을 가져오는 문구입니다.
function chart() {
  const ctx = document.getElementById('myChart')
  const data = {
    labels: ['월', '화', '수', '목', '금', '토', '일'],
    datasets: [
      {
        label: 'My First Dataset',
        data: [65, 59, 80, 81, 56, 55, 40],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(255, 159, 64, 0.2)',
          'rgba(255, 205, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(201, 203, 207, 0.2)'
        ],
        borderColor: [
          'rgb(255, 99, 132)',
          'rgb(255, 159, 64)',
          'rgb(255, 205, 86)',
          'rgb(75, 192, 192)',
          'rgb(54, 162, 235)',
          'rgb(153, 102, 255)',
          'rgb(201, 203, 207)'
        ],
        borderWidth: 1
      }
    ]
  }
  const options = {
    responsive: false, // 반응형 끄기
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
  const myChart = new Chart(ctx, { type: 'bar', data, options })
}
</script>
<script></script>

<style>
#myChart {
  width: 900px;
  height: 650px;
}
#btnEx6 {
  display: flex;
  justify-content: center;
  margin-left: auto;
  margin-right: auto;
}
</style>
