const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    Firstname       :{ type: String, required: true },
    Lastname        :{ type: String, required: true },
    Gender          :{ type: String, required: true },
    Payroll_Group   :{ type: Number, required: true },
    Department      :{ type: String, required: true },
    Job_Title       :{ type: String, required: true },
    Image_Path      :{ type: String, required: true },
    Fingerprint_Id  :{ type: String, required: true }
});


module.exports = mongoose.model('User', userSchema);