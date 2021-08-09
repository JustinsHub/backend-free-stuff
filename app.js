const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const clientRoutes = require('./routes/clientRoutes')
require("dotenv").config()

const app = express()

app.use(express.json())
app.use(cors())
app.use(express.urlencoded({extended:true}))
app.use(morgan('dev'))

app.get('/client', clientRoutes)

app.use((error, req, res, next)=> {
    let status = error.status || 500
    let message = error.message
    return res.status(status).json({
        error:{message, status}
    })
})

module.exports = app