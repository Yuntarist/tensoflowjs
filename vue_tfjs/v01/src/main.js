import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import * as tf from '@tensorflow/tfjs'

// 이곳에 설치하는것은 전역으로 설치가 된다는 뜻임.
// 모든것의 시초, 뿌리부터 설정하는 느낌
// 로딩이 길어지지만 모든 라우터된 페이지에서 사용할 수 있다.
// * as 는 그안에 있는 모든것을 들고 올 예정이라는 뜻.

const app = createApp(App)

app.config.globalProperties.$tf = tf
// this.$tf 를 사용해 환경변수로 사용할 수 있음
app.use(store).use(router).mount('#app')
