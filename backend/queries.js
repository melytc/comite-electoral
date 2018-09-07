var promise = require('bluebird');
var admin = require('firebase-admin');


var options = {
  // Initialization Options
  promiseLib: promise
};

var pgp = require('pg-promise')(options);
var connectionString = `postgresql://gxtvbzsogdsila:c796fdc411fec21607b634b376061d913a0be5844cad8b51e64ddc76a27f94de@ec2-54-235-75-214.compute-1.amazonaws.com:5432/d9lnpp6a8bbpv9?ssl=true`;
var db = pgp(connectionString);

// add query functions


function getAllUsers(req,res,next){
  db.any('SELECT * FROM users ORDER BY fname ASC').then(function(data){
    res.status(200).json(data);
  }).catch(function (err){
    return next(err);
  });
}

function getAllTasks(req,res,next){
  db.any(`SELECT tasks.taskid, (users.fname || ' ' || users.lname) as name, tasks.startDate, tasks.endDate, tasks.title, tasks.creatorId,tasks.notes,tasks.canEditTask,tasks.canEditNotes, tasks.progress FROM tasks
  INNER JOIN users ON tasks.creatorid = users.uidfirebase
  WHERE tasks.progress <> 100`).then(function(data){
    res.status(200).json(data);
  }).catch(function (err){
    return next(err);
  });
}

function getTask(req,res,next){
  db.any(`SELECT * 
          FROM tasks
          WHERE taskid = ${req.params.id}`).then(function(data){
    res.status(200).json(data);
  }).catch(function (err){
    return next(err);
  });
}

function updateTask(req,res,next){
  console.log(`UPDATE tasks
  set enddate = '${req.body.enddate}', title = ' ${req.body.title}',notes = '${req.body.notes}',canedittask =  '${req.body.canedittask}', caneditnotes =  '${req.body.caneditnotes}', progress =  '${req.body.progress}'
  WHERE taskid =  ${req.params.taskid}`)
  db.none(`UPDATE tasks
  set enddate = '${req.body.enddate}', title = ' ${req.body.title}',notes = '${req.body.notes}',canedittask =  '${req.body.canedittask}', caneditnotes =  '${req.body.caneditnotes}', progress =  '${req.body.progress}'
  WHERE taskid =  ${req.params.id}`).then(function () {
      res.status(200).json('Task updated succesfully');
    })
    .catch(function (err) {
      return next(err);
  });
}

function deleteTask(req,res,next){
  db.any(`DELETE 
          FROM tasks
          WHERE taskid = ${req.params.id}`).then(function(data){
    res.status(200).json("Task deleted");
  }).catch(function (err){
    return next(err);
  });
}

function getCompletedTasks(req, res, next){
  db.any(`SELECT * FROM tasks WHERE progress = 100`).then(function(data){
    res.status(200).json(data);
  }).catch(function (err){
    return next(err);
  });
}

function getAllProjects(req,res,next){
  db.any('select * from projects').then(function(data){
    res.status(200).json(data);
  }).catch(function (err){
    return next(err);
  });
}

function createUser(req, res, next) {
  db.none(`insert into user(fname, lname, email, uidfirebase,photourl)
      values(${req.body.fName}, ${req.body.lName}, ${req.body.email}, ${req.body.photoUrl})`)
    .then(function () {
      res.status(200).json('User created succesfully');
    })
    .catch(function (err) {
      return next(err);
    });
}

function createTask(req, res, next) {
  db.none(`insert into tasks(startdate, enddate, title, creatorid,notes,canedittask,caneditnotes)
      values('${req.body.startdate}', '${req.body.enddate}', '${req.body.title}', '${req.body.creatorid}','${req.body.notes}','${req.body.canedittask}','${req.body.caneditnotes}')`)
    .then(function () {
      res.status(200).json('Task created succesfully');
    })
    .catch(function (err) {
      return next(err);
    });
}

function getUserTasks(req,res,next){
    db.any(`SELECT tasks.taskid, tasks.startdate, tasks.enddate, tasks.title, tasks.creatorId, tasks.notes, tasks.canedittask,tasks.caneditnotes
    FROM tasks
    INNER JOIN usertasks ON usertasks.userid='${req.params.id}'`)
  .then(function (data) {
    res.status(200).json(data);
})
.catch(function (err) {
  return next(err);
});
}

function getUserMeetings(req,res,next){
  db.any(`SELECT meetings.meetingid, meetings.startdate, meetings.enddate, meetings.title, meetings.creatorId, meetings.notes, meetings.caneditmeeting,meetings.caneditnotes
  FROM meetings
  INNER JOIN usermeetings ON usermeetings.userid='${req.params.id}'`)
.then(function (data) {
  res.status(200).json(data);
})
.catch(function (err) {
return next(err);
});
}

function getUserTasks(req, res, next){
  db.any(`SELECT tasks.id, meetings.startdate, meetings.enddate, meetings.title, meetings.creatorId, meetings.notes, meetings.caneditmeeting,meetings.caneditnotes
  FROM meetings
  INNER JOIN usermeetings ON usermeetings.userid='${req.params.id}'`)
.then(function (data) {
  res.status(200).json(data);
})
.catch(function (err) {
return next(err);
});
}

function getUser(req, res, next){
    db.any(`SELECT *
    FROM users
    WHERE uidfirebase='${req.params.id}'`)
  .then(function (data) {
    res.status(200).json(data);
  })
  .catch(function (err) {
  return next(err);
  });
}

module.exports = {
  deleteTask: deleteTask,
  getAllUsers: getAllUsers,
  updateTask, updateTask,
  createUser: createUser,
  getAllTasks: getAllTasks,
  createTask:createTask,
  getAllProjects: getAllProjects,
  getUserTasks: getUserTasks,
  getUserMeetings: getUserMeetings,
  getCompletedTasks: getCompletedTasks,
  getUser: getUser,
  getTask: getTask
  
};
