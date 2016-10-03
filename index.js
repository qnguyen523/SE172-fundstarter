// My name: Quoc Nguyen
// Homework 2
// Class: SE 172 

// This is Part 2

var express = require('express')
var app = express()
var fs = require('fs');
var buf = new Buffer(10240);

app.set('port', (process.env.PORT || 8080))
//app.use(express.static(__dirname + '/public'))

//__dirname returns the directory that the currently executing script is in.

app.get('/', function(request, response)
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
		    	response.send(buf.slice(0, bytes).toString())
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


})

app.listen(app.get('port'), function()
{
  console.log("Node app is running at :" + app.get('port'))
});
