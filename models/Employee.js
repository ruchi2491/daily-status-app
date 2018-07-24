var mongoose = require('mongoose');
var EmployeeSchema = new mongoose.Schema({
    empid: String,
    Title: String,
    name: String,
    address: String,
    mobileno: String,
    emailid: String,
    dob: String,
    gender:String,
    company:String,
    designation : String,
    doj:String,
    reporting_to:String,
    level:String,
    token:String,
    Role:String
  });
  module.exports = mongoose.model('Employee', EmployeeSchema);