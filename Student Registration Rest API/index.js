const express = require("express");
const registrationRouter = require("./src/routers/students")
require("dotenv").config();
require("./src/database");

app = express();
// create express Router 
const router = new express.Router();

const port = process.env.PORT || 8000

// for using json data 
app.use(express.json());
// for our seperate student router 
app.use(registrationRouter);

// root path 
app.get("/", (req, res) => {
    res.send(`
    <div style="width:1000px; margin: auto;">
    <h1 style="color: crimson;"> Student Registration REST API NodeJS Express MongoDB</h1>
    <h3>Try these paths</h3>
    
    <details>
      <summary><strong>/registration</strong> - (GET)</summary>
      <p>Get all registered students </p>
     <br> <p>Resonsive -  </p>

      <pre>
      {
          "name": "s_name",
          "email":"s_email",
          "phone":"s_phone",
          "address":"s_address"
      }
  </pre>
    </details>
    
    <details>
      <summary><strong>/registration</strong> - (POST)</summary>
      <p>Register new student  </p>
     <br> <p>Request -  </p>

      <pre>
          {
              "name": "s_name",
              "email":"s_email",
              "phone":"s_phone",
              "address":"s_address"
          }
      </pre>
    </details>

    <details>
      <summary><strong>/registration/id</strong> - (PUT)</summary>
      <p>Update student by id  </p>
     <br> <p>Resonsive -  </p>

      <pre>
            {
                "_id": "6289b810de2fac34b664c4bf",
                "name": "John Doe",
                "email": "johndoe@gmail.com",
                "phone": 8340460297,
                "address": "st 72 usa",
                "__v": 0
            }
      </pre>
    </details>

    <details>
      <summary><strong>/registration/id</strong> - (DELETE)</summary>
      <p>Delete student by id  </p>
     <br> <p>Resonsive -  </p>
      
      <pre>
            {   "_id": "6289b810de2fac34b664c4bf",
                "name": "John Doe",
                "email": "johndoe@gmail.com",
                "phone": 8340460297,
                "address": "st 72 usa",
                "__v": 0
            }
      </pre>
    </details>
    </div>
    `);
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

app.listen(port, () => {
    console.log(`Server running on at http://localhost:${port}`);
})

