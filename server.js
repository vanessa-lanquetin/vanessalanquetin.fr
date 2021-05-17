const express = require('express')
const pathfs = require('path')
const app = express()
const port = 3000

app.use(express.static(pathfs.resolve(__dirname, 'dist')))

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})