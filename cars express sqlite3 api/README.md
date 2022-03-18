## Install Packages
1. body-parser for json 
2. express-handlebars (template engine) for rendering html templates 

```
npm install express 
npm install body-parser
npm install express-handlebars

```

# starter Template

```
const express = require('express')
const bodyParser = require("body-parser");
const path = require("path");
const handlebars = require("express-handlebars")

// app config 
const app = express()
const port = 3000

// using bodyParser for json
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// use a folder as website 
app.use(express.static(path.join(__dirname, "public")));

// change the templating engine 
app.set('view engine', 'handlebars');
app.engine('handlebars', handlebars.engine());

// // rout and render a file 
app.get("/", (req, res) => {
    // res.send("Hello World");
    res.render("index");
});


// start the server 
app.listen(port, () => {
    console.log(`Server has started on http://localhost:${port}`)
})
```
