var Status = require('../../../models/dailystatus.js');

module.exports = {
  getDailystatus: function (req, res) {
    Status.find(function (err, products) {
      if (err) {
        res.send(err);
      }
      res.json(products);
    });
  },
  getDailystatusId: function (req, res) {
    console.log("Inside get");
    Status.find({empid:req.params.id}, function (err, post) {
      if (err) {
        res.send(err);
      }
      res.json(post);
    });
  },

  getDailystatusIdDate : function(req,res){
    console.log("req.params.id"+req.params.id);
    console.log("req.params.date"+req.params.date);
    Status.find({empid:req.params.id,date : {$regex : req.params.date}}, function (err, post) {
      if (err) return next(err);
      res.json(post);
    });
  },

  setDailystatus: function(req,res){
    Status.create(req.body, function (err, post) {
      if (err) return next(err);
      res.json(post);
    });   
  },

  updateDailystatus : function(req,res){
    Status.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
      if (err) return next(err);
      res.json(post);
    });
  },

  deleteDailystatus : function(req,res){
    Status.findByIdAndRemove(req.params.id, req.body, function (err, post) {
      if (err) return next(err);
      res.json(post);
    });
  }
}
