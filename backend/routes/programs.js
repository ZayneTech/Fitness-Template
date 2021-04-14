const express = require('express');
const adminchecker = require('../middleware/adminchecker');

const router = express.Router();

/* mock data*/
const programs = {
    program1: {
        name: 'program1',
        description: 'program1 description'
    },
    program2: {
        name: 'program2',
        description: 'program2 description'
    },
    program3: {
        name: 'program3',
        description: 'program3 description'
    }
}


/* Get all programs */
router.get('/', (req, res) => {
    res.send(programs)
})

/* Get a single program */
router.get('/:id', (req, res) => {
    res.send(programs.program1)
})

/* Add new program */
router.post('/add', adminchecker, (req, res) => {

})  

/* Update existing program */
router.put('/:id', adminchecker, (req, res) => {

})

/* Delete existing program */
router.delete('/:id', adminchecker, (req, res) => {

})


module.exports = router;