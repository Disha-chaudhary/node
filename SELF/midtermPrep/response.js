const http = require('http');

http.createServer((req,resp)=>{
    resp.end('<h1>disha Chaudhary</h1>')
}).listen(5000);