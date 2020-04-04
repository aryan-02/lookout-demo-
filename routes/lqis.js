const router = require('express').Router();
let Form = require('../models/form.model');

router.route('/').get((req, res) => {
    Form.find()
        .then(coms =>  {
              let S = coms.length;
              let sum=0;
              for(let i =0;i<S;i++){
                    sum += Number(coms[i].index); 
              }
              sum= sum/S;
            res.json({avg:sum, coms});
      
        })
        .catch(err => res.statusCode(400).json('Error: ' + err));
});

module.exports = router;