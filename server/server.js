const express = require('express')
const pathfs = require('path')
const app = express()
const bodyParser = require('body-parser')
const port = process.env.PORT || 3000
require('dotenv').config({})
app.use('/robots.txt', (req, res) => {
  res.type("text/plain");
  res.send("User-agent: *\nAllow: /");
})
app.use(require('cors')())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use("/send", require("./controllers/send"));
app.use("/draws", require("./controllers/draws"));
app.use('/auth', require('./controllers/auth'))

app.use(express.static(pathfs.resolve(__dirname, 'public')))
app.get('*', function (req, res) {
  res.sendFile(pathfs.resolve(__dirname, 'public','index.html'));
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})