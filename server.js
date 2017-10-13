var express = require('express');
var app = express();
var fs = require("fs");
//var bodyParser = require("body-parser");
//var cors = require('cors');
//var dirTree = require('directory-tree');

const REPOSITORY = './toDownload/';
const _myview = __dirname + '/public/view/';

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(express.static('public'));

app.get('/index|(app|/)',function(req,res){
  res.sendFile( _myview +'app.html');
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
			console.log('CALL URL: /toDownload/re.params.file')
			console.log('Download ' + req.params.file + " successfull");
		}
	});
});

app.get('/all', function(req, res){
	var path = REPOSITORY;
	fs.readdir(path, function(err, files){
		var data = [];
		for(var i = 0; i < files.length ; i++) {
			var stats = fs.statSync(path + files[i]);
			var fullname = files[i];
			var name = (files[i].split('.'))[0];
			var type = (files[i].split('.'))[1];
			data.push({fullname: fullname, name: name, type:type, size: stats['size']});		
		}
		console.log("CALL URL /all ");
		res.json(data);
	});
});

var server = app.listen(8181, function () {
 console.log('/root = ' + __dirname);
  var host = "127.0.0.1"
  var port = server.address().port

  console.log("Example app listening at http://%s:%s", host, port)
})
