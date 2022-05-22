const express = require("express");
const { json } = require("express/lib/response");
const Student = require("./src/students");
require("dotenv").config();
require("./src/database");
app = express();
const port = process.env.PORT || 8000

// using json data 
app.use(express.json());

// root path 
app.get("/", (req, res) => {
    res.send("Student Registration REST API NodeJS");
})

// create a student using promises
// app.post("/registration", (req, res) => {
//     // get the student data 
//     const studentData = new Student(req.body);
//     console.log(studentData);
//     // save data to db 
//     studentData.save().then(() => {
//         res.status(201).send("Student Created");
//     }).catch((e) => {
//         res.status(400).send(e);
//     })

// })


// create a student using async await
app.post("/registration", async (req, res) => {
    try {
        // get the student data 
        const studentData = new Student(req.body);
        // save data to db 
        const result = await studentData.save();
        res.status(201).send(result);
    } catch (e) {
        res.status(400).send(e);
    }
})



// read the data from database
app.get("/registration", async (req, res) => {
    try {
        // get all data from collection 
        const allStudents = await Student.find();
        res.status(200).send(allStudents);
    } catch (error) {
        res.status(200).send(error);
    }
})

// read the data from database for one student by Id
app.get("/registration/:id", async (req, res) => {
    try {
        const id = req.params.id  // get the id from url 
        const result = await Student.findById({ _id: id });
        if (!result)
            res.status(404).send();
        else
            res.status(200).send(result);

    } catch (error) {
        res.status(404).send(error);
    }
})


//update data in database for one student by Id
app.patch("/registration/:id", async (req, res) => {
    try {
        const _id = req.params.id  // get the id from url 
        // const result = await Student.findByIdAndUpdate(_id,req.body);

        // show the updated data when gets update
        const result = await Student.findByIdAndUpdate(_id, req.body, { new: true });

        if (!result)
            res.status(404).send();
        else
            res.status(200).send(result);

    } catch (error) {
        res.status(404).send(error);
    }
})





app.listen(port, () => {
    console.log(`Server running on at http://localhost:${port}`);
})
