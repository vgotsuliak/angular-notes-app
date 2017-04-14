var express = require('express');
var app = express();
var path = require('path');
var Db = require('mongodb').Db;
var Server = require('mongodb').Server;

app.use(express.static(path.join(__dirname, '..')));

var predefinedNotes = [
  {text: "First note"},
  {text: "Second note"},
  {text: "Third note"},
  {text: "Forth note"},
  {text: "Fifth note"},
  {text: "Sixth note"},
  {text: "Seventh note"}
];

var db = new Db('tutor',
  new Server("localhost", 27017, {safe: true},
    {auto_reconnect: true}, {}));

db.open(function () {
  console.log("mongo db is opened!");
  db.collection('notes', function(error, notes) {
    db.notes = notes;
  });
});

app.get("/notes", function(req,res) {
  db.notes.find(req.query).toArray(function(err, items) {
    console.log(items);
    res.send(items);
  });
});

app.post("/notes", function(req,res) {
  db.notes.insert(req.body);
  res.end();
});

console.log('Server is running. Port: 8080');
app.listen(8080);
