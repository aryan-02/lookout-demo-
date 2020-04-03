const router = require('express').Router();
let Health = require('../models/health.model');

router.route('/').get((req, res) => {
    Health.find()
        .then(health =>  res.json(health))
        .catch(err => res.statusCode(400).json('Error: ' + err));
});

router.route('/add').post((req,res) => {
    const index = Number(req.body.index);
    const newHealth = new Health({
        index
    });

    newHealth.save()
           .then(() => res.json('health added!'))
           .catch(err => res.statusCode(400).json('Error: ' + err));
});

module.exports = router;