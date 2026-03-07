const http = require("http");

http
  .createServer((req, resp) => {
    //What is setHeader() in Node.js?
    //setHeader() is a method of the HTTP response object (res)
    //  used to set HTTP response headers before sending the response to the client (browser).
    //Headers tell the browser what type of data the server is sending.
    resp.setHeader("Content-Type", "text/html");
    // resp.end('<h2>dishaaaaa Chaudhary</h2>');
    resp.write(`
        <html>
        <head>
        <style>
        
    body{
        background-color: lightblue;
        text-align:center;
    }

    h1{
    color:red;
    }

</style>
        <body>
        <h1>Hello my name is disha</h1>
        <p>welcome to my node js server</p>
        </body>
        </html>`);
    resp.end();
  })
  .listen(6500);
