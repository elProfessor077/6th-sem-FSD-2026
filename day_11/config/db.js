import mongoose from 'mongoose';

const MONGO_URI = "mongodb+srv://user:admin@crud.b0tvjp2.mongodb.net/Users?appName=CRUD";

const dbConnect = async () => {
    try {
        await mongoose.connect(MONGO_URI);
        console.log("Connected to MongoDB");
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
    }
};

export default dbConnect; 