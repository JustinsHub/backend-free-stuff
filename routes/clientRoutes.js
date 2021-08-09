const express = require('express')
const router = new express.Router()
const {Clients, Email} = require('../models/clientModels')
const {ErrorNotAuthorized, ErrorNotFound} = require('../errorHandle')

router.get('/allClients', async(req, res, next) =>{ // add middleware for developer only
    try {     
        const allClients = await Clients.getAllClients()
        return res.json(allClients)
    } catch (error) {
        return next(ErrorNotAuthorized)
    }
})

router.get('/:id', async(req, res, next)=> {
    try {
        const {id} = req.params
        const ourClient = await Clients.getClientId(id)
        return res.json(ourClient)
    } catch (error) {
        return next(ErrorNotFound)
    }
})

router.get('/emails', async(req, res, next)=>{    
    try {
        const allClientEmails = await Email.getAllEmailAddresses()
        return req.json(allClientEmails)
    } catch (error) {
        next(ErrorNotAuthorized)
    }
})

module.exports = router