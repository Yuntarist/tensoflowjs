<template>
  <div>
    <p>1. xlsx 에서 가져온 자료를 Vuejs에서 직접 분석하기</p>
    <p>아들의 키 엑셀데이터 셋을 가져오세요.</p>
    <input
      @change="tfget"
      style="display: none"
      type="file"
      id="file"
      accept=".xls,.xlsx"
    />
    <label for="file">+</label>
    <div v-if="filename">로드됨: {{ filename }}</div>
    <button v-if="filename" @click="makeModel()">새로 모델링하기</button>
  </div>
</template>

<script>
// eslint-disable-next-line
/* eslint-disable */
import * as XLSX from 'xlsx/xlsx.mjs'
export default {
  name: 'app',
  data() {
    return {
      filename: '',
      tfF: '',
      tfS: ''
    }
  },
  methods: {
    run: function (father, son, name = '아버지와 아들의 키') {
      const tfvis = this.$tfvis
      const fatherD = father.map((v, i) => ({
        x: i,
        y: v
      }))
      const sonD = son.map((v, i) => ({
        x: i,
        y: v
      }))

      tfvis.render.scatterplot(
        { name },
        { values: [fatherD, sonD] },
        {
          xLabel: 'x',
          yLabel: '키',
          height: 250,
          width: 500,
          zoomToFit: 1
        }
      )
    },
    tfget: function () {
      const father = []
      const son = []

      const input = document.getElementById('file')
      this.filename = input.files[0].name
      const reader = new FileReader()
      reader.readAsBinaryString(input.files[0]) // 엑셀파일분석
      reader.onload = () => {
        // 다 읽고 나서
        const data = reader.result
        const workBook = XLSX.read(data, { type: 'binary' }) //  XLSX을 읽어오는 구조
        const x = workBook.Sheets.train // 시트의 이름
        for (let i = 2; i <= Number(x['!ref'].replace('A1:B', '')); i++) {
          father.push(x['A' + i].v)
          son.push(x['B' + i].v)
        }
        this.tfF = father // 텐서로 바꾸기 전에 하는게 유리
        this.tfS = son
        console.log(father, son)
        this.run(father, son)
      }
    },
    makeModel: function () {
      const tf = this.$tf
      const tfvis = this.$tfvis
      const tff = this.tfF
      const tfs = this.tfS

      const bs = []
      tff.forEach((v, i) => {
        bs.push()
      })
      tf.util.shuffle(tff)
      tf.util.shuffle(tfs)
      this.run(tff, tfs, '셔플 후 아버지와 아들의 키')
      //   tf.tensor(tff)
    }
  }
}
</script>

<style scoped>
label {
  display: inline-block;
  padding: 20px 30px;
  background-color: skyblue;
  font-size: 2.5em;
}
</style>
