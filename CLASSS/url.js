const url = require('url');

const myUrl = "https://leetcode.com/";
const parsedUrl = url.parse(myUrl, true);
console.log(parsedUrl);
console.log(parsedUrl.hostname);