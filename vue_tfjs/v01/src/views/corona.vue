<template>
  <div>공공 API 코로나 데이터</div>
  <button @click="test()">console 환경변수 테스트</button>
  <hr />
  <select name="sel" id="selbox" v-model="local">
    <option value="부산">부산</option>
    <option value="창원">창원</option>
    <option value="김해">김해</option>
    <option value="울산">울산</option>
    <option value="진주">진주</option>
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
    getconona: function () {
      // 공공 api 승인되는순간 숙제로 만들기
    }
  }
}
</script>

<style></style>
