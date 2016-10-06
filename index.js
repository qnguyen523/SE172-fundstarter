// My name: Quoc Nguyen
// Homework 2
// Class: SE 172 

// This is Part 1 a)

var fs = require('fs');
var http = require("http");
http.createServer(function (request, response)
{
	var data = fs.readFileSync('public/index.html');
	response.write(data.toString());
	response.end();
}).listen(8080);

console.log('Node app is running at port:8080');