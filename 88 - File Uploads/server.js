var express = require('express');
var path = require('path');
var app = express();

//serve the static index.html from the public folder
app.use(express.static(path.join(__dirname, 'public')));

//required to allow Express to see the uploaded files
app.use(express.bodyParser());

//handle POST requests to /upload
app.post('/upload', function (req, res, next) {

  //use a map to create a new simplified array for response
  var files = req.files.file.map(function(file) {
    return {
      name: file.name,
      size: file.size
    }
  });
  console.log(files);
  //note that this doesn't actually do anything with the files,
  //in a real application you probably want to store them in
  //some form or fashion.
  res.send(200, files)
});

app.listen(3030);
console.log('Listening on port 3030');