// My name: Quoc Nguyen
// Homework 2
// Class: SE 172 

// This is Part 2

var http = require('http');
var port = Number(process.env.PORT || 8080);
var fs = require('fs');
var buf = new Buffer(10240);

var requestListener = function(req, res){
	//check if file exists
	fs.exists('public/index.html', function(exists) {
	if(!exists) {
		res.writeHead(404, {"Content-Type": "text/html"});
		res.write("404 Not Found\n");
		res.end();
		return;
	}});

	fs.readFile('public/index.html', function (err, data) {
   if (err) {
		 res.writeHead(400, {"Content-Type": "text/html"});
		 res.write("Error\n");
		 res.end();
      return;
   }
	 res.writeHead(200, {"Content-type":"text/html"});

    res.end(data);
});

}

var server = http.createServer(requestListener);
server.listen(port,function(){
	console.log('Node app is running at port:',port);
});