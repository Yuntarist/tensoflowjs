<template>
  <div>2.실시간 환율 API</div>
  원화로 계산할 엔은 <input v-model="input" /> 엔
  <div>현 시세 : 1 엔에 {{ oneyen }} 원 입니다.</div>
  <br />
  <div>입력하신 {{ input }} 엔은 {{ result }}</div>
</template>

<script>
// eslint-disable-next-line
/* eslint-disable */
export default {
  name: 'app',
  data() {
    return {
      input: 0,
      // template에서 input v-model=input을 사용하였으니 data안의 return에서 선언을 해주어야한다.
      oneyen: 0,
      // 마찬가지로 template에서 사용중이니 이곳에서 숫자타입으로 선언을 해줘야 한다.
      result: '숫자를 입력하세요.'
    }
  },
  watch: {
    // input값이 변하는걸 감시하기 위해 methods 대신에 watch로 변경하였다.
    input: function () {
      const yen = this.input
      if (isNaN(yen)) {
        this.result = '계산중...'
        return
      }
      const url =
        'https://quotation-api-cdn.dunamu.com/v1/forex/recent?codes=FRX.KRWJPY'
      fetch(url)
        .then((res) => res.json())
        .then((data) => {
          this.oneyen = data[0].basePrice / 100
          const mydata = this.input * this.oneyen
          this.result = `${mydata.toLocaleString('ko-KR')} 원입니다.`
        })
    }
  }
  //   methods: {
  //   이곳에서는 함수를 적는다. 잘 보면 중괄호로 선언되어있기 때문에 객체이며 객체형식으로 적어줘야한다.
  //   ex: aaa: function(){}

  //   }
}
</script>

<style>
/* <style scoped> */
/* style 뒤에 scoped를 붙이면 해당 vue 파일에서만 스타일이 적용된다. */
/*현재 밑에있는 스타일은 모든 컴포넌트의 input에 적용되고있다. */
input {
  width: 80px;
  text-align: right;
  border-style: none;
  font-size: 1em;
  border-bottom: 1px solid cadetblue;
  border-bottom-color: 1px solid cadetblue;
}
input:focus {
  outline: none;
}
</style>
