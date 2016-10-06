// My name: Quoc Nguyen
// Homework 2
// Class: SE 172 

// This is Part 1 a)

var fs = require('fs');
var http = require("http");
http.createServer(function (request, response)
{
	// handle send file here.
	fs.readFile('public/index.html',function(err, data)
	{
		if (err) throw err;
		response.write(data.toString());
		response.end();
	});
}).listen(8080);

console.log('Node app is running at port:8080');