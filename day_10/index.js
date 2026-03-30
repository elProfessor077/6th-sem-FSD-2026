import { MongoClient } from "mongodb";

const uri = "mongodb+srv://user:admin@userlogindetails.vihpnal.mongodb.net/?appName=userLoginDetails";

const DB_NAME = "users";
const client = new MongoClient(uri);

const dbConnect = async () => {
    try {
        await client.connect();
        console.log("Connected to MongoDB");

        return client.db(DB_NAME); // ✅ FIX: return database

    } catch (error) {
        console.log("Error connecting to MongoDB:", error);
    }
};

export default dbConnect;