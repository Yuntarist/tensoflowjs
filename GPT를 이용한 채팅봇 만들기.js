const TelegramBot = require('node-telegram-bot-api')
// 텔레그램봇 불러옴
require('dotenv').config()
// env 불러옴
const { Configuration, OpenAIApi } = require('openai')
// open ai 불러옴

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
    '내가 보낸 메세지': mymessage,
    '봇의 응답': recivemessage
  }
  console.log(studydata) // 콘솔에 표시.

  bot.sendMessage(chatId, botmessage?.text) // 봇에 sendMessage로 명령을 내림.
  // sendMessage엔 (botmessage의 text를 반환함.)
})

// 현재 230208:17:44 studydata 객체에 모든 대화 내용을 넣는데 성공하였음
// 근데 이 뒤로 뭐함?
