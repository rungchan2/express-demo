const express = require('express')
const app = express()
app.listen(1234)

let db = new Map();

let notebook = {
    name: 'notebook',
    price: 1000,
}
let cup = {
    name: 'cup',
    price: 500,
}
let chair = {  
    name: 'chair',
    price: 1500,
}

db.set(1, notebook);
db.set(2, cup);
db.set(3, chair);

app.get('/:id', function (req, res) {

    let {id} = req.params;
    id = parseInt(id);

    product = db.get(id);
    product.id = id;

    res.send(product);

    // if (db.get(id) == undefined) {
    //     res.json({
    //         message: 'Not Found',
    //     });
    // } else {
    //     res.json({
    //         product: db.get(id),
    //     });
    // }
    
})

