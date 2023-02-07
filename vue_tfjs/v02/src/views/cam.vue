<template>
  <div>
    <div id="display"></div>
    <button @click="main()">스샷 분석</button>
    <button @click="papago()">번역해</button>
    <button @click="alog()">디버거</button>
    <div>{{ result }}</div>
    <div id="dtd">{{ trans }}</div>
  </div>
</template>

<script>
// eslint-disable-next-line
/* eslint-disable */
import axios from 'axios' // 엑시오스 사용
import * as tf from '@tensorflow/tfjs' // 텐서 플로우 모듈 불러오기
import * as mobilenet from '@tensorflow-models/mobilenet' // 모바일 넷 모듈 불러오기
const VideoElement = document.createElement('video') // 캠 태그 생성됨.
export default {
  name: 'app',
  data() {
    return {
      result: '스샷을 찍어 이미지를 분석을 시작하시오.',
      trans: ''
    }
  },
  methods: {
    alog: function () {
      console.log(tf)
    },
    main: async function () {
      // async 추가
      this.result = '이미지 분석중...'
      this.trans = '번역중...'
      const display = document.getElementById('display')
      display.appendChild(VideoElement) // 캠 태그 부착
      VideoElement.width = 400 // 캠 사이즈 조정
      VideoElement.height = 400
      const cam = await tf.data.webcam(VideoElement) // 캠 불러오기
      const net = await mobilenet.load() // 모바일 넷 로드 위아래 바꾸면 동작안함
      const img = await cam.capture() // 스크린샷 찍는 함수
      const cresult = await net.classify(img)
      img.print()
      tf.dispose(img)

      this.result =
        '분석결과:' +
        cresult[0].className + // 이름이 나오고
        '(' +
        (cresult[0].probability * 100).toFixed(2) + // 수치가 나옴.
        '%)'
    },
    papago: function () {
      const cid = process.env.VUE_APP_nid
      const csecret = process.env.VUE_APP_npw
      const query = this.result
      const url = '/v1/papago/n2mt'
      this.trans = '번역중...'
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
          const rst = res.data.message.result.translatedText
          console.log(rst)
          this.trans = rst
        })
    }
  }
}
</script>

<style></style>
