import http from "http";
import { register } from "./register.js";
import { changePassword } from "./changePassword.js";
import { login } from "./login.js";
import { deleteUser } from "./deleteUser.js";
const PORT = 8600;
const FILE = "./users.json";
const server = http.createServer((req, res) => {
    if (req.url === "/register" && req.method === "POST") {
        let body = "";
        req.on("data", (dataChunk) => {
            body += dataChunk.toString();
        })
        req.on("end", async () => {
            const userDetails = JSON.parse(body);
            const response = await register(userDetails, FILE);
            res.writeHead(200, { "Content-type": "application/json" });
            res.end(JSON.stringify(response));
        })
    } else if (req.url === "/change-password" && req.method === "POST") {
        let body = "";
        req.on("data", (dataChunk) => {
            body += dataChunk.toString();
        })
        req.on("end", async () => {
            try {
                const userDetails = JSON.parse(body);
                const response = await changePassword(userDetails, FILE);
                res.writeHead(200, { "Content-type": "application/json" });
                res.end(JSON.stringify(response));
            } catch (error) {
                res.writeHead(500, { "Content-type": "application/json" });
                res.end(JSON.stringify({message:error}));
            }
        })
    } else if (req.url === "/login" && req.method === "POST") {
        let body = "";
        req.on("data", (dataChunk) => {
            body += dataChunk.toString();
        })
        req.on("end", async () => {
            try {
                const userDetails = JSON.parse(body);
                const response = await login(userDetails, FILE);
                res.writeHead(200, { "Content-type": "application/json" });
                res.end(JSON.stringify(response));
            } catch (error) {
                res.writeHead(500, { "Content-type": "application/json" });
                res.end(JSON.stringify({message:error}));
            }
        })
    }else if (req.url === "/delete-user" && req.method === "POST") {
        let body = "";
        req.on("data", (dataChunk) => {
            body += dataChunk.toString();
        })
        req.on("end", async () => {
            try {
                const userDetails = JSON.parse(body);
                const response = await deleteUser(userDetails, FILE);
                res.writeHead(200, { "Content-type": "application/json" });
                res.end(JSON.stringify(response));
            } catch (error) {
                res.writeHead(500, { "Content-type": "application/json" });
                res.end(JSON.stringify({message:error}));
            }
        })
    }else {
        res.writeHead(500, { "Content-type": "application/json" });
        res.end(JSON.stringify({ message: "api not matched.." }));
    }
})
server.listen(PORT,
    () => console.log(`server is running at http://localhost:${PORT}`))