var dotenv = require('dotenv');
dotenv.config();

var jwt = require('jsonwebtoken');
var token = jwt.sign({ foo: 'bar' }, process.env.API_KEY);

console.log(token);

var decoded = jwt.verify(token, process.env.API_KEY);
console.log(decoded.foo) // bar