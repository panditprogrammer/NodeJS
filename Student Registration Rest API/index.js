const express = require("express");
const { json } = require("express/lib/response");
const Student = require("./src/students");
require("dotenv").config();
require("./src/database");
app = express();
const port = process.env.PORT

// using json data 
app.use(express.json());

// root path 
app.get("/", (req, res) => {
    res.send("Student Registration REST API NodeJS");
})

// create a student 
app.post("/registration", (req, res) => {
    // get the student data 
    const studentData = new Student(req.body);
    console.log(studentData);
    // save data to db 
    studentData.save().then(() => {
        res.status(201).send("Student Created");
    }).catch((e) => {
        res.status(400).send(e);
    })

})

app.listen(port, () => {
    console.log(`Server running on at http://localhost:${port}`);
})
