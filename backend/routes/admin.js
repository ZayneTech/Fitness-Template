const express = require('express');
const Admin = require('../models/admin.model');
const adminchecker = require('../middleware/adminchecker');

const router = express.Router();

router.get('/login', (req, res) => {
    const {username, password} = req.body;
    Admin.findOne({username: username, password: password}, (err, admin) => {
        if (err || !admin) return err
    })

    /* Sign Admin In using preferred method*/

    res.json('Admin')
})

router.delete('/logout', adminchecker, (req, res) => {
    /* Log Admin Out */
})

module.exports = router;