const express = require('express')
const app = express()
app.listen(1234)

let db = new Map();

youtube1 = {
    name: 'youtube1',
    price: 1000,
    sub: 4500000,
    videoNum: 1000
}
youtube2 = {
    name: 'youtube2',
    price: 500,
    sub: 4500000,
    videoNum: 1000
}
youtube3 = {
    name: 'youtube3',
    price: 1500,
    sub: 4500000,
    videoNum: 1000
}

var id = 1

db.set(id++, youtube1)
db.set(id++, youtube2)
db.set(id++, youtube3)

app.get('/youtuber/:id', function (req, res) {

    let id = req.params.id
    id = parseInt(id)

    if (db.get(parseInt(req.params.id)) == undefined) {
        res.send('Not Found')
        console.log('Not Found')
    } else {
        res.send(
            db.get(parseInt(req.params.id)),
        );
        res.send(`id: ${id} 조회 완료`);
        console.log(`id: ${id} 조회 완료`);
    }
})

app.use(express.json())

app.post('/youtuber', function (req, res) {

    db.set(id++, req.body)

    res.json({
        message: `${db.get(id-1).name} 환영합니다.`
    })
})

app.get('/youtubers', function (req, res) {
    res.send(
        Array.from(db.values())
    )
    console.log(`${db.size}명의 유튜버를 조회했습니다.`)
})
