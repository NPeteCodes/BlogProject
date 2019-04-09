const http = require('http');
const fs = require('fs');
const url = require('url');
const hostname = '127.0.0.1';
const port = 80;
const title = "foo";
const content = "bar";

const server = http.createServer((req, res) => {
  
  if (req.url === "/create") {
	createPage(req, res);
  }	else if (req.url.startsWith("/save")) {
	saveAction(req, res);
  } else if (req.url === "/") {
	homePage(req, res);
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

function homePage(req, res) {
	console.log("Homepage");
	fs.readFile('index.html', function(err, data){
		res.statusCode = 200;
		res.setHeader('Content-Type', 'text/html');
		var data0 = data.toString();
		data0 = data0.replace("{{title}}", title);
		data0 = data0.replace("{{content}}", content);
		res.write(data0);
		console.log("The file has been read");
		res.end();
	});
}

function saveAction(req, res) {
	console.log("Saving content"); //to do: parse url, write to console
	const data = "sziapeti";
	var queryData = url.parse(req.url, true).query;
	console.log("querydata: " + JSON.stringify(queryData));
	fs.writeFile('posts/' + queryData.title + '.txt', queryData.content, (err) => {
		if (err) throw err;
		console.log('The file has been saved!');
	});
}


	
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});