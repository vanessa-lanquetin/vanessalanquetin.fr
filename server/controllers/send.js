const express = require('express')
const app = express()
const sibApikey = process.env.SIB_APIKEY;
const axios = require('axios').default
const sib = axios.create({
  baseURL: 'https://api.sendinblue.com/v3',
  headers: {
    'api-key': sibApikey
  }
})


if(!sibApikey) {
  console.error('Api key sendinblue required')
  process.exit(1)
}

app.post('/', async (req, res) => {
  const {name, msg, email} = req.body
  if(!name) return res.status(400).send('Name required')
  if(!msg) return res.status(400).send('Msg required')
  if(!email) return res.status(400).send('Email required')
  await sib.post("/smtp/email", {
    sender: {
      name: 'vanessalanquetin.fr', email
    },
    to: [{
      email: 'lanquetin.vanessa@gmail.com',
      name: 'VanessaLanquetin'
    }],
    replyTo: {
      email
    },
    templateId: 1,
    params: {
      NAME: name,
      MSG: msg,
      EMAIL: email
    },  
    subject: `Prise de contact vanessalanquetin.fr (${name})`,
    tags: ['contact', 'vanessalanquetin.fr']
  })
    .then(() => res.send('ok'))
    .catch((err) => {
      console.error(err?.response?.data || err);
      res.status(500).send("An error was occured");
    })
})
module.exports = app
