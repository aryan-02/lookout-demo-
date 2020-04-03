const router = require('express').Router();
let Crowd = require('../models/crowd.model');

router.route('/').get((req, res) => {
    Crowd.find()
        .then(health =>  res.json(health))
        .catch(err => res.statusCode(400).json('Error: ' + err));
});

router.route('/add').post((req,res) => {
    const index = Number(req.body.index);
    const newCrowd = new Crowd({
        index
    });

    newCrowd.save()
           .then(() => res.json('crowd added!'))
           .catch(err => res.statusCode(400).json('Error: ' + err));
});

module.exports = router;