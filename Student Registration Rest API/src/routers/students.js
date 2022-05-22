const express = require("express");
const router = express.Router();
const Student = require("../models_schemas/students");



// create a student using async await
router.post("/registration", async (req, res) => {
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
router.get("/registration", async (req, res) => {
    try {
        // get all data from collection 
        const allStudents = await Student.find();
        res.status(200).send(allStudents);
    } catch (error) {
        res.status(200).send(error);
    }
})

// read the data from database for one student by Id
router.get("/registration/:id", async (req, res) => {
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
router.patch("/registration/:id", async (req, res) => {
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



// delete data from database using delete method 
router.delete("/registration/:id", async (req, res) => {
    try {
        if (!req.params.id) {
            return res.status(400).send();
        }
        const deletedResult = await Student.findByIdAndDelete(req.params.id);
        res.send(deletedResult);
    } catch (error) {
        res.status(500).send(error);
    }
})

module.exports = router;