var express = require('express');
var http = require('http');
var cors = require('cors');

var app = express();
app.use(express.bodyParser());
app.use(cors());
app.set('port', 3000);

var data = [
  {"firstName": "Jeff", "lastname": "Winger"},
  {"firstName": "Troy", "lastname": "Barnes"},
  {"firstName": "Britta", "lastname": "Perry"},
  {"firstName": "Abed", "lastname": "Nadir"}
];

app.get('/users', function(req, res) {
    res.send(data);
});
app.post('/users', function(req, res) {
    res.send(req.body);
});