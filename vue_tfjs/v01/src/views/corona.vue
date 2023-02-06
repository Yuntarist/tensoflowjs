<template>
  <div>공공 API 코로나 데이터</div>

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
      const pkey = process.env.VUE_APP_pkey

      let today1 = new Date()
      let year1 = today1.getFullYear()
      let month1 = today1.getMonth() + 1
      let day1 = today1.getDate()

      const today = `${year1}-0${month1}-0${day1}`
      console.log(today) // 오늘 날짜 계산, url에 제대로 적용될 수 있도록 양식 바꿈.

      const yesterday = `${year1}-0${month1}-0${day1 - 1}`
      console.log(yesterday) // 어제 날짜 계산

      const dateBox = document.getElementById('selbox2')
      console.log(dateBox) // selbox2에 상수설정

      let coronaurl = '' // const는 상수변수에 해당하므로 let으로 바꿔줌.

      if (dateBox.value == '어제') {
        // selbox2의 value가 어제면 조회 당시 날짜를 어제로 바꿈
        coronaurl =
          'https://apis.data.go.kr/1352000/ODMS_COVID_04/callCovid04Api?ServiceKey=' +
          pkey +
          `&pageNo=1&numOfRows=500&apiType=JSON&std_day=${yesterday}&`
      } else {
        // 아니면 오늘로 바꿈. 현재 select태그에 두개만 있으니까 else를 써도 상관없음.
        coronaurl =
          'https://apis.data.go.kr/1352000/ODMS_COVID_04/callCovid04Api?ServiceKey=' +
          pkey +
          `&pageNo=1&numOfRows=500&apiType=JSON&std_day=${today}&`
      }
      this.corona = '데이터 로드 중 ...' // 로딩중 일떄 나오는 문구

      fetch(coronaurl)
        .then((res) => res.json())
        .then((body) => {
          const city = body
          console.log(city)

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
        })
    }
  }
}
</script>

<style></style>
