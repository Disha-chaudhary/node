const http = require('http');
http.createServer((req,resp)=>{
    resp.write("hello this is node js server\n");
    resp.end("hello");
}).listen(5000);
