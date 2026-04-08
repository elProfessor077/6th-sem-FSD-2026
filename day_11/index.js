import express from "express";
import {
    createUser,
    readUsers,
    updateUser,
    deleteUser} from "./controller/crud.js";
import dbConnect from "./config/db.js";

dbConnect();

const app = express();
const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
app.use(express.json());//middleware to parse json data from request body


app.get("/users",readUsers);
app.post("/users",createUser);
app.put("/users/:email",updateUser);
app.delete("/users/:email",deleteUser);
