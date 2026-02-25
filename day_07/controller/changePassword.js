import { readFile, writeFile } from "../DAY6/Utils/readandwriteFile.js";
const FILE = "../DAY/user.json";
const upadateUsers = async (users, userDetails) => {
    const updatedUser = users.map((u) => {
        return u.email === userDetails.email ? { ...u, password: userDetails.password } : u;
    });
    await writeFile(FILE, updatedUser);
    return updatedUser;
}

const changePassword = async (userDetails) => {
    const { email, password } = userDetails;
    if (!email || !password) {
        return { meassage: "All field required ", status: 401 };
    }
    const users = await readFile(FILE);
    if (users.length == 0) {
        return { meassage: "Password must be at least 8 characters long", status: 401 };
    }
    const existingUser = users.find((u) => u.email === email);
    if (!existingUser) {
        return { meassage: "User not found", status: 402 };

    }
    const response = await upadateUsers(user, userDetails);
    return response.status == 201 ?
        { meassage: "passord updated successfully", status: 201 } :
        { meassage: "Failed to update password", status: 500 };


}
changePassword({ email: "nitinkjk@gmail.com", password: "nitin@123" }).then((response) => console.log(response.meassage))