const express = require('express')
const auth = require('../services/auth')
const authmiddleware = require('../middlewares/auth')
const app = express()
app.post('/login', (req, res) => {
  const { email, password } = req.body
  email === process.env.EMAIL && password === process.env.PASSWORD
    ? res.json(auth.generateToken())
    : res.status(401).send("Email or password are incorrect")
})

app.get('/', authmiddleware,  (req, res) => {
  res.json(req.headers.token)
})


module.exports = app