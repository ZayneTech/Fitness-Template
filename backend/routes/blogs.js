const express = require('express');
const adminChecker = require('../middleware/adminchecker');

const router = express.Router();

/* Get all blogs posts */
router.get('/', (req, res) => {
    console.log('request revieved')
    res.send({Broly: 'Legendary'})
})

/* Get a single blog post */
router.get('/:id', (req, res) => {

})

/* Add new blog post */
router.post('/add', adminChecker, (req, res) => {

})

/* Update existing blog post */
router.put('/edit/:id', adminChecker, (req, res) => {

})

/* Delete existing blog post */
router.delete('/:id', adminChecker, (req, res) => {

})




module.exports = router;