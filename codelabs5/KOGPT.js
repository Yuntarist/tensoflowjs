require('dotenv').config()
const request = require('request')
const REST_API_KEY = process.env.kogpt

function kogptApi(prompt, max_tokens = 128, temperature, topP, n) {
  const url = 'https://api.kakaobrain.com/v1/inference/kogpt/generation'
  const headers = {
    'Content-Type': 'application/json',
    Authorization: 'KakaoAK' + REST_API_KEY
  }
  const options = {
    url,
    methods: 'POST',
    body: {
      prompt,
      max_tokens,
      temperature,
      top_p: topP,
      n
    },
    headers,
    json: true
  }
  request.post(options, (e, res, body) => {
    const rst = body
    console.log(rst)
  })
}
const prompt = '새로운 OTT플랫폼의 이름을 추천해줘'
// prompt에 질문을 적으시오.
kogptApi(prompt, 128, 0.8, 0.7, 1)
