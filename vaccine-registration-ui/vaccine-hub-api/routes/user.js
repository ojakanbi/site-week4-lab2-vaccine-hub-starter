const express = require('express'),
    router = express.Router();

router.post('/login', (req, res) => {
    res.status(200).send('This is the login!')
})

router.post('/register', (req, res) => {
    res.status(200).send('This is the register!')
})




module.exports = router;