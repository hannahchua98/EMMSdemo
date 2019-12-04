const express   = require('express');
const User      = require('../model/employee');
const router    = express.Router();


router.get('/', (req,res) => {
    return res.render('employees');
});

//employee list
router.route('/employeeList').get((req,res) => {
    User.find()                
        .then(user => {
            return res.render('employeeList', {'Employee': user})
        })
        .catch(err => res.status(400).send('Error: ' + err));
});

router.route('/submit-user').post(async (req,res) => {
    
    const Firstname         = req.body.Firstname;
    const Lastname          = req.body.Lastname;
    const Gender            = req.body.Gender;
    const Payroll_Group     = req.body.Payroll_Group;
    const Department        = req.body.Department;
    const Job_Title         = req.body.Job_Title;
    const Image_Path        = req.body.Image_Path;
    const Fingerprint_Id    = req.body.Fingerprint_Id;

    const newUser = new User({
        Firstname       : Firstname,
        Lastname        : Lastname,
        Gender          : Gender,
        Payroll_Group   : Payroll_Group,
        Department      : Department,
        Job_Title       : Job_Title,
        Image_Path      : Image_Path,
        Fingerprint_Id  : Fingerprint_Id
    });
    
    console.log(newUser);
    newUser.save()
        .then(() => {
            console.log(`User ${newUser.Firstname} Added!`)
            return res.render('employees');
        })
        .catch((err) => {
            console.error(err);
        })
    
});

module.exports = router;