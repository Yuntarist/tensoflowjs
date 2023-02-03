const express = require('express')
const path = require('path')
const logger = require('morgan')
const app = express()
const { createProxyMiddleware } = require('http-proxy-middleware')
const history = require('connect-history-api-fallback')
const cw = require('./public/crawling.js')

const _path = path.join(__dirname, '/dist')
console.log(_path)
app.use(history()) // 새로고침해도 안날라가는 모듈
app.use('/', express.static(_path))
app.use(logger('tiny'))

app.use(
  createProxyMiddleware('/v1', {
    target: 'https://openapi.naver.com',
    changeOrigin: true
  })
)

app.get('/hak', (req, res) => {
  console.log('준비')
  cw.ax().then((v) => {
    console.log(v)
    res.send(v)
  })
}) // 핵심 코드

app.listen(3000, () => {
  console.log(3000 + ' 서버 동작 완료.')
})
