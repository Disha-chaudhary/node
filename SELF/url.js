const url = require('url');
 
let address = 'https://www.example.com/category/search?name=disha&age=21#section4';
 
const myURL = url.parse(address, true);
 
console.log(myURL);

console.log(myURL.protocol); // https:
console.log(myURL.hostname); // www.example.com
console.log(myURL.pathname); // /category/search
console.log(myURL.search);   
console.log(myURL.query);    
console.log(myURL.hash);     // #section4