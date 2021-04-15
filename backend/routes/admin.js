const express = require('express');
const adminchecker = require('../middleware/adminchecker');

const router = express.Router();

router.get('/login', (req, res) => {
    res.status(200).send('Admin')
})

router.delete('/logout', adminchecker, (req, res) => {
    
})

module.exports = router;