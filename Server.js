var http = require('http');
var fs = require('fs');
http.createServer(function (req, res) {
  fs.readFile('index.html', 'single.html', 'styles.html', function(err, data) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.write(data);
    res.end();
  });
}).listen(8080);