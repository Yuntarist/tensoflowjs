<template>
  <input type="file" @change="readExel" />
  아버지 키를 입력해주세요 <input type="number" id="key" />
  <button @click="bun">분석시작</button>
  <br />
  <div style="width: 900px; height: 450px">
    <!--그래프-->
    <canvas id="myChart"></canvas>
  </div>
  <div id="son_key"></div>
</template>

<script>
/* eslint-disable */
export default {
  name: 'app',
  data() {
    return {
      father: [],
      son: []
    }
  },
  methods: {
    async readExel(event) {
      console.log(event)
      let input = event.target
      let reader = new FileReader()
      let line = [],
        line2 = []
      reader.onload = function () {
        let data = reader.result
        let workBook = XLSX.read(data, { type: 'binary' })
        const x = workBook.Sheets.train

        for (let j = 2; j < 757; j++) {
          line.push(x['A' + j].v)
          line2.push(x['B' + j].v)
        }
      }
      this.father = line
      this.son = line2

      reader.readAsBinaryString(input.files[0])
    },

    bun() {
      console.log(this.father)
      console.log(this.son)
      let key = document.getElementById('key')
      let son_key = document.getElementById('son_key')
      let kv = Number(key.value)
      let xt = tf.tensor(this.father)
      let yt = tf.tensor(this.son)
      console.log(xt)
      let X = tf.input({ shape: [1] })
      let Y = tf.layers.dense({ units: 1 }).apply(X)
      let model = tf.model({ inputs: X, outputs: Y })
      let comileParam = {
        optimizer: tf.train.adam(),
        loss: tf.losses.meanSquaredError
      }
      const labels = []
      const loss = []
      model.compile(comileParam)
      model.summary()
      const fitParm = {
        epochs: 100,
        callbacks: {
          onEpochEnd: function (epoch, logs) {
            console.log('epoch', epoch, logs, 'RMSE=>', Math.sqrt(logs.loss))
            /* 차트 chart.js */
            labels.push(epoch)
            loss.push(logs.loss)
            let context = document.getElementById('myChart').getContext('2d')
            let myChart = new Chart(context, {
              type: 'line', // 차트의 형태
              data: {
                // 차트에 들어갈 데이터
                labels: labels, // x축
                datasets: [
                  {
                    //데이터
                    label: 'loss', //차트 제목
                    fill: false, // line 형태일 때, 선 안쪽을 채우는지 안채우는지
                    data: loss, //x축 label에 대응되는 데이터 값
                    backgroundColor: [
                      //색상
                      'rgba(255, 99, 132, 0.2)'
                    ],
                    borderColor: [
                      //경계선 색상
                      'rgba(255, 99, 132, 1)'
                    ],
                    borderWidth: 1 //경계선 굵기
                  }
                ]
              },
              options: {
                scales: {
                  yAxes: [
                    {
                      ticks: {
                        beginAtZero: true
                      }
                    }
                  ]
                }
              }
            })
          }
        }
      }
      const my = tf.tensor([kv])
      model.fit(xt, yt, fitParm).then((_) => {
        ;(async function () {
          let result = model.predict(my)
          const real_result = await result.arraySync() // 텐서를 다시 배열로 만듬
          son_key.textContent = `아들의 예상키는 ${real_result}cm입니다.`
        })()
      })
    }
  }
}
</script>

<style>
#son_key {
  background-color: red;
  color: white;
}
</style>
