const express = require('express')
const db = require("./db/cars");
const bodyParser = require("body-parser");
const path = require("path");
const router = express.Router();
const handlebars = require("express-handlebars")


// app config 
const app = express()
const port = 3000


// using bodyParser for json
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// use a folder as website 
// app.use(express.static(path.join(__dirname, "public")));

// change the templating engine 
app.set('view engine', 'handlebars');
app.engine('handlebars', handlebars.engine());


// // rout and render a file 
router.get("/", async (req, res) => {
    const allCars = await db.getAllCars();
    res.render("index", { Cars: allCars });
});

// // rout and render a file 
router.get("/search/", async (req, res) => {
    const query = req.query;
    const searchCars = await db.searchCar(query);
    res.render("search", { Cars: searchCars, keyword: query});
});

// show form to add car data
router.get("/add", (req, res) => {
    res.render("add-car");
});

// insert the car data to the database 
app.post("/add", async (req, res) => {
    const results = await db.createCar(req.body);
    res.status(200).redirect("/");
});

// fetch and show car data for updating
router.get("/update/:id", async (req, res) => {
    const car = await db.getOneCar(req.params.id, req.body);
    res.render("update-car", { car_data: car });
});

// update car data
router.post("/update/:id", async (req, res) => {
    const id = req.params.id; // get the url data
    const car = {make: req.body.make, model : req.body.model, year:  req.body.year}; // get the form data
    await db.updateCar(id, car);
    res.redirect("/");
});

// delete car data by id 
router.get("/delete/:id", async (req, res) => {
    const id = req.params.id;
    await db.deleteCar(id);
    res.redirect("/");
});

// get the all cars data 
app.get("/api", async (req, res) => {
    const cars = await db.getAllCars();
    res.status(200).json({ cars });
})

// send to the router 
app.use("/", router);
app.use("/add", router);
app.use("/update", router);
app.use("/delete", router);
app.use("/search", router);


// // update the car data 
// app.post("/update/:id", async (req, res) => {
//     const id = await db.updateCar(req.params.id, req.body);
//     res.status(200).redirect("back");
// })

// // delete a car data 
// app.delete("/cars/:id", async (req, res) => {
//     await db.deleteCar(req.params.id);
//     resolveSoa.status(200).json({ success: true });
//     res.status(200).json({ success: true });
// })


// start the server 
app.listen(port, () => {
    console.log(`Server has started on http://localhost:${port}`)
})