const dotenv = require("dotenv");
const mongoose = require("mongoose");

dotenv.config({path:"./.env"});

const DB = process.env.DATABASE
mongoose.connect(DB).then(() => {
    console.log("Connection Establish... ");
}).catch((err) => {
    console.log("Connection Failed... ",err);
}); 




// "mongodb+srv://rohit:rohit@cluster0.ufsfg.mongodb.net/merndata?retryWrites=true&w=majority"
