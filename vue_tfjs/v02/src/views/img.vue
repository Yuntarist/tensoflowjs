<template>
  <div>
    <div id="display">
      <input
        ref="image"
        type="file"
        id="input"
        @change="upIMG()"
        name="img"
        accept="image/"
        multiple="multiple"
        style="display: none"
      />
      <label id="img-box" for="input">+</label>
      <img ref="img" v-if="imglink" :src="imglink" alt="준비중" />
      <hr />
      <div id="result1">{{ result1 }}</div>
      <button @click="predict()">분석</button>
      <button @click="papago()">번역</button>
      <!-- 분석과 번역 함수를 한번에 넣었을 때 동시에 실행되므로 번역이 되질 않았음. -->
      <div id="result">{{ result }}</div>
      <div v-if="trans" id="trans">{{ trans }}</div>
    </div>
  </div>
</template>

<script>
// eslint-disable-next-line
/* eslint-disable */
import axios from 'axios'
import * as tf from '@tensorflow/tfjs'
import * as mobilenet from '@tensorflow-models/mobilenet'
export default {
  name: 'app',
  data() {
    return {
      imglink: '',
      result: '',
      result1: '파일을 업로드하여 이미지 분석을 시작하시오',
      inData: '', // 찾아라
      trans: ''
    }
  },
  methods: {
    upIMG: function () {
      const image = this.$refs.image.files[0] // 해당 이미지 선택
      const reader = new FileReader() // 생성자 인스턴스
      reader.readAsDataURL(image)
      reader.onload = (e) => {
        console.log(e.target.result)
        this.result1 = e.target.result
        this.imglink = e.target.result
      }
    },
    predict: async function () {
      const img = this.$refs.img
      this.result = '이미지 분석중'
      mobilenet
        .load()
        .then((model) => model.classify(img))
        .then((rst) => {
          this.result =
            '분석 결과 ' +
            rst[0].className +
            '(' +
            (rst[0].probability * 100).toFixed(2) +
            '%' +
            ')'
          /* 텐서로 전환 */
          const tfimg = tf.browser.fromPixels(img)
          tfimg.print()
          tf.dispose(tfimg)
        })
    },
    papago: function () {
      const cid = process.env.VUE_APP_nid
      const csecret = process.env.VUE_APP_npw
      const query = this.result
      const url = '/v1/papago/n2mt'
      const frm = new FormData()
      frm.append('source', 'en') // 네이버가 정해놓은것
      frm.append('target', 'ko') // v01의 papago.js는 한글을 영어로 변환하는 거였으므로 그 두개를 바꿔줌.
      frm.append('text', query)

      axios
        .post(url, frm, {
          // axios api 로그인
          headers: {
            // headers: axios 안에 정해진 설정
            'Content-Type': 'application/json',
            'X-Naver-Client-Id': cid,
            'X-Naver-Client-Secret': csecret
          }
        })
        .then((res) => {
          const rst = res.data.message.result.translatedText // 어지간하면 바꿀일 없을 듯?
          console.log(rst)
          this.trans = rst
        })
    }
  }
}
</script>

<style>
#img-box {
  display: inline-block;
  width: 100px;
  height: 100%;
  border: 1px solid rgb(131, 136, 225);
  border-radius: 5px;
  background-color: lightblue;
  color: #fff;
  font-size: 3em;
  text-align: center;
  padding: auto;
  margin: 10px;
  line-height: 100px;
}
img {
  border: 1px solid lightgoldenrodyellow;
  display: inline-block;
  width: 100px;
  height: 100%;
  border-radius: 5px;
}
#result1 {
  width: 95%;
  text-align: center;
  height: 80px;
  overflow: auto;
  word-break: break-all;
  margin: 10px;
}
</style>
