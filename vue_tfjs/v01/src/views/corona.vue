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

      // url 에 들어가는 날짜를 변경할 것
      // if 문 사용해서 변경할것

      const coronaurl =
        'https://apis.data.go.kr/1352000/ODMS_COVID_04/callCovid04Api?ServiceKey=' +
        pkey +
        '&pageNo=1&numOfRows=500&apiType=JSON&std_day=2023-02-06&'
      this.corona = '데이터 로드 중 ...'
      fetch(coronaurl)
        .then((res) => res.json())
        .then((body) => {
          const city = body
          console.log(city)

          // 이제 이걸 셀렉트박스에 if문으로 구현해서 넣을것
          // 셀렉트 태그에 있는 도시들 (서울,부산,인천,울산,광주)
          const seoul = body.items[1].incDec
          const busan = body.items[16].incDec
          const incheon = body.items[2].incDec
          const ulsan = body.items[18].incDec
          const gwangju = body.items[8].incDec

          const seoulincDec = `서울의 확진자 수: ${seoul}`
          const busanincDec = `부산의 확진자 수: ${busan}`
          const incheonincDec = `인천의 확진자 수: ${incheon}`
          const ulsanincDec = `울산의 확진자 수: ${ulsan}`
          const gwangjuincDec = `광주의 확진자 수: ${gwangju}`

          console.log(seoulincDec)
          console.log(busanincDec)
          console.log(incheonincDec)
          console.log(ulsanincDec)
          console.log(gwangjuincDec)

          const local1 = document.getElementById('selbox')
          console.log(local1)
          if (local1.value == '서울') {
            this.corona = seoulincDec
          } else if (local1.value == '부산') {
            this.corona = busanincDec
          } else if (local1.value == '인천') {
            this.corona = incheonincDec
          } else if (local1.value == '울산') {
            this.corona = ulsanincDec
          } else if (local1.value == '광주') {
            this.corona = gwangjuincDec
          } // 도시별 확진자 수 구현 성공

          // this.corona = seoulincDec
          // this.corona = busanincDec
          // this.corona = incheonincDec
          // this.corona = ulsanincDec
          // this.corona = gwangjuincDec

          // let today1 = new Date()
          // let year1 = today1.getFullYear()
          // let month1 = today1.getMonth() + 1
          // let day1 = today1.getDate()

          // const today = `${year1}-${month1}-${day1}`
          // console.log(today)

          // 목표로 할 것 = select 태그를 이용하여 지역별 / 어제,오늘별 확진자 수 조회 기능을 구현해보기
          // 현재 api 값이 230203자로만 고정되서 나오는 상황임.
        })
    }
  }
}
</script>

<style></style>
