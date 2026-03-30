import dbConnect from "../index.js";

const deleteUser = async () => {
    try {
        const db = await dbConnect();
        const loginCollection = db.collection("login");

        const result = await loginCollection.deleteOne({
            email: "def@gmail.com"
        });

        console.log("Deleted:", result.deletedCount);

    } catch (error) {
        console.log("Deletion Error", error);
    }
};

deleteUser();