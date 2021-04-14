const express = require('express');

const router = express.Router();

router.get('/login', (req, res) => {
    res.status(200).send('Admin')
})

router.delete('/logout', (req, res) => {
    
})

module.exports = router;