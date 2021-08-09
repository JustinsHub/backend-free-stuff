const express = require('express')
const router = new express.Router()
const {Email} = require('../models/clientModels')

//** Route for singular emails ** //Why is this route not working when below potential client Routing? Needs to be RESTFUL?
router.get('/all-addresses', async(req, res, next)=>{
    try{
    const getEmails = await Email.getAllEmailAddresses()
    return res.json(getEmails)
    } catch (error) {
        next(error)
    }
})
router.get('/:id', async(req, res, next)=>{
    const {id} = req.params
    try {
        const emailById = await Email.getEmailById(id)
        return res.json(emailById)
    } catch (error) {
        return next(error)
    }
})

router.post('/input', async (req, res, next)=>{
    try {
        const {email} = req.body
        const emailInput = await Email.clientEmailInput(email)
        return res.status(201).json(emailInput)
    } catch (error) {
        return next(error)
    }
})

module.exports = router