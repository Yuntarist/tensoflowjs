<template>
  <nav>
    <router-link to="/">[일반 API]환율 </router-link> |
    <router-link to="/pm25">[공공 API] 공기질 데이터</router-link> |
    <router-link to="/corona">[공공 API] 코로나</router-link> |
    <router-link to="/papago">[기업 API] 파파고 번역기</router-link> |
    <router-link to="/crawling">[Crawling] 크롤링</router-link> |
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
