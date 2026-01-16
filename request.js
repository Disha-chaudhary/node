const http = require('http');

http.createServer((req, resp) => {
    
    resp.end('Hello World');
}).listen(5005);