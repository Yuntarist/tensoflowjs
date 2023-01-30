<template>
  <input type="file" onchange="readExcel()" />
  <br />
  아버지키를 입력해주세요 <input type="number" id="key" />
  <button onclick="bun()">분석시작</button>
  <br />
  <div style="width: 900px; height: 900px">
    <!--그래프-->
    <canvas id="myChart"></canvas>
  </div>
</template>

<script setup>
console.log('hello world')
</script>
<style></style>
