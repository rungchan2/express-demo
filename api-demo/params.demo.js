const express = require('express')
const app = express()


app.get('/product/:userId', function (req, res) { 
    res.json({
        id: req.params.userId,
    });
});

app.get('/', function (req, res) { 
    res.json({
        id: 'hello',
    });
});

app.get('/watch', function (req, res) { 

    const {v, t} = req.query
    console.log(v, t)

    res.json({
        video : v,
        timeline : t
    });
});


app.listen(3000)