console.log("This is computer of Mr NodeJS");
var http = require('http');
http.createServer(function(request, response) {
	response.writeHead(200);
	response.write("Hello Mr NodeJs");
	response.end();
}).listen(8000);
console.log('Listening on port 8080');