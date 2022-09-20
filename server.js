const express = require('express')
const path = require('path')
const fs = require('fs')
const https = require('https')

const httpPort = 80
const httpsPort = 443
const key = fs.readFileSync('./certs/localhost.key');
const cert = fs.readFileSync('./certs/localhost.crt');

const app = express()

app.use(express.static(path.join(__dirname, 'public')))

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, 'public/index.html'))
})

app.listen(httpPort, function () {
  console.log(`Listening on port ${httpPort}!`)
})
