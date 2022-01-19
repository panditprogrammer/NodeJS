const express = require("express")
const exphbs = require("express-handlebars")

const path = require("path")
const app = express()
const port = 4000

app.engine('handlebars', exphbs.engine());
app.set('view engine', 'handlebars');

// static folder serve 
app.use(express.static(path.join(__dirname,"static")));
app.use("/",require(path.join(__dirname,"routes/blog.js")));



app.listen(port,()=>{
    console.log(`Server running at http://localhost:${port}`);
})