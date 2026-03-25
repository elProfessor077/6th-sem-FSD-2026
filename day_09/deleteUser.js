import { readFile, writeFile } from "./helper.js";
export const deleteUser = async (userDetails, FILE) => {
    const { email, password } = userDetails;
    if (!email || !password)
        return { message: "All fields are required to delete the user from thr database" };
    const users = await readFile(FILE);
    if (users.length === 0) return { message: "user is not existing " };

    const user = users.find((user) => user.email.toLowerCase() === email.toLowerCase());
    if(!user)  return { message: "user is not existing " };

    if (user.password !== password) return { message: "Incorrect password. User can't be deleted." };

    const updatedUsers = users.filter((user) =>
        user.email.toLowerCase() !== email.toLowerCase());

    const response = await writeFile(updatedUsers, FILE);
    return(response.status === 200)
        ? { message: `${user.name} has been deleted successfully` }
        : { message: `${user.name} has not  been deleted successfully` };

}