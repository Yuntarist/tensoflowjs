<template>
  <h1>Vuejs에서 MongoDB로 CRUD실습하기</h1>
  <div>
    <!-- CREATE -->
    <h3>MongoDB로 <mark>C</mark>reate 하기</h3>
    제목: <input type="text" v-model="title" /> 날짜:
    <input type="date" v-model="date" /><br />
    <input type="text" v-model="content" style="width: 400px" />
    <button @click="dbc()">전송</button>
    <h4>{{ data }}</h4>
    <hr />

    <!-- READ -->
    <h3>MongoDB로 <mark>R</mark>ead 하기</h3>
    날짜:<input type="date" v-model="date2" /><br />
    <button @click="dbr()">읽어오기</button>
    <h4>{{ data2 }}</h4>
    <hr />

    <!-- UPDATE -->
    <h3>MongoDB로 <mark>U</mark>pdate 하기</h3>
    제목: <input type="text" v-model="title" /> 날짜:
    <input type="date" v-model="date3" /><br />
    <input type="text" v-model="content" style="width: 400px" />
    <button @click="dbu()">1개 수정하기</button>
    <h4>{{ data3 }}</h4>
    <hr />

    <!-- DELETE -->
    <h3>MongoDB로 <mark>D</mark>elete 하기</h3>
    날짜:<input type="date" v-model="date4" /><br />
    <button @click="dbd()">삭제하기</button>
    <h4>{{ data4 }}</h4>
    <hr />
  </div>
</template>

<script>
// eslint-disable-next-line
/* eslint-disable */
import axios from 'axios'
export default {
  name: 'app',
  data() {
    return {
      data: '',
      data2: '',
      data3: '',
      data4: '',
      title: '',
      content: '',
      title3: '',
      content3: '',
      date: new Date().toISOString().substring(0, 10),
      date2: new Date().toISOString().substring(0, 10),
      date3: new Date().toISOString().substring(0, 10),
      date4: new Date().toISOString().substring(0, 10)
    }
  },
  methods: {
    dbc: function () {
      this.data = 'DB에 저장중...'
      axios
        .post('/dbc', {
          title: this.title,
          content: this.content,
          date: this.date
        })
        .then((res) => (this.data = res.data))
    },
    dbr: function () {
      this.data2 = 'DB 데이터 로딩중...'
      axios.get('/dbr/' + this.date2).then((res) => (this.data2 = res.data))
    },
    dbu: function () {
      this.data3 = 'DB 저장중...'
      axios
        .post('/dbu/', {
          title: this.title3,
          content: this.content3,
          date: this.date3
        })
        .then((res) => (this.data3 = res.data))
    },
    dbd: function () {
      this.data4 = 'DB 데이터 삭제중...'
      axios.get('/dbd/' + this.date4).then((res) => (this.data4 = res.data))
    }
  }
}
</script>

<style></style>
