const express = require('express')
const router = new express.Router()
const Clients = require('../models/clientModels')
const {ErrorNotAuthorized, ErrorNotFound} = require('../errorHandle')

router.get('/allClients', async(req, res, next) =>{ // add middleware for developer only
    try {     
        const allClients = await Clients.getAllClients()
        return res.json(allClients)
    } catch (error) {
        return next(ErrorNotAuthorized)
    }
})

router.get('/client/:id', async(req, res, next)=> {
    try {
        const {id} = req.params
        const ourClient = await Clients.getClientId(id)
        return res.json(ourClient)
    } catch (error) {
        return next(ErrorNotFound)
    }
})

module.exports = router