const express = require('express');
const app = express();
app.listen(3000);

const fruits = [
    { id: 11, name: 'banana' },
    { id: 22, name: 'apple' },
    { id: 33, name: 'orange' },
    { id: 44, name: 'grape' }
];

app.get('/fruits/:id', (req, res) => {

    const id = parseInt(req.params.id);

    var findFruit = fruits.find(f => f.id === id);

    if (!findFruit) {
        res.status(404).send('The fruit with the given ID was not found.');
        return;
    }

    res.send(findFruit);

    // fruits.forEach((fruit, key) => {
    //     fruit.id === id ? findFruit = fruit : null;
    // })

    // res.send(findFruit);

});