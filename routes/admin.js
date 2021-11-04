var express = require('express');
var router = express.Router();
//Connect DB
var mongodb = require('mongodb');
var db = require('monk')('localhost:27017/ProjectDB');

/* GET users listing. */
router.get('/projects', function(req, res, next) {
  var projects = db.get('Projects');
  projects.find({},{},function(err,project){
    res.render('adminprojects', { projects: project });
  });
});

router.get('/projects/add', function(req, res, next) {
  res.render('addproject');
});

router.post('/projects/add', function(req, res, next) {
  console.log(req.body.name);
  console.log(req.body.description);
  console.log(req.file);
});

module.exports = router;
