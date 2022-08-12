const express = require('express')
const bodyParser = require('body-parser')
const dbConnect = require('../db/dbConnect')
const app = express()
const cors = require('../middleware/cors')

dbConnect()

// curb cors error
app.use(cors);

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

// base url: url/api/
app.use('/api/', require('../routes/router'))

module.exports = app