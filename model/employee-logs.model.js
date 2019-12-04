const mongoose = require('mongoose');
const Employee      = require('./employee');

const Schema = mongoose.Schema;

const employeeLogSchema = mongoose.Schema({
    
    Employee_Id: { type: Schema.Types.ObjectId, ref: Employee },
    Emotion:     { type: String, required: true}
    
});

module.exports = mongoose.model('EmployeeLogs', employeeLogSchema);