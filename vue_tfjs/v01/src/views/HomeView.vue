<template>
  <div class="home">
    <button @click="select = 'USD'">달러</button>
    <button @click="select = 'JPY'">엔화</button>
    <button @click="select = 'EUR'">유로화</button>
    <keep-alive>
      <component :is="select"></component>
    </keep-alive>
    <!-- :is 는 핵심이다.-->
    <!-- <USD /> -->
    <!-- 컴포넌트 안에 있는 USD.vue를 들고옴 -->
    <!-- <br /> -->
    <!-- <JPY /> -->
    <!-- 컴포넌트 안에 있는 JPY.vue를 들고옴 -->
  </div>
</template>

<script>
// eslint-disable-next-line
/* eslint-disable */
// @ is an alias to /src
import USD from '@/components/USD.vue' // 이곳에서 2개의 vue 파일을 임포트하여
import JPY from '@/components/JPY.vue'
import EUR from '@/components/EUR.vue'

export default {
  name: 'HomeView',
  data() {
    return {
      select: 'USD'
    }
  },
  components: {
    USD, // 이곳에서 선언을 해주어야한다.
    JPY,
    EUR
  }
}
</script>
