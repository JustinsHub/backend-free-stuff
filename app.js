const express = require('express')
const morgan = require('morgan')
const clientRoutes = require('./routes/clientRoutes')
require("dotenv").config()

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(morgan('dev'))

app.get('/', clientRoutes)

module.exports = app