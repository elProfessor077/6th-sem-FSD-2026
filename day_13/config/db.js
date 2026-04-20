import mongoose from "mongoose";
const MONGO_URI = "mongodb+srv://user:admin@crud.t1nruyz.mongodb.net/?appName=CRUD";

const dbConnect = async() => {
    try {
        await mongoose.connect(MONGO_URI)
        console.log("DB connection established sucessfully");
    }
    catch(error) {
        console.log("DB connection error");
    }
}

export default dbConnect;