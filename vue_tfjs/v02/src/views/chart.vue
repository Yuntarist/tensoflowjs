<template>
  <div>
    <p>특강 part2. 딥러닝 프로젝트</p>
    <a href="https://www.tensorflow.org/js?h1=ko">tensorflowjs</a>
    <button @click="tfc">console 체크</button> |
    <button @click="e1()">예제 1</button>
    <button @click="e2()">예제 2</button>
    <button @click="e3()">예제 3</button>
    <button @click="e4()">예제 4</button>
    <button @click="e5()">예제 5</button> |
    <button @click="e6()">예제 6</button>
    <button @click="e7()">예제 7</button>
    <button @click="e8()">예제 8</button>
  </div>
  <hr />
  <component :is="choice"></component>
</template>

<script>
// eslint-disable-next-line
/* eslint-disable */
// @ is an alias to /src

import ex1 from '@/components/ex1.vue'
import ex2 from '@/components/ex2.vue'
import ex3 from '@/components/ex3.vue'
import ex4 from '@/components/ex4.vue'
import ex5 from '@/components/ex5.vue'
import ex6 from '@/components/ex6.vue'
import ex7 from '@/components/ex7.vue'
import ex8 from '@/components/ex8.vue'

export default {
  name: 'HomeView',
  data() {
    return {
      choice: ex1
    }
  },
  methods: {
    tfc: function () {
      console.log(this.$tf) // 모듈 버전 보는방법 중 하나.
      console.log(this.$tfvis)
    },
    e1: function () {
      this.choice = 'ex1'
    },
    e2: function () {
      this.choice = 'ex2'
    },
    e3: function () {
      this.choice = 'ex3'
    },
    e4: function () {
      this.choice = 'ex4'
    },
    e5: function () {
      this.choice = 'ex5'
    },
    e6: function () {
      this.choice = 'ex6'
    },
    e7: function () {
      this.choice = 'ex7'
    },
    e8: function () {
      this.choice = 'ex8'
    }
  },

  components: {
    ex1,
    ex2,
    ex3,
    ex4,
    ex5,
    ex6,
    ex7,
    ex8
  }
}
</script>
