var express = require('express');
var app = express();
var path = require('path');

app.get("/notes", function(req,res) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  var notes = [
    {text: "First note"},
    {text: "Second note"},
    {text: "Third note"}
  ];
  res.send(notes);
});


console.log('Server is running. Port: 8080');
app.listen(8080);
