import http from 'http';
const PORT = 8800;

const server = http.createServer((req, res) => {
    if(req.url === "/favicon.ico")return;
    
    if(req.url === "/login" && req.method === "POST"){
        let body = "";``
        req.on("data", (chunk) => {
            body += chunk.toString();
        });
        req.on("end", () => {
            res.end("Login successful");
        });

        req.on("end",async ()=>{
            const userData = JSON.parse(body);
            const response = await userLogin(userData,"../user.json");
            res.writeHead(response.status, { "Content-Type": "application/json" });
            res.end(JSON.stringify({ message: response.message }));
        }
        )
    }

    // switch(req.url){
    // case "/":     
    // res.end(  "server is live" );
    // break;
    // case "/login":
    //     res.end("this is about page");
    //     break;
    // case "/register":
    //     res.end("this is register page");
    //     break;
    // default:
    //     res.end("404 not found");
    // }

    

    
});
server.listen(PORT, () => console.log(`server is live at http://localhost:${PORT}`));