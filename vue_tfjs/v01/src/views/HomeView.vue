<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <USD />
    <!-- 컴포넌트 안에 있는 USD.vue를 들고옴 -->
    <br />
    <JPY />
    <!-- 컴포넌트 안에 있는 JPY.vue를 들고옴 -->
  </div>
</template>

<script>
// eslint-disable-next-line
/* eslint-disable */
// @ is an alias to /src
import USD from '@/components/USD.vue' // 이곳에서 2개의 vue 파일을 임포트하여
import JPY from '@/components/JPY.vue'

export default {
  name: 'HomeView',
  components: {
    USD, // 이곳에서 선언을 해주어야한다.
    JPY
  }
}
</script>
