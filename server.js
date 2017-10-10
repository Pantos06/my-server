var express = require('express');
var app = express();
var fs = require("fs");
//var bodyParser = require("body-parser");
//var cors = require('cors');
//var dirTree = require('directory-tree');

const REPOSITORY = './toDownload/';

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/index',function(req,res){
  res.sendFile( __dirname +'/app.html');
});

app.get('/app',function(req,res){
  res.sendFile( __dirname +'/app.html');
});

app.get('/',  function(req,res){
  res.sendFile( __dirname +'/app.html');
});

app.get('/toDownload/:file', function(req,res, next){
	res.download(__dirname + '/toDownload/'+ req.params.file, function(err){
		if (err) {
			res.send(err); 
			//console.log(err);
			// Check if headers have been sent
			if(res.headersSent) {
			// You may want to log something here or do something else
			} else {
				return res.sendStatus(SOME_ERR); // 404, maybe 500 depending on err
			}
		} else {
			console.log('Download ' + req.params.file + " successfull");
			//res.sendFile( __dirname +'/app.html');
		}
	});
});

app.get('/all', function(req, res){
	console.log("CALL URL /all ");
	var data = fs.readdirSync(REPOSITORY);
	console.log(data);
	res.json(data);
});

var server = app.listen(8181, function () {
 
  var host = "127.0.0.1"
  var port = server.address().port

  console.log("Example app listening at http://%s:%s", host, port)
})