import fs from "fs/promises";
export const writeFile = async (path, data) => {
    let message = "";
    let status = 0;
    try {
        await fs.writeFile(path, JSON.stringify(data, null, 2));
        status = 201;
        message = "user is registered successfully";
    } catch (error) {
        status = 500;
        message = "unable to write data";
    }
    return { status, message };
}