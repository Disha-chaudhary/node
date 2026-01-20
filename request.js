//jab bhi hum web ap ki baat krte to do machine include rehti hai 1. client 2.Server;
//client is jaha se request jati hai or server jaha se response aata hai
//client or server k beech me communication http protocol k through hota hai
//http protocol me client server se request krta hai or server client ko response deta hai
//http module node.js ka built in module hai jiska use krke hum client-server k beech me communication kr skte hai
//http module ko use krne k liye hume usse require krna padta hai
const http = require("http");

http.createServer((req,resp)=>{
    console.log(req.method);
    if(req.url=="/"){
        resp.end("this is homepage");
    }
    else if(req.url=="/login"){
        resp.end("this is login page");
    }
    else{
        resp.end("404 page not found");
    }
}).listen(5800);