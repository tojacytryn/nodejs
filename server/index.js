const express = require('express')
const cors = require('cors')

const app = express()
app.use(cors())

app.get('/add/:num1/:num2', function (req, res) {
  const num1 = parseInt(req.params.num1)
  const num2 = parseInt(req.params.num2)

  const sum = num1 + num2

  res.send(sum.toString())
})

app.get('/palindrome/:word', function (req, res) {
  const word = req.params.word
  if (word == word.split("").reverse().join("")){
    res.send(true)
  } else {
    res.send(false)
  }
})

app.get('/uppercase/:text', function (req, res) {
  const text = req.params.text
  res.send(text.toUpperCase)
})

app.get('/length/:text', function (req, res) {
  const text = req.params.text
  res.send(text.length.toString())
})

app.get('/isEven/:number', function (req, res) {
  const number = parseInt(req.params.number)
  if (number % 2 == 0){
    res.send(true)
  } else {
    res.send(false)
}})

app.listen(3000, ()=>{
    console.log("ok");
})