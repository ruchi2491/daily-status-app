var Employee = require('../../../models/Employee');

module.exports = {
  //Employee List
  getEmployeeList: function (req, res) {
    Employee.find(function (err, products) {
      if (err) return next(err);
      res.json(products);
    });
  },

  // /* GET SINGLE Employee BY ID */
  getEmployeeDetails: function (req, res) {
   if(req.params.id.includes("@atmecs.com")){
     
    Employee.find({emailid : req.params.id}, function (err, result) {
          if (err){
            console.log(json.stringify(err))
            res.send(err);
          }
          console.log(result);
          res.json(result);
        });
   }else{
    console.log("Inside else");
    Employee.find({ empid: req.params.id }, function (err, post) {
      if (err){
        res.send(err);
      }
      res.json(post);
    });
  }
  },

  //inserting employee data
  setEmployee: function (req, res) {
    Employee.create(req.body, function (err, result) {
      if (err) {
        res.send(err);
      }
      res.json(result);
    });

  },

  //updating employee data
  setEmployeeDetails: function(req,res){
    console.log(req.params.id);
       console.log(req.body);
      Employee.findOneAndUpdate({empid:req.params.id},{$set:{token:req.body.token}},{new:true}, function (err, post) {
        if (err) return next(err);
        res.json(post);
      });
  },

  //deleting employee
  deleteEmployee : function(req,res){
    Employee.findByIdAndRemove(req.params.id, req.body, function (err, post) {
          if (err) return next(err);
          res.json(post);
        });
  }
}


// router.put('/:id',function(req,res,next){
//   var employeeid=req.params.id;
//   console.log("employee id"+employeeid);
//   console.log("body"+req.body.token);
//   Employee.findOne({empid:employeeid}, function(err,foundobject){
//     if(err){
//       console.log(err);
//       res.status(500).send();
//     }else{
//       if(!foundobject){
//         res.status(404).send();
//       }else{
//         if(req.body.token){
//           console.log("req.body.token");
//           foundobject.token=req.body.token;
//           console.log(foundobject.token);
//         }
//         foundobject.save(function(err,updatedObject){
//           if(err){
//             console.log(err);
//             res.status(500).send();
//           }else{
//             console.log("updatedObject"+updatedObject);
//             res.send(updatedObject);
//           }
//         });
//       }
//     }
//   });
// });


