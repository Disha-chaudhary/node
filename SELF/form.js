const http = require('http');
const fs = require('fs');

http.createServer((req,resp)=>{

    if(req.url=='/') {

        fs.readFile('html/form.html','utf-8',(error,data)=>{

            if(error){
                resp.writeHead(500,{'content-Type':"text/plain"});
                resp.end("Internal Server Error");
                return;
            }

            resp.writeHead(200,{"content-type":"text/html"});
            resp.write(data);
            resp.end();

        });

    }

    else if(req.url=="/submit") {

        resp.writeHead(200,{"content-type":"text/html"});
        resp.end("<h1>Form Submitted Successfully</h1>");

    }

}).listen(4070);

console.log("Server running on http://localhost:3900");

// http.createServer((req, resp) => {

//     if (req.url === "/") {
//         resp.writeHead(200, { "Content-Type": "text/html" });
//         resp.write(`
//             <form action="/submit" method="post">
//             <h1>Form<h1>
//                 <input type="text" placeholder="enter name" name="name"><br><br>
//                 <input type="text" placeholder="enter email" name="email"><br><br>
//                 <button type="submit">Submit here !!</button>
//             </form>
//         `);
//         resp.end();
//     }

//     else if (req.url === "/submit") {
//         resp.writeHead(200, { "Content-Type": "text/html" });
//         resp.end("<h2>Form submitted successfully 👍</h2>");
//     }

// }).listen(3600, () => {
//     console.log("Server running at http://localhost:3200");
// });
