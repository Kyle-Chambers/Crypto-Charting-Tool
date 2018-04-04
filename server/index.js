var express = require('express');
var bodyParser = require('body-parser');
var port = 3000;
var app = express();

app.use(express.static(__dirname + '/../client/dist'));

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});

