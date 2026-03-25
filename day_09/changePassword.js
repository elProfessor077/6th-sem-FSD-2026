import { readFile, writeFile } from "./helper.js"
export const changePassword = async (userDetails, FILE) => {
    const { email, password } = userDetails;
    if (!email || !password) return { message: "All fields are required." };

    const users = await readFile(FILE);
    if (users.length === 0) return { message: "User is not existing" };

    const user = users.find((user) => user.email.toLowerCase() === userDetails.email.toLowerCase());
    if (!user) return { message: "User is not existing" };

    const updatedUsers = users.map((user) =>
        user.email === userDetails.email ? { ...user, ...userDetails } : user);
    const response = await writeFile(updatedUsers, FILE);
    return response.status === 200
        ? { message: "Password has been changed successfully" }
        : { messgae: "Ubnable to change the password" };
}