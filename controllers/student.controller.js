const mongoose = require('mongoose');

const Student = mongoose.model('Student');

module.exports.register = (req, res, next) =>{
      var student = new Student(); 
      student.firstName = req.body.firstName;
      student.lastName = req.body.lastName;
      student.studentid = req.body.studentid;
      student.email = req.body.email;
      student.password = req.body.password;
      student.save((err, doc) => {
        if (!err)
            res.send(doc);
        else {

      
            if (err.code == 11000)
                  res.status(422).send(["Duplicate email address found"]);
            else
                  return next(err);
            }
      });
}