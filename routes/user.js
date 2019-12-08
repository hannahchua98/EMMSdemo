const express = require('express');
const router = express.Router();
var users = require('./models/User.js');

router.route('/users').post(async (req , res) => {
    const user = new users({
        userName : req.body.userName,
        password : req.body.password,
        imagePath : req.body.imagePath
    });

    user.save().then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message : err.message
        });
    });
});

router.route('/users').get((req, res) => {
    users.find().then(Users => {
        res.send(Users);
    }).catch(err => {
        res.status(500).send({
            message : err.message
        });
    });
});

module.exports = router;