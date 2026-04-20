import express from "express";

const router = express.Router();
router.use((req, res, next) => {
    console.log("router level Middleware Triggered");
    next();
})
router.get("/users", (req, res) => {
    res.status(200).json({ message: "user" })
})
router.get("/users/profile", (req, res) => {
    res.status(200).json({ message: "user profile" })
})
router.get("/products", (req, res) => {
    res.status(200).json({ message: "product" })
})

export default router;