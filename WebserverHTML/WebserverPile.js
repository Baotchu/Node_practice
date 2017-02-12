var http = require('http');
var fs = require('fs');
http.createServer(function(req, res){
	res.writeHead(200, {"Context-Type":"Text/html"});
	fs.createReadStream(__dirname + "/index.html").pipe(res);
	
		
}).listen(7777);