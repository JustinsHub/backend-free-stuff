const express = require('express')
const router = new express.Router()
const {Clients} = require('../models/clientModels')
const {ErrorBadRequest} = require('../errorHandle')

//** Route for potential client input **
router.get('/all', async(req, res, next) => { // add middleware for developer only
    try {     
        const allClients = await Clients.getAllClients()
        return res.json(allClients)
    } catch (error) {
        return next(error)
    }
})

router.get('/:id', async(req, res, next) => {
    try {
        const {id} = req.params
        const ourClient = await Clients.getClientId(id)
        return res.json(ourClient)
    } catch (error) {
        return next(error)
    }
})

router.post('/new', async(req, res, next) => {
    const {full_name, email} = req.body
    try {
        if(!full_name || !email){
            throw new ErrorBadRequest("Please fill in your name and email address in order to submit.")
        }
        const newClient = await Clients.createNewClient(full_name, email)
        return res.status(201).json(newClient)
    } catch (error) {
        return next(error)
    }
})


module.exports = router