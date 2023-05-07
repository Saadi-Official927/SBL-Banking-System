const express = require('express')
const router = express.Router()
const Bank = require('../Models/Bank')
const Middleware = require('../Middleware/GetUserDetails')
const { check, validationResult } = require('express-validator');


// ------------------------------------------------------------------------------------------------------------------------------
// testing
router.get('/', (req, res) => {
    console.log("saad is here")
    res.send("saad is there")
})

// ------------------------------------------------------------------------------------------------------------------------------
// ROUTE 2 Creating and add Accounts
router.post('/depositcash', Middleware, async (req, res) => {

    try {
        const { cash } = req.body

        // errs and sending Bad requests
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        const bank = new Bank({
            cash, user: req.user.id
        })
        const saveBank = await bank.save()
        res.json(saveBank)
    } catch (error) {
        console.error(error.message)
        res.status(500).send("Somehing Happened")
    }

})

// ------------------------------------------------------------------------------------------------------------------------------
// Fetching Data
router.get('/fetchData', Middleware, async (req, res) => {

    try {
        const accounts = await Bank.find({ user: req.user.id })
        res.json(accounts)
    } catch (error) {
        console.error(error.message)
        res.status(500).send("Somehing Happened")
    }

})

// ------------------------------------------------------------------------------------------------------------------------------
// Updating Data & updating notes
router.put('/updatecash/:id', Middleware, async (req, res) => {

    try {
        const { cash } = req.body
        const newCash= {}
        if (cash) {
            newCash.cash = cash
        }

        // Find the USER NOTE and update it
        let bank = await Bank.findById(req.params.id)
        if (!bank) {
            return res.status(400).send("Not Found")
        }

        // Allow user to update his own note if actually belongs to him/her
        if (bank.user.toString() !== req.user.id) {
            return res.status(400).send("Not Allowed")
        }

        bank = await Bank.findByIdAndUpdate(req.params.id, { $set: newCash }, { new: true })
        res.json({ bank })
    } catch (error) {
        console.error(error.message)
        res.status(500).send("Somehing Happened")
    }

})

// ------------------------------------------------------------------------------------------------------------------------------
// Deleting Data & Deleting notes
router.delete('/deletecash/:id', Middleware, async (req, res) => {

    try {
        // Find the USER NOTE and delete it
        let bank = await Bank.findById(req.params.id)
        if (!bank) {
            return res.status(400).send("Not Found")
        }

        // Allow user to delete his own note if actually belongs to him/her
        if (bank.user.toString() !== req.user.id) {
            return res.status(400).send("Not Allowed")
        }

        bank = await Bank.findByIdAndDelete(req.params.id)
        res.json({ "Success" : "Note has been deleted", bank : bank })
    } catch (error) {
        console.error(error.message)
        res.status(500).send("Somehing Happened")
    }

})

module.exports = router