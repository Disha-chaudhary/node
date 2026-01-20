const arg = process.argv;

// console.log("-----", arg[2]);
const port = arg[2] || 3000;

HTMLOutputElement.createServer((req,resp)=>{
    resp.write(`Server is running on port ${port}\n`);
    resp.end("Hello from Command-line-input.js");
}).listen(port);
//makig server run on dynamic port using command line input