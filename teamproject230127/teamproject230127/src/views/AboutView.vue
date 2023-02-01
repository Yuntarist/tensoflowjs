<template>
  <input type="file" onchange="readExcel()" />
  <br />
  아버지키를 입력해주세요 <input type="number" id="key" />
  <button onclick="bun()">분석시작</button>
  <br />
  <div style="width: 900px; height: 900px">
    <!--그래프-->
    <canvas id="myChart"></canvas>
  </div>
</template>

<script setup>
// /* 1. 아버지와 아들 */
// // 아버지와 아들 빈 배열 선언
// const father = []
// const son = []
// // excel.js 사용
// const readExcel = () => {
//   let input = this.event.target
//   let reader = new FileReader()
//   reader.onload = function () {
//     let data = reader.result
//     let wordBook = XLSX.read(data, { type: 'binary' })
//     const x = wordBook.Sheets.train
//     for (let j = 2; j < 757; j++) {
//       let line = [],
//         line2 = []
//       line.push(x['A' + j].v)
//       line2.push(x['B' + j].v)
//       father.push(line)
//       son.push(line2)
//     }
//   }
//   reader.readAsBinaryString(input.files[0])
// }
// console.log(father)
// console.log(son)
// function bun() {
//   let key = document.getElementById('key')
//   let kv = Number(key.value)
//   console.log(kv)
//   let xt = tf.tensor(father)
//   let yt = tf.tensor(son)
//   let X = tf.input({ shape: [1] })
//   let Y = tf.layers.dense({ units: 1 }).apply(X)
//   let model = tf.model({ inputs: X, outputs: Y })

//   let comileParam = {
//     optimizer: tf.train.adam(),
//     loss: tf.losses.meanSquaredError
//   }
//   model.compile(comileParam)
//   model.summary()
//   const labels = [] // x축
//   const loss = [] // y축
//   const fitParm = {
//     epochs: 200,
//     callbacks: {
//       onEpochEnd: function (epoch, logs) {
//         console.log('epoch', epoch, logs, 'RMSE=>', Math.sqrt(logs.loss))
//         /* 차트 chart.js */
//         labels.push(epoch)
//         console.log(labels)
//         loss.push(logs.loss)
//         console.log(loss)
//         let context = document.getElementById('myChart').getContext('2d')
//         let myChart = new Chart(context, {
//           type: 'line', // 차트의 형태
//           data: {
//             // 차트에 들어갈 데이터
//             labels: labels, // x축
//             datasets: [
//               {
//                 //데이터
//                 label: 'ㅇㅅㅇ', //차트 제목
//                 fill: false, // line 형태일 때, 선 안쪽을 채우는지 안채우는지
//                 data: loss, //x축 label에 대응되는 데이터 값, 즉
//                 backgroundColor: [
//                   //색상
//                   'rgba(255, 99, 132, 0.2)'
//                 ],
//                 borderColor: [
//                   //경계선 색상
//                   'rgba(255, 99, 132, 1)'
//                 ],
//                 borderWidth: 1 //경계선 굵기
//               }
//             ]
//           },
//           options: {
//             scales: {
//               yAxes: [
//                 {
//                   ticks: {
//                     beginAtZero: true
//                   }
//                 }
//               ]
//             }
//           }
//         })
//       }
//     }
//   }
//   const my = tf.tensor([kv])
//   model.fit(xt, yt, fitParm).then((_) => {
//     let result = model.predict(my)
//     result.print()
//   })
// }
</script>
<style></style>
