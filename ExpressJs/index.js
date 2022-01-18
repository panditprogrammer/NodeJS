const express = require("express")
const path = require("path")
const app = express()
const port = 4000


// use a folder as website 
app.use(express.static(path.join(__dirname,"public")))


// root of website 
app.get("/",(req,res)=>{
    res.send("Hello World")
})

// /main of website 
app.get("/main",(req,res)=>{
    res.sendFile(path.join(__dirname,"main.html"))
})

// start the express server 
app.listen(port,()=>{
    console.log(`Server running at http://localhost:${port}`);
})