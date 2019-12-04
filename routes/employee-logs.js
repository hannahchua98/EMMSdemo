const express           = require('express');
const EmployeeLogs      = require('../model/employee-logs.model');
const router            = express.Router();

router.route('/').get((req,res) => {
    return res.render('employee-logs');
})

router.route('/add-logs').post( async (req,res) => {
    console.log('hello');
    const Emotion = req.body.Emotion;

    const newLog = new EmployeeLogs({
        Emotion: Emotion
    })
    console.log(newLog);
    newLog.save()
        .then(() => {
            console.log(`Log ${newLog.Employee_Id} Added!`)
            return res.render('employee-logs');
        })
        .catch((err) => {
            console.error(err);
        })
});

module.exports = router;