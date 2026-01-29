const http = require('http');
const url = require('url');
const fs = require('fs');

http.createServer((req,resp)=>{

    const date = Date.now();
    console.log(date);
    
    resp.write("<h1>welcomme to our website</h1>");
    console.log("Requested URL is:",req.url);
    fs.appendFile("serverLog.txt",`Requested URL is: ${req.url} at time: ${date}\n`,(err)=>{
        if(err) console.log("ther is an error",err);
    });
        
    
    resp.end();
    
}).listen(5700,(err)=>{
    if(!err) console.log("Server is running at port http://localhost:5500/");
    else console.log("error occured3",err);
})