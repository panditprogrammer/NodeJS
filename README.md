# Create an Http Server for Node
```
const http = require("http");
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

});

// running the server 
server.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});


```

# Create a server for Node using Express Js
```
//import modules
const express = require("express");
const application = express();
const port = 4000;

// create url paths (end point)
application.get("/",(req,res)=>{
    res.send("hello World");
});


// run the Server 
application.listen(port,()=>{
    console.log(`Server running at http://localhost:${port}`);
});
```