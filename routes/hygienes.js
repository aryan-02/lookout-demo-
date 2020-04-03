const router = require('express').Router();
let Hygiene = require('../models/hygiene.model');

router.route('/').get((req, res) => {
    Hygiene.find()
        .then(hygiene =>  res.json(hygiene))
        .catch(err => res.statusCode(400).json('Error: ' + err));
});

router.route('/add').post((req,res) => {
    const index = Number(req.body.index);
    const newHygiene = new Hygiene({
        index
    });

    newHygiene.save()
           .then(() => res.json('hygiene added!'))
           .catch(err => res.statusCode(400).json('Error: ' + err));
});

module.exports = router;