const express = require('express')
const app = express()

app.get('/', function (req, res) {
    res.send('Dawid Stępniak')
})

app.get('/test/:num1/:num2', function (req, res) {
    const num1 = parseInt(req.params.num1)
    const num2 = parseInt(req.params.num2)
    res.send(`${num1 + num2}`)
})

app.listen(80, () => {
    console.log("OK");
})