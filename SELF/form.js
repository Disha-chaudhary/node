const http = require('http');

http.createServer((req, resp) => {

    if (req.url === "/") {
        resp.writeHead(200, { "Content-Type": "text/html" });
        resp.write(`
            <form action="/submit" method="post">
                <input type="text" placeholder="enter name" name="name"><br><br>
                <input type="text" placeholder="enter email" name="email"><br><br>
                <button type="submit">Submit!!</button>
            </form>
        `);
        resp.end();
    }

    else if (req.url === "/submit") {
        resp.writeHead(200, { "Content-Type": "text/html" });
        resp.end("<h2>Form submitted successfully 👍</h2>");
    }

}).listen(3200, () => {
    console.log("Server running at http://localhost:3200");
});
