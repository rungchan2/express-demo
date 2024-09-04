const express = require('express')
const app = express()

let book = {
	상품명: 'nodejs 를 공부하자',
	상품가격: 20000,
	소개: '이 책 좋음 왜?'
}

app.get('/', function (req, res) { 
    res.send('Hello World') 
})

app.get('/test', function (req, res) { 
    res.send('test success') 
})

app.get('/hello', function (req, res) { 
    res.json(book) 
})

app.listen(3000)