/* 1.필요한 모듈 로딩 */
const TelegramBot = require('node-telegram-bot-api')
// 텔레그램봇 불러옴
require('dotenv').config()
// env 불러옴
const { Configuration, OpenAIApi } = require('openai')
// open ai 불러옴
const fs = require('fs')
// fs 불러옴(파일 입출력 처리)
const jsonl = require('jsonl')
// json을 jsonl파일로 변환하는 모듈 불러옴.

/* 2.텔레그램 봇과 openAI 연동 */
const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY
})
const token = process.env.botid
const openai = new OpenAIApi(configuration)
const bot = new TelegramBot(token, { polling: true })
// gpt를 사용하기 위한 기본 링크들
console.log('켜짐')
// 노드 서버가 작동했을 때 나오는 '켜짐'
// bot.on안에 response를 집어넣음.
const mymessage = [] // 빈 배열 선언
const recivemessage = []

bot.on('message', async (msg) => {
  const chatId = msg.chat.id
  bot.sendMessage(chatId, '잠시만 기다려주세요...')
  // 기본적으로 무언가를 대답하는데 걸리는 시간이 걸리므로 그냥 기다리라고 말해
  const response = await openai.createCompletion({
    model: 'text-davinci-003', // ai 모델 선택
    prompt: msg.text, // msg.text를 프롬프트 창에 집어넣음.
    temperature: 0.9,
    max_tokens: 1000
  })
  const botmessage = response.data.choices.pop() //
  console.log(botmessage) // 봇이 응답하는 메세지를 botmessage에 담음.
  console.log(botmessage.text.length) // 응답받는 text의 길이 측정.
  // response의 data 안에있는 choices를 pop()함
  // pop() 메서드는 배열에서 마지막 요소를 제거하고 그 요소를 반환합니다. - 인터넷참고.

  mymessage.push(msg.text)
  console.log(mymessage) // 내가 텔레그램 창에 친 메세지.

  recivemessage.push(botmessage.text)
  console.log(recivemessage) // 봇이 응답하는 메세지.
  const studydata = {
    prompt: mymessage,
    completion: recivemessage
  }
  console.log(studydata) // 콘솔에 표시.

  /* studydata를 JSON형식으로 변환*/
  const studydataJSON = JSON.stringify(studydata)
  console.log(studydataJSON)
  fs.writeFileSync('GPT를_이용한_채팅봇_만들기1,json', studydataJSON)
  // json파일을 만듬

  let filepath = './GPT를_이용한_채팅봇_만들기1.json' // jsonl파일로 변환할 json파일 주소.
  fs.createReadStream(filepath)
    .pipe(jsonl())
    .pipe(fs.createWriteStream(`${filepath}.jsonl`))
  // json파일을 jsonl파일로 변환

  /* 파일 업로드 */
  // const response2 = openai.createFile(
  //   fs.createReadStream('GPT를_이용한_채팅봇_만들기1.jsonl'),
  //   'fine-tune'
  // )
  // // console.log(response2.id)

  // const response3 = await openai.createFineTune({
  //   training_file: 파일아이디 알아내셈
  // })
  // console.log(response3)

  bot.sendMessage(chatId, botmessage?.text) // 봇에 sendMessage로 명령을 내림.
  // sendMessage엔 (botmessage의 text를 반환함.)
  /* 만드는중... */
  // 내생각 230209 09 44 : 내가 보낸 메세지와 봇의 응답을 한 객체에 넣어 JSON파일로 만들고
  // 그 파일을 업로드하여 openAI가 학습시킬 수 있도록 한다? 이거지 않을까?
  // json파일 형식 {"prompt": "<prompt text>", "completion": "<ideal generated text>"}
  // JSON화 된 데이터 = studydataJSON
})

// const response2 = await openai.listFiles() // 업로드한 파일 리스트 반환
// console.log(response2) // 아마 업로드한 파일들이 나올듯? // ㅇㅅㅇ

// 현재 230208:17:44 studydata 객체에 모든 대화 내용을 넣는데 성공하였음
// 그래서 이제 뭐함?
// 공식문서 찾아서 학습시켜보기
