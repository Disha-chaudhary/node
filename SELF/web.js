const http = require('http');
const fs = require('fs');
http.createServer((req,resp)=>{
    fs.readFile("SELF/html/web.html", "utf8", (err, data)=>{
        if(err){
            resp.write("InternalServer error");
            resp.end();
            return
        }
        resp.writeHead(200,{"content-type":'text/html'});
        resp.write(data);
        resp.end();
    });
}).listen(5100);