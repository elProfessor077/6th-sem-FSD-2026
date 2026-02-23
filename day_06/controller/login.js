
import { readFile } from "../Ut                                                                                                                                                                                          ils/readFile.js";
const FILE = "../user.json";
const userLogin = async (userDetail) => {
    const { email, password } = userDetail;

    const users = await readFile(FILE);
    if (users.length === 0) {
        console.log("user is not existing");
        return;
    }

    const user = users.filter((u) => u.email === email);
    console.log(user);
    
    if (user.length === 0) {
        console.log("user is not existing");
        return;
    }
    (user[0].password === password) ? console.log("Login Successful") : console.log("Incorrect password");
}
userLogin({email:"gpetrowsky1@clickbank.net",password:"rF1>d}q,0$}"}); //login successful
userLogin({email:"gpetrowsky1@clickbank.net",password:"12345"}); //incorrect password
userLogin({email:"abc@gmail.com",password:"12345"}) //user is not existing
