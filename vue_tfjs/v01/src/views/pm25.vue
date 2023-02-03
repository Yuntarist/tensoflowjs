<template>
  <div>공공 API 공기질 데이터</div>
  <hr />
  <button @click=";[getpm25(), kkk()]">부산지역 공기질 데이터 가져오기</button>
  <!-- @click 안에 여러가지 함수를 연결하고 싶으면 배열로 넣으면 된다. -->
  <div>{{ pm25 }}</div>
</template>

<script>
// eslint-disable-next-line
/* eslint-disable */

// pm25 pm10 co 값 3개 추출하기
export default {
  name: 'app',
  data() {
    return {
      pm25: ''
    }
  },
  methods: {
    getpm25: function () {
      const key = process.env.VUE_APP_pkey
      // VUE_APP_ 을 추가해 env안에 있는 key를 가져올 수 있다.
      const surl =
        'http://apis.data.go.kr/6260000/AirQualityInfoService/getAirQualityInfoClassifiedByStation?serviceKey=' +
        key +
        '&pageNo=1&numOfRows5&areaIndex=221162&resultType=json'
      this.pm25 = '데이터 로드 중...'
      fetch(surl)
        .then((res) => res.json())
        .then((body) => {
          const _ = body.getAirQualityInfoClassifiedByStation.body.item
          const str = `부산의 초미세먼지: ${_.pm25}, 미세먼지:${_.pm10}, 일산화탄소: ${_.co}`
          console.log(str)
          this.pm25 = str
        })
    },
    kkk: function () {
      // 에러 방지를 위해 아무 이유없는 함수 kkk를 집어넣음.
      const dtd = 'kkk'
      console.log(dtd)
    }
  }
}
</script>

<style></style>
