const http = require("http");
const fs = require("fs");
// get a port 
const port = process.env.PORT || 4000;

const server = http.createServer((request, respond) => {

    console.log(request.url);
    respond.statusCode = 200;
    respond.setHeader("Content-Type", "text/html");

    if (request.url === "/") {
        respond.statusCode = 200;
        let data = fs.readFileSync("./index.html")
        respond.end(data.toString());
    }
    else if (request.url === "/me") {
        respond.statusCode = 200;
        respond.end("this is me page.");
    }
    else{
        respond.statusCode = 404;
        respond.end("page not Found!");
    }

});

// running the server 
server.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});