// My name: Quoc Nguyen
// Homework 2
// Class: SE 172 

// This is Part 1 b)
var express = require('express')
var app = express()
var fs = require('fs');

app.set('port', (process.env.PORT || 8080))
//app.use(express.static(__dirname + '/public'))

//__dirname returns the directory that the currently executing script is in.

app.get('/', function(request, response)
{
	// handle send file here.
	fs.readFile('public/index.html',function(err, data)
	{
		if (err) throw err;
		response.send(data.toString());
	});
    // response.sendFile('public/index.html',{root:__dirname})

 // sends an entire HTTP response to the client,                                                                                                                                     
 // including headers and content,                                                                                                                                                     
 // which is why you can only call once


})

app.listen(app.get('port'), function()
{
  console.log("Node app is running at :" + app.get('port'))
});