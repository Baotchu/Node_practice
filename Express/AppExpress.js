var express = require("express");
var app = express();
var http = require("http").createServer(app);
http.listen(3000);

app.get("/", function(req, res){
	res.send("<font color=blue> Hello Node.Js</font>");
	//res.send(google.com);

});