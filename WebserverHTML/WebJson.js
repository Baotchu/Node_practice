var http = require('http');
var fs = require('fs');

http.createServer(function(req, res){
	res.writeHead(200, {"Context-Type":"application/json"});
	
	var obj = {
		Surname : "Chu",
		Firstname: "Bao",
		"Year born": "1980"
	}; 
	res.end(JSON.stringify(obj));
	
	}).listen(8888);
	