const http = require('http');

const userData = [
    { name: "Alice", age: 30, city: "New York" },
    { name: "Bob", age: 25, city: "Los Angeles" }
];

http.createServer((req,resp) => {
   resp.setHeader("Content-Type",'application/JSON');
    resp.write(JSON.stringify(userData));
    resp.end();


}).listen(5005);