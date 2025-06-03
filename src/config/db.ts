const mongoose = require("mongoose")
require('dotenv').config()

// connect to db
const connectDB = async ()=> {
    try{
    await mongoose.connect(process.env.MONGO_URL).then(()=> console.log("MongoDB connected"))
} catch(error){
    console.log("Failed to connect to MongoDB", error);
    process.exit(1)
}
};

module.exports = connectDB