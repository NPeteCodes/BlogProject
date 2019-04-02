const http = require('http');
const fs = require('fs');
const url = require('url');
const hostname = '127.0.0.1';
const port = 80;

const server = http.createServer((req, res) => {
  
  if (req.url === "/create") {
	createPage(req, res);
  }	else if (req.url === "/save") {
	saveAction(req, res);
  } else {   
	res.statusCode = 200;
	res.setHeader('Content-Type', 'text/plain');
	res.write(req.url);
	console.log(req.url);
	res.end(' Hello Rudolf\n');
  }
});

function createPage(req, res) {
	console.log("Create page requested");
	fs.readFile('create.html', function(err, data){
		res.statusCode = 200;
		res.setHeader('Content-Type', 'text/html');
		res.write(data);
		console.log("The file has been read");
		res.end();
	});
}

function saveAction(req, res) {
	console.log("Saving content"); //to do: parse url, write to console
}	
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});