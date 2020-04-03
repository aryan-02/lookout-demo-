const router = require('express').Router();
let Com = require('../models/com.model');

router.route('/').get((req, res) => {
    Com.find()
        .then(coms =>  res.json(coms))
        .catch(err => res.statusCode(400).json('Error: ' + err));
});

router.route('/add').post((req,res) => {
    const index = Number(req.body.index);
    const newCom = new Com({
        index
    });

    newCom.save()
           .then(() => res.json('crowd added!'))
           .catch(err => res.statusCode(400).json('Error: ' + err));
});


module.exports = router;