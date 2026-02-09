const http = require('http');

http.createServer((req, resp) => {

    resp.setHeader('Content-Type', 'text/html');

    resp.write("<h1>hello this is node js server</h1>");

    resp.end();
}).listen(5004, () => {
    console.log("server running at http://localhost:5004");
}); 