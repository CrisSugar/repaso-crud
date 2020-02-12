const express = require('express')
const router = express.Router()
const Park = require("../models/park.model")

// Aquí los endpoints
/////ADD
router.get('/parks/new-park', (req, res, next) => {
    res.render('parks/new-park')
})

router.post('/parks/new-park', (req,res,next) => {
    const newPark = new Park({
        name: req.body.name,
        description: req.body.description,
        // active: req.body.active
    });

    newPark.save((error) => {
        if(error) {
            next(error);
        }
        else {
            res.render('parks/new-park')
        }
    });
})

module.exports = router