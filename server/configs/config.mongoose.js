// import dependencies
const mongoose = require("mongoose") 

// connect to the database 
mongoose.connect("mongodb://localhost:/website_db", {
    useNewUrlParser: true, 
    useUnifiedTopology: true 
})
    .then(() => console.log("Established connection to the database")) 
    .catch(() => console.log("Something went wrong when connecting to the database", err)) 