
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
const fs = require("fs");
const fh = fs.openSync("file1","w");
const fh = fs.openSync("secfb","w");
// console.log(fs.appendFileSync("file1 "," hello my name is disha chaudhary"));

fs.renameSync("file1","file2");
fs.cpSync("secfb","file1");
fs.unlinkSync("file2");

