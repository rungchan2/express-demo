const express = require('express')
const app = express()
app.listen(1234)

app.use(express.json())
app.post('/youtube', function (req, res) {

    let youtube = req.body.message
    res.send(youtube)
})

