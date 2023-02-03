<template>
  <div>실시간 환율 API</div>
  원화로 계산할 달러는 <input v-model="input" /> 달러
  <div>현 시세 : 1달러에 {{ onedollar }} 원 입니다.</div>
  <br />
  <div>입력하신 {{ input }} 달러 는 {{ result }}</div>
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
      onedollar: 0,
      // 마찬가지로 template에서 사용중이니 이곳에서 숫자타입으로 선언을 해줘야 한다.
      result: '숫자를 입력하세요.'
    }
  },
  watch: {
    // input값이 변하는걸 감시하기 위해 methods 대신에 watch로 변경하였다.
    input: function () {
      const dollar = this.input
      if (isNaN(dollar)) {
        this.result = '계산중...'
        return
      }
      const url =
        'https://quotation-api-cdn.dunamu.com/v1/forex/recent?codes=FRX.KRWUSD'
      fetch(url)
        .then((res) => res.json())
        .then((data) => {
          this.onedollar = data[0].basePrice
          const mydata = this.input * this.onedollar
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

<style></style>
