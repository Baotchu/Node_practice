/* var express = require("express");
var app = express();
var http = require("http").createServer(app);
http.listen(1080);

app.get("/", function(req, res){
	res.sendFile(__dirname + "/google.html");
	
});
 */


var express = require('express');
var app1 = express();
var http = require('http').createServer(app1);
http.listen(1900);

app1.get("/", function(req, res){
	
	res.sendFile(__dirname + "/about.html");
	
});