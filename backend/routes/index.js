var express = require('express');
var router = express.Router();

var db = require('../queries');
var tasks = require('./tasks');
var admin = require('firebase-admin');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'OrganizaT API' });
});

router.get('/api/users',db.getAllUsers);
router.get('/api/users/:id',db.getUser);
router.get('/api/tasks/:id',db.getTask);
router.delete('/api/tasks/:id',db.deleteTask);
router.post('/api/tasks/:id',db.updateTask);
router.get('/api/tasks',db.getAllTasks);
router.post('/api/tasks',db.createTask);
router.get('/api/completedTasks',db.getCompletedTasks);
router.get('/api/projects',db.getAllProjects);
router.get('/api/usertasks/:id',db.getUserTasks);
router.get('/api/usermeetings/:id',db.getUserMeetings);


module.exports = router;
