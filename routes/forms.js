const router = require('express').Router();
let Com = require('../models/form.model');

router.route('/').get((req, res) => {
    Com.find({category: req.body.category})
        .then(coms =>  {
              let S = coms.length;
              let sum=0;
              for(let i =0;i<S;i++){
                    sum += Number(coms[i].index); 
              }
              sum= sum/S;   
              res.json({sum});
              
        })
        .catch(err => res.statusCode(400).json('Error: ' + err));
});



router.route('/add').post((req,res) => {
    const index = Number(req.body.index);
    const category = req.body.category;
    const newCom = new Com({
        index,
        category,
    });

    newCom.save()
           .then(() => res.json(`${category} added!`))
           .catch(err => res.statusCode(400).json('Error: ' + err));
});


module.exports = router;