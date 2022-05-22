const mongoose = require("mongoose");
const validator = require("validator");


// create student Schema
const studentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 3
    },
    email: {
        type: String,
        required: true,
        unique: [true, "Email already used!"],
        validate(email_value) {
            if (!validator.isEmail(email_value)) {
                throw new Error("Invalid Email")
            }
        }
    },
    phone: {
        type: Number,
        min: 10,
        required: true
    },
    address: {
        type: String,
        required: true
    }

})

// create new collection 
const Student = new mongoose.model('student_record',studentSchema);

// export module
module.exports = Student