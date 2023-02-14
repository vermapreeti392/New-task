const mongoose = require('mongoose');
const {ObjecctId} = mongoose.Schema.Types;

const employeeSchema = new mongoose.Schema({
    name: {type: String, required: true},
    email: {type: String, required: true},
    city: {type: String},
    zipcode: {type: String},
})

const Employee =mongoose.model("Employee", employeeSchema);
module.exports = Employee;