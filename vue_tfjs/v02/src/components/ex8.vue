<template>
  <div>ex8 예제</div>
  <button id="btnEx8" @click="chart()">Chartjs</button>
  <canvas id="myChart" style="height: 400px"></canvas>
  <!-- 스타일이 왜 안먹는거죠? -->
</template>

<script setup>
// eslint-disable-next-line
/* eslint-disable */
import Chart from 'chart.js/auto'
import { data } from './data' // 강사님이 주신 js파일을 export import
function chart() {
  const ctx = document.getElementById('myChart')
  // const dataset = { // 데이터를 그냥 적어서 넣을 수도 있지만
  //   labels: [       // 강사님이 주신 data.js 파일을 import 시켜라.
  //     'Eating',
  //     'Drinking',
  //     'Sleeping',
  //     'Designing',
  //     'Coding',
  //     'Cycling',
  //     'Running'
  //   ],
  //   datasets: [
  //     {
  //       label: 'My First Dataset',
  //       data: [65, 59, 90, 81, 56, 55, 40],
  //       fill: true,
  //       backgroundColor: 'rgba(255, 99, 132, 0.2)',
  //       borderColor: 'rgb(255, 99, 132)',
  //       pointBackgroundColor: 'rgb(255, 99, 132)',
  //       pointBorderColor: '#fff',
  //       pointHoverBackgroundColor: '#fff',
  //       pointHoverBorderColor: 'rgb(255, 99, 132)'
  //     },
  //     {
  //       label: 'My Second Dataset',
  //       data: [38, 48, 40, 19, 96, 37, 100],
  //       fill: true,
  //       backgroundColor: 'rgba(54, 162, 235, 0.2)',
  //       borderColor: 'rgb(54, 162, 235)',
  //       pointBackgroundColor: 'rgb(54, 162, 235)',
  //       pointBorderColor: '#fff',
  //       pointHoverBackgroundColor: '#fff',
  //       pointHoverBorderColor: 'rgb(54, 162, 235)'
  //     }
  //   ]
  // }
  new Chart(ctx, {
    type: 'radar',
    data, // data : data 를 줄인것,
    //data들은 import화 되어 data:data 되서 그래프에 바로 꼽힘.
    options: {
      responsive: false,
      elements: {
        line: {
          borderWidth: 3
        }
      }
    }
  })
}
</script>

<style>
#myChart {
  width: 900px;
  height: 650px;
}
#btnEx8 {
  display: flex;
  justify-content: center;
  margin-left: auto;
  margin-right: auto;
}
</style>
