const mongoose = require('mongoose');
const Employee      = require('./employee');

const Schema = mongoose.Schema;

const employeeLogSchema = mongoose.Schema({
    
    Employee_Id: { type: String}
    
});

module.exports = mongoose.model('EmployeeLogs', employeeLogSchema);