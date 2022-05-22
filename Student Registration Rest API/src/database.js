const mongoose = require("mongoose");

mongoose.connect(
    process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("connected DB");;
}).catch((e) => {
    console.log("no connected");
})