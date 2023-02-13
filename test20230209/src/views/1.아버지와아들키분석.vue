<template>
  <div>1.아버지와 아들 키 분석</div>
  <hr />
  <input type="file" @change="readExel" />
  <br />
  <button @click="bun">분석시작</button>
  <div id="son_key">아버지의 키가 175일때</div>
</template>

<script>
// eslint-disable-next-line
/* eslint-disable */

import * as tf from '@tensorflow/tfjs' // 텐서 플로우 모듈 불러오기
import * as tfvis from '@tensorflow/tfjs-vis'
console.log(tf)
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
      let line = [],
        line2 = []
      let reader = new FileReader()
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
      let son_key = document.getElementById('son_key')
      let kv = 175 // 구하고자 하는 키의 원래 값
      let xt = this.$tf.tensor(this.father) // 모듈이 안먹어 왜에에에에애에으앙
      let yt = this.$tf.tensor(this.son)

      let X = this.$tf.input({ shape: [1] })
      let Y = this.$tf.layers.dense({ units: 1 }).apply(X)
      let model = this.$tf.model({ inputs: X, outputs: Y })
      this.$tfvis.show.modelSummary({ name: 'Model Summary' }, model)
      let compileParam = {
        optimizer: this.$tf.train.adam(),
        loss: this.$tf.losses.meanSquaredError
      } // 최적화의 loss 측정방법종류
      model.compile(compileParam)
      model.summary()
      const fitParm = {
        epochs: 100,
        callbacks: this.$tfvis.show.fitCallbacks(
          { name: 'Training Performance' },
          ['loss', 'mse'],
          { height: 200, callbacks: ['onEpochEnd'] }
        )
      }
      const my = this.$tf.tensor([kv])
      model.fit(xt, yt, fitParm).then((_) => {
        ;(async function () {
          let result = model.predict(my)
          const real_result = await result.arraySync() // 텐서를 다시 배열로 만듬
          son_key.textContent = `아버지의 키가 175일때 아들의 예상키는 ${real_result}cm입니다.`
        })()
      })
    }
  }
}
</script>

<style></style>
