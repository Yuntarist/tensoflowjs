const http = require('http')
http
  .createServer((req, res) => {
    console.log(req.headers.cookie)
    res.writeHead(200, {
      'Set-Cookie': [
        'yummy_cookie=choco;Secure;HttpOnly',
        'tasty_cookie=strawberry',
        `Parmanent-cookies;Max-Age=${60 * 60}`
      ]
    })
    res.end('OK')
  })
  .listen(3000)
