var http = require('http');
var fs = require('fs');

http.createServer(function(req, res){
	res.writeHead(200, {"Context-Type":"Text/html"});
	var data = fs.readFileSync( __dirname + "/about.html" );
	var data1 = fs.readFileSync( __dirname + "/blog.html" );
	var data2 = fs.readFileSync( __dirname + "/contact.html" );
	var data3 = fs.readFileSync( __dirname + "/index.html" );
	var data4 = fs.readFileSync( __dirname + "/product.html" );
	var data5 = fs.readFileSync( __dirname + "/singlepost.html" );
	
	
	res.end(data);
	res.end(data1);
	res.end(data2);
	res.end(data3);
	res.end(data4);
	res.end(data5);
	
}).listen(1080);