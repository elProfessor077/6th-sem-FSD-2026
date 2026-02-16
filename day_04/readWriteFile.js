import fs from 'fs/promises';

 export const readFile = async (path) => {
    try {
        const data = await fs.readFile(path, 'utf-8');
        return JSON.parse(data);
    } catch (error) {
        console.log("Unable to read file:", error.message);
        throw error; 
    }
};

// readFile("./student.json")
//     .then((data) => console.log(data))
//     .catch((error) => console.log("Error:", error.message));

export const writeFile = async(path, data) => {
    try {
        await fs.writeFile(path,data);
        return 'file written successfully';
    } catch (error) {
        return 'unable to write file';


    }
}