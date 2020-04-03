const router = require('express').Router();
let Lqi = require('../models/lqi.model');

router.route('/').get((req, res) => {
    Lqi.find()
        .then(lqi =>  res.json(lqi))
        .catch(err => res.statusCode(400).json('Error: ' + err));
});

router.route('/add').post((req,res) => {
    const index = Number(req.body.index);
    const newLqi = new Lqi({
        index
    });

    newLqi.save()
           .then(() => res.json('Lqi added!'))
           .catch(err => res.statusCode(400).json('Error: ' + err));
});

module.exports = router;