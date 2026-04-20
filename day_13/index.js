import express from "express";
import dbConnect from "./config/db.js";
import LoggedUserDetails from "./models/loggedUserDetails.js";
import userRoutes from "./routes/userRoutes.js";

const app = express();
const PORT = 8800;

app.use(express.json()); // built in middleware
dbConnect();
app.use(async(req, res, next) => {
    try {
        await LoggedUserDetails.create({
            ip: req.ip,
            url: req.url,
            method: req.method,
            header: req.headers["user-agent"]
        })
        // next();
    } catch(error) {
        console.log("Logging Error", error.message);
    }
      next();
})

// app.get("/users", (req, res) => {
//     res.status(200).json({ message: "ok" })
// })

app.use("/", userRoutes);
app.listen(PORT, () => console.log(`server is running at http://localhost:${PORT}`));