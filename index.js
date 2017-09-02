// test test

/*var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 5000));

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});*/

var express = require("express"); 
var site = express();

site.set('port', (process.env.PORT || 5000));

//var site = express.createServer(); 
var fill = require('./spooky_fill.js');

site.use(express.static(__dirname + '/..'));

site.get("/", function(req, res) {   
	fill.search;
	//fs.createReadStream("./index.html").pipe(res); 
});

//site.get('/fill', fill.search);

site.listen(site.get('port'), function() {
  console.log('Node app is running on port', site.get('port'));
});

//site.listen(3000);

//console.log("Server listening on http://localhost:9201");

