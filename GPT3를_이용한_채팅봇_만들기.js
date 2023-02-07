require('dotenv').config() // env와 값이 따라오는 필수 코드 // package.json에
const TelegramBot = require('node-telegram-bot-api')

// 이제 여기에 gpt봇을 설정하고 넣어라
// 무슨수를 써서라도
// https://platform.openai.com/docs/api-reference/introduction
// open ai 에서 제공하는 gpt api

const { Configuration, OpenAIApi } = require('openai')
// openai 불러옴, 설치도 완료함.
const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY
}) // env파일에 있는 api키를 들고옴
const openai = new OpenAIApi(configuration)
const response = openai.createCompletion({
  model: 'text-davinci-003',
  prompt: 'Say this is a test',
  max_tokens: 100,
  temperature: 0
})
// model: ai 봇 모델이 text-davinci-003 이라는 뜻
// max_tokens: 4000 은 완료시 생성할 최대 토큰 수 // 토큰이 뭐냐고 글자말하는건가?
// 기본값 7에서 text-davinci-003의 Max request인 4000으로 변경함. -> 다시 100으로 너프
// temperature: 는 샘플링 온도를 의미함 값이 높을수록 모델이 더 많은 위험을 감수하게 됨.
// 사이트에 변경하지 않는것이 좋습니다로 적혀있음.

// replace the value below with the Telegram token you receive from @BotFather
const token = process.env.botid
console.log(token)
// env파일 안에 있는 API값 가져옴

const bot = new TelegramBot(token, { polling: true })

// // 메세지 쓸때마다 나오는 채팅
// bot.on('message', (message) => {
//   const chatId = message.chat.id
//   bot.sendMessage(chatId, 'ㅇㅅㅇ')
//   console.log(msg)
// })

// 테스트중
bot.onText(/안녕하세요/, (msg, match) => {
  const chatId = msg.chat.id
  bot.sendMessage(chatId, '반갑습니다.')
})
bot.onText(/배고파요/, (msg, match) => {
  const chatId = msg.chat.id
  bot.sendMessage(chatId, '밥드세요')
})
bot.onText(/잠와요/, (msg, match) => {
  const chatId = msg.chat.id
  bot.sendMessage(chatId, '자세요')
})
bot.onText(/ㅌㅌㅌㅌ/, (msg, match) => {
  const chatId = msg.chat.id
  bot.sendMessage(chatId, 'ㅌㅌㅌ')
})
