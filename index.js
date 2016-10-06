// My name: Quoc Nguyen
// Homework 2
// Class: SE 172 

// This is Part 1 a)

var http = require('http');
var port = Number(process.env.PORT || 8080);
var fs = require('fs');
var buf = new Buffer(10240);

var requestListener = function(req, res)
{
	// check if the index.html file exists
	fs.exists('public/index.html', function(exists) {
	if(!exists) {
		res.writeHead(404, {"Content-Type": "text/html"});
		res.write("404 Not Found\n");
		res.end();
		return;
	}});
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
		    	res.writeHead(200, {"Content-type":"text/html"});
 				res.end(buf.slice(0, bytes).toString());
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


	// var data = fs.readFileSync('public/index.html');
	// res.writeHead(200, {"Content-type":"text/html"});
 //    res.end(data);
};

var server = http.createServer(requestListener);
server.listen(port,function(){
	console.log('Node app is running at port:',port);
});