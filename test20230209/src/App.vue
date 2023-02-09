<template>
  <nav>
    <router-link to="/">아버지와 아들 키 분석</router-link> |
    <router-link to="/about1">웹캠 로드 후 이미지 분석</router-link> |
    <router-link to="/about2">이미지 업로드 후 분석</router-link>
  </nav>
  <router-view />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
