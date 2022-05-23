const mongoose = require("mongoose")

mongoose.connect("mongodb://localhost:27017/RegistrationAPI", {
    useUnifiedTopology: true,
    useNewUrlParser: true,
}).then(() => {
    console.log(`connected to db`);
}).catch((e) => {
    console.log("no connection to database");
})