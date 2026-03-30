import dbConnect from "../index.js";

const updateUser = async () => {
    try {
        const db = await dbConnect();
        const loginCollection = db.collection("login");

        const result = await loginCollection.updateMany(
            { email: "abc@gmail.com" },   // filter
            { $set: { name: "def", email: "def@gmail.com" } } // update
        );

        console.log("Matched:", result.matchedCount);
        console.log("Modified:", result.modifiedCount);

    } catch (error) {
        console.log("Updation Error", error);
    }
};

updateUser();