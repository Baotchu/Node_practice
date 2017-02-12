var http = require('http');
var fs = require('fs');

http.createServer(function(req, res){
	res.writeHead(200, {"Context-Type":"Text/html"});
	var data = fs.readFileSync(__dirname + "/index.html", "utf-8");
	data = data.replace("{Name}", " Good job");
	res.end(data);
}).listen(666);