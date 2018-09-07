var express = require('express');
var router = express.Router();

var promise = require('bluebird');
var admin = require('firebase-admin');


var options = {
  // Initialization Options
  promiseLib: promise
};

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/delete', function(req, res, next) {
  console.log("Hola");
  db.any(`DELETE 
    FROM tasks
    WHERE taskid = ${req.params.id}`).then(function(data){
    res.status(200).json(data);
    }).catch(function (err){
    return next(err);
  });
});


module.exports = router;
