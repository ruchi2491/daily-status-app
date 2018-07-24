var mongoose = require('mongoose');
var StatusSchema = new mongoose.Schema({
    empid: String,
    date:String,
    project_name: String,
    today_status:String
  });
  module.exports = mongoose.model('Dailystatus', StatusSchema);