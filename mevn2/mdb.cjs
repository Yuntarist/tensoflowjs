// cjs는 커먼 자바 스크립트 파일
const moongoose = require('moongoose')
const VSchema = require('./schema.cjs')
const USER = process.env.mdbid
const PWD = process.env.mdbpwd
const HOST = '127.0.0.1:27017' // localhost 접속이 불가능
const DB = 'vuedb'
const mongodbURL = `mongodb://${USER}:${PWD}@${HOST}/${DB}`
// mongoose.set('useFindAndModify',false) // 버전 6부터 자동 관리라 제외됨
mongoose.set('strictQuery', false) // 버전 6 부터 변경사항 넣기
mongoose
  .connect(mongodbURL, { useNewUrlParse: true })
  .then(() => console.log('MDB 접속완료!\n스키마 로드 완료!\n쿼리대기중...'))
  .catch((e) => console.error(e))
module.exprots = VSchema
