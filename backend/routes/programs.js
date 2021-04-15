const express = require('express');
const Programs = require('../models/program.model');
const adminchecker = require('../middleware/adminchecker');

const router = express.Router();


/* Get all programs */
router.get('/', (req, res) => {
    Programs.find({}, (err, program) => { 
        if (err) return err
    })
    .then(programs => { res.json(programs) })
    .catch(err => { res.status(400).json(`There was an Error: ${err}`) });
})

/* Get a single program */
router.get('/:id', (req, res) => {
    const programId = req.params.id

    Programs.findById(programId, () => { 
        if (err) return err 
    })
    .then(program => { res.json(program) })
    .catch(err => { res.status(400).json(`Theres been an Error: ${err}`) })
})

/* Add new program */
router.post('/add', adminchecker, (req, res) => {

    const newProgram = new Programs(req.body);

    newProgram.save()
    .then(() => { res.json('Program Added!') })
    .catch(err => { res.status(400).json(`Error: ${err}`) })

     // const {name, description, about, thumbnail} = req.body

    // // const newProgram = new Program({
    // //     name, 
    // //     description, 
    // //     about, 
    // //     thumbnail
    // // });
})  

/* Update existing program */

router.put('/edit/:id', adminchecker, (req, res) => {
    /* Find program being updated */
    const programId = req.params.id;

    Programs.findById( programId, (err, program) => { 
        if (err) return err
    }) 
    /* Update Program */
        .then( program => {
            program.name = req.body.name;
            program.description = req.body.description;
            program.about = req.body.about;
            program.thumbnail = req.body.thumbnail;

    /*save new Updated Program */
            program.save()
            .then(() => { res.json('Program Updates') })
            .catch((err) => { res.status(400).json(err) })

        })
        .catch(err => { res.status(400).json(err) })
})

/* Delete existing program */
router.delete('/:id', adminchecker, (req, res) => {
    const prorgamId = req.params.id;

    Programs.findByIdAndDelete( programId, (err, program) => {
        if (err) return err
    })
    .then(() => {res.json('Program Successfully Deleted') })
    .catch(err => { res.status(400).json(err) })
})


module.exports = router;