
// var colors = require('colors');
// console.log("Hello, World!".green);
// console.log("Dishaa Chaudharyyyyyyy");
// const fs = require("fs");
// const fh = fs.openSync("Secfb","w");


// fs.writeFileSync(fh,"we are here to study");
// console.log(fs.readFileSync("Secfb","utf8"));
//fs.close(fh)
const fs = require("fs");
const fh = fs.openSync("file1","r");

console.log(fs.readFileSync("file1","utf8"));

