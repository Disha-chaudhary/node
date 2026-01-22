const http = require('http');
const fs = require('fs');
http.createServer((req,resp)=>{
    fs.readFile("SELF/html/web.html", "utf8", (err, data)=>{
        
    });
}).listen(5000);