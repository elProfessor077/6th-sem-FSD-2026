import { readFile, writeFile } from "../day_04/readWriteFile.js";
const FILE = '../day_04/students.json';

const deleteFileData = async (id) => {
    const students = await readFile(FILE);
    if (!students) {
        console.log("user is not existing");
        return;
    }
    const user = students.filter((student) => student.id === id);
    if(user.length === 0){
        console.log("user is not existing");
    }else{
        const filterData = students.filter((student) => student.id !== id);
        await writeFile(FILE, JSON.stringify(filterData, null, 2));
    }
}

deleteFileData(13);