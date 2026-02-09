
// var colors = require('colors');
// console.log("Hello, World!".green);
// console.log("Dishaa Chaudharyyyyyyy"); 
// const fs = require("fs");
// const fh = fs.openSync("Secfb","w");


// fs.writeFileSync(fh,"we are here to study");
// console.log(fs.readFileSync("Secfb","utf8"));
//fs.close(fh)
// const fs = require("fs");
// const fh = fs.openSync("file1","r");

// console.log(fs.readFileSync("file1","utf8"));
// const fs = require("fs");

// console.log(fs.appendFileSync("file1 "," hello my name is disha chaudhary"));

// fs.renameSync("file1","file2");
// fs.cpSync("secfb","file1");
// fs.unlinkSync("file2");
// fs.writeFileSync("dummy.txt","hello");
// fs.readFileSync("dummy.txt","utf-8");


// require("./m1");
// require("./m2");
// const crypto = require("crypto");
// const BeforeExe = Date.now();
// crypto.pbkdf2Sync("passwordgghgffhgfguyyg","salt",100000,512,"sha512");
// crypto.pbkdf2Sync("password","salt",100000,512,"sha512");
// crypto.pbkdf2Sync("password","salt",100000,512,"sha512");
// crypto.pbkdf2Sync("password","salt",100000,512,"sha512");

// crypto.pbkdf2("password","salt",100000,512,"sha512",()=>{
//     crypto.pbkdf2("password","salt",100000,512,"sha512",()=>{
//         crypto.pbkdf2("password","salt",100000,512,"sha512",()=>{
//             console.log(Date.now() - BeforeExe);
//         });
//     });
// });



// (function f1(){
//     let name = "harry";
//     console.log(name);
// })();


// (function(f1){
//     let name = "garry";
//     console.log(name);
// })();

//-------------------------------------------------------------------------------------------------------------
// const Events = require("events");

// const myEmitter = new EventEmitter();

// myEmitter.on('click',(number)=>{
//     console.log("event started with number " + number);
// }) 
// myEmitter.emit('click',101);

//------------------------------------------------------------------------------------------------------------

const events = require("events");
const EventEmitter = new events.EventEmitter();

const eventhandler = (extra_cheese, olive) => {
    console.log("Start preparing pizza 🍕");
    console.log("Extra cheese:", extra_cheese);
    console.log("Olive:", olive);
};

EventEmitter.on("order_pizza", eventhandler);

EventEmitter.emit("order_pizza", true, false);
