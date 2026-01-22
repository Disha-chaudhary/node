const http = require("http");

http.createServer((req,resp)=>{
    console.log(req);
    resp.write("<h1>Hello</h1>");
    resp.end("server is running");
}



).listen(5100,'localhost',(err)=>{
    if(err){
        console.log("there is an error");
    }
    else{
        console.log("this is your first server");
    }
});