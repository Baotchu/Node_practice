var http = require("http");
http.createServer(function(req, res){
	res.writeHead(200, {"Content-Type":"text/plain"});
	res.end("Node JS very good. Study hard to find good job ");
	
}).listen(9999);

var http = require('http');
http.createServer(function(req, res){
	res.writeHead(200, {"Content-Type":"Text/plain"});
	res.end("1.jpg");
	
}).listen(8888);