const express = require("express");
const application = express();
const port = 4000;

// create url paths (end point)
application.get("/",(req,res)=>{
    res.send("hello World");
});

// create url paths (end point)
application.get("/test",(req,res)=>{
    res.send("hello World from test");
});


// run the Server 
application.listen(port,()=>{
    console.log(`Server running at http://localhost:${port}`);
});