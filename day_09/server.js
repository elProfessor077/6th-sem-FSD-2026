import express from "express";
import {readFile} from "./helper.js";
import {login} from "./login.js";
const app = express();

app.use (express.json()); 

app.get ("/users",async (req, res) => {
    const users =  await readFile("./users.json");
    res.status(200).json(users);
});

app.post ("/login", async (req, res) => {
    const response = await login (req.body, "./users.json");
    res.status(200).json(response);
});


app.listen (3000, () => {
    console.log ("Server is running on http://localhost:3000");
});