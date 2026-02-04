const http = require("http");
const fs = require("fs");
const url = require("url");

http.createServer((req,resp)=>{
    resp.write("<h1>hello!!!</h1>");
    resp.end();

}).listen(5600);