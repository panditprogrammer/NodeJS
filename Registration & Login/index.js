const express = require("express");
const hbs = require("hbs");
const path = require("path");
const RegisterUser = require("./src/models/registerSchemas");
const app = express();
const port = process.env.PORT || 3000
require("./src/database/connection")

const staticPath = path.join(__dirname, "./public");
const templatesViewPath = path.join(__dirname, "./templates/views");
const templatesPartialsPath = path.join(__dirname, "./templates/partials");


// use static public folder 
app.use(express.static(staticPath))
// use json 
app.use(express.json())
// get the form data from html
app.use(express.urlencoded({ extended: false }))

// change template engine 
app.set("view engine", "hbs");
// set views path 
app.set("views", templatesViewPath);
// use the handlebars template
hbs.registerPartials(templatesPartialsPath)



// root path 
app.get("/", (req, res) => {
    res.render("index")
})

app.get("/login", (req, res) => {
    res.render("login")
})

app.get("/registration", (req, res) => {
    res.render("registration")
})

// post methods - create new user 
app.post("/registration", async (req, res) => {
    try {
        const username = req.body.username;
        const email = req.body.email;
        const password = req.body.password;
        const c_password = req.body.c_password;
        if (password === c_password) {
            const newUser = {
                username: username,
                email: email,
                password: password
            }

            const registerUserNew = new RegisterUser(newUser)
            const registerResult = await registerUserNew.save();
            res.status(201).render("index");
        } else {
            res.send("Missmatch password!");
        }

    } catch (error) {
        res.status(400).send("unable to register!")
    }

})

// post method login 
app.post("/login", async (req, res) => {

    try {
        const usernameOrEmail = req.body.usernameOrEmail;
        const password = req.body.password;

        var login_user = await RegisterUser.findOne({ username: usernameOrEmail })

        if (login_user.password === password) {
            res.render("index")
        } else {
            res.send("login")
        }

    } catch (error) {
        res.status(400).send("unable to login!")
    }
})



app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
})
