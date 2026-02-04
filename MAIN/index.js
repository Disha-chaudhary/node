const http = require("http");
const fs = require("fs");
const url = require("url");

http.createServer((req,resp)=>{
    // resp.write("<h1>hello!!!</h1>");
    // resp.end();
    switch(req.url){
        case '/': fs.readFile('./Components/home.html',(err,page)=>{
            if(err){
                console.log(err);
            resp.end();           
         }
         else{
            resp.write("welcome to home page");
            resp.write(page);
            resp.end();
         }
        
           });
           break;
        case '/about':fs.readFile('./Components/about.html',(err,page)=>{
            if(err){
                console.log(err);
                resp.end();
            }
            else{
                resp.write("welcome to about page");
                resp.write(page);
                resp.end();
            }
        });
        break;
    }

}).listen(5300);