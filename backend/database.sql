

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    uidFirebase varchar(30),
    photoUrl varchar(300),
    fName varchar,
    lName varchar,
    email varchar,
    phone varchar,
    department varchar
);

CREATE TABLE tokens (
    tokenId bigInt,
    userId varchar(30)
);

CREATE TABLE tasks (
    taskId SERIAL PRIMARY KEY,
    startDate timestamp,
    endDate timestamp,
    title varchar,
    creatorID varchar,
    notes text,
    canEditTask boolean,
    canEditNotes boolean,
    progress bigInt DEFAULT 0
);

CREATE TABLE userTasks (
    userId varchar,
    taskId bigInt
);


CREATE TABLE meetings (
    meetingId SERIAL PRIMARY KEY,
    startDate timestamp,
    endDate timestamp,
    location varchar,
    title varchar,
    creatorId varchar,
    notes text,
    canEditMeeting boolean,
    canEditNotes boolean
);

CREATE TABLE userMeetings (
    userId varchar(30),
    meetingId bigInt
);


CREATE TABLE projects (
    projectId SERIAL PRIMARY KEY,
    startDate timestamp,
    endDate timestamp,
    location varchar,
    title varchar,
    creatorId varchar,
    notes text,
    canEditProject boolean,
    canEditNotes boolean,
    description varchar(5),
    status varchar
);

CREATE TABLE userProjects (
    userId varchar(30),
    projectId bigInt
);

INSERT INTO users (uidFirebase, photoUrl, fName, lName,email,phone,department)
  VALUES ('pfxNEizRuggCcaCgCUvUqZAKjoE3', 'https://vignette.wikia.nocookie.net/disney/images/9/90/Frozono.png/revision/latest?cb=20130924192034&path-prefix=es', 'Miguel', 'Cuéllar','miguelc.95@hotmail.com' ,'8186587703','IT');

INSERT INTO tasks (startDate, endDate, title, creatorId,notes,canEditTask,canEditNotes)
  VALUES ('2018-06-07T01:23:04+00:00', '2018-06-07T01:23:04+00:00', 'Tarea 1', 'pfxNEizRuggCcaCgCUvUqZAKjoE3','Notas de la tarea','true','true');




