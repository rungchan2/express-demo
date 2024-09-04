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

// 조회 //
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

// 삭제 //
app.delete('/youtuber/:id', function (req, res) {

    let id = req.params.id
    id = parseInt(id)
    let youtuber = db.get(id)

    if (db.get(id) == undefined) {
        res.send('Nothing to delete')
        console.log('Nothing to delete')
    } else {
        res.send(`id: ${youtuber.name} 삭제 완료`);
        console.log(`id: ${youtuber.name} 삭제 완료`);
        db.delete(id)
    }

})

// 등록 // 

app.use(express.json())

app.post('/youtuber', function (req, res) {
    db.set(id++, req.body)
    res.json({
        message: `${db.get(id - 1).name} 환영합니다.`
    })
})



app.get('/youtubers', function (req, res) {

    var youtubers = {}
    db.forEach((value, key) => {
        youtubers[key] = value
    })
    res.send(
        youtubers
    )
    console.log(`${db.size}명의 유튜버를 조회했습니다.`)
})


app.delete('/youtubers', function (req, res) {

    let dbNum = db.size

    if (db.size == 0) {
        res.send('삭제할 유튜버가 없습니다.')
    } else {
        db.clear()
        res.send(`${dbNum}명의 유튜버 삭제 완료`)
    }

})

app.put('/youtuber/:id', function (req, res) {

    let id = req.params.id
    id = parseInt(id)
    let youtuber = db.get(id)

    if (youtuber == undefined) {
        res.send('Not Found')
    } else {
        const newName = req.body.name

        youtuber.name = newName

        db.set(id, youtuber)
        res.send(`id: ${youtuber.name} 수정 완료`);
    }
}
)

