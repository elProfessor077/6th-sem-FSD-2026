import { writeFile } from "fs";
import { readFile  } from "./helper.js";
export const register = async(userDetails, FILE) => {
    const {full_name, email, password, gender} = userDetails;
    if(!full_name || !email || !password || !gender){
        return {message: "All fields are required"};
    }
    let updatedUsers = [];
    const users = await readFile(FILE);
    if(users.length===0) updatedUsers = [userDetails];

    const user = users.find((user) => user.email === email);
    if(user) return {message: "User has been already registered."};

    updatedUsers = [...users, userDetails];
    console.log(updatedUsers);

    const response = await writeFile(updatedUsers, FILE);
    return response;
}
register({name:"abc", email:"abc@gmail.com", password:"1234", gender:"m"}, "./users.json");