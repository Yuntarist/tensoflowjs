<template>
  <div>공공 API 코로나 데이터</div>
  <button @click="test()">console 환경변수 테스트</button>
  <hr />
  <select name="sel" id="selbox" v-model="local">
    <option value="서울">서울</option>
    <option value="부산">부산</option>
    <option value="인천">인천</option>
    <option value="울산">울산</option>
    <option value="광주">광주</option>
  </select>
  <select name="sel2" id="selbox2" v-model="day">
    <option value="어제">어제</option>
    <option value="오늘">오늘</option>
  </select>
  <button @click="getcorona()">
    {{ day }} {{ local }}지역 코로나 데이터 가져오기
  </button>
  <div>{{ corona }}명</div>
</template>

<script>
// eslint-disable-next-line
/* eslint-disable */
export default {
  name: 'app',
  data() {
    return {
      local: '부산',
      day: '어제',
      corona: ''
    }
  },
  methods: {
    getcorona: function () {
      // 공공 api 승인되는순간 숙제로 만들기
      const pkey = process.env.VUE_APP_pkey
      const coronaurl =
        'https://apis.data.go.kr/1352000/ODMS_COVID_04/callCovid04Api?ServiceKey=' +
        pkey +
        '&pageNo=1&numOfRows=500&apiType=JSON&std_day=2023-02-03&'
      this.corona = '데이터 로드 중 ...'
      fetch(coronaurl)
        .then((res) => res.json())
        .then((body) => {
          const city = body
          console.log(city)
          const dtd = body.items[0].incDec
          console.log(dtd)
          const busan = `부산의 확진자 수: ${dtd}`
          console.log(busan)
          this.corona = busan
          // 현재 구현된 것 = json파일을 조작하여 지정된 날짜의 부산 코로나 확진자 수 체크 가능
          // 목표로 할 것 = select 태그를 이용하여 지역별 / 어제,오늘별 확진자 수 조회 기능을 구현해보기
          // 2023-02-03
        })
    }
  }
}
</script>

<style></style>
