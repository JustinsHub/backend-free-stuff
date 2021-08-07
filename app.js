const express = require('express')
require("dotenv").config()

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.get('/', (req, res, next) => {
    return res.json('hello')
})

module.exports = app