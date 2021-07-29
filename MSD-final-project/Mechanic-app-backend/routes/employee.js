const express = require("express");
const router = express.Router();
const jwtManager = require('../jwt/jwt');


    router.post('/login', function (req, res, next) {
        const userName = req.body.userName;
        const password = req.body.password;
        req.db.collection('empolyees').findOne({'userName':userName, 'password':password}).then(doc => {
           
         if ( doc ) {
                const data = {};
                data.userName = doc.userName;
                data.comment = 'JWT is awesome'
                const token = jwtManager.generate(data);
                res.json({ data: token, status: 'success' });
            }
            else {
                res.json({ status: 'invalid_user' });
            }
        });
    });


module.exports = router;
