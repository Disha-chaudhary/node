
// var colors = require('colors');
// console.log("Hello, World!".green);
// console.log("Dishaa Chaudharyyyyyyy");
const fs = require("fs");
const fh = fs.openSync("Secfb","w");
// console.log(fh);

fs.writeFileSync(fh,"we are here to study");
console.log(fs.readFileSync("Secfb","utf8"));