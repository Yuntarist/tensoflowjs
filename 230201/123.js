const express = require('express')
const path = require('path')
const logger = require('morgan')
const app = express()

require('dotenv').config()
const port = 3000
const _path = path.join(__dirname, './dist')
console.log(_path)

app.use('/', express.static(_path))
app.use(logger('tiny'))

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

const Photo = require('./public/ori.js')

app.post('/about', function (req, res) {
  // front 서버에서 post 방식으로 전송받음
  console.log('왔냐')
  console.log(req.body.file)
  const main = async () => {
    const _data = {
      url: req.body.file
    }
    // console.log(req.body.file);
    const new_photo = new Photo(_data)
    const t = await new_photo.save()
  }
  main()
})

app.listen(port, () => {
  console.log(port + '에서 서버동작 완료.')
})
