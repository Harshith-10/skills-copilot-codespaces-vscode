// Create web server
const http = require('http');
const url = require('url');
const fs = require('fs');
const port = 8080;

http.createServer(function(req, res) {
    const pathname = url.parse(req.url).pathname;

    if (pathname === '/') {
        fs.readFile('./index.html', function(err, data) {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.write(data);
            return res.end();
        });
    } else {
        res.writeHead(404, { 'Content-Type': 'text/html' });
        res.write('404 Not Found');
        return res.end();
    }
}).listen(port, function() {
    console.log(`Server running at http://localhost:${port}/`);
});