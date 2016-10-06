// My name: Quoc Nguyen
// Homework 2
// Class: SE 172 

// This is Part 2
var fs = require('fs');
var http = require("http");
var buf = new Buffer(10240);
http.createServer(function (request, response)
{
	// handle send file here.
	fs.open('public/index.html', 'r+', function(err, fd)
	{
		if(err)
		{
			console.log(err);
		}
		fs.read(fd, buf, 0, buf.length, 0, function(err, bytes)
		{
			if (err)
			{
		    	console.log(err);
		    }
		    // response only read byte on the index.html file
		    if(bytes > 0)
		    {
		    	response.write(buf.slice(0, bytes).toString())
      			response.end();
      		}
      		// Close the index.html file.
	      fs.close(fd, function(err)
	      {
	         if (err)
	         {
	            console.log(err);
	         } 
	         console.log("File closed successfully.");
	      });
		});
	});
}).listen(8080);

console.log('Node app is running at port:8080');

