import dbConnect from "../index.js";

const findUsers = async () => {
    try {
        const db = await dbConnect();
        const loginCollection = db.collection("login");

        const users = await loginCollection.find({}).toArray();
        console.log("Users", users);

    } catch (error) {
        console.log("Error in finding users", error);
    }
};

const findUser = async () => {
    try {
        const db = await dbConnect();
        const loginCollection = db.collection("login");

        const user = await loginCollection.findOne({ email: "abc@gmail.com" }).toArray(); 
        console.log("User", user);

    } catch (error) {
        console.log("Error in finding user", error);
    }
};

// findUsers();
findUser();