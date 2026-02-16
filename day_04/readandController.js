import {readFile, writeFile} from './readWriteFile.js';

const data = {
  id: 11,
  first_name: "Milka",
  last_name: "Feye",
  email: "mfeye0@mashable.com",
  gender: "Polygender"
}

const writeFileData = async (path, data) => {
    try {
        const fileData =  await readFile(path);
        const updatedData = [fileData, data];
        await writeFile(path, JSON.stringify(updatedData));
    } catch(error) {
        console.log("unable to run write service");
    }
}

writeFileData('./student.json', data);

const readFileData = async() => {
    try {
        const fileData = await readFile(path);
        console.log(fileData);
    } catch(error) {
        console.log("Error");
    }
}
// readFileData('./students.json');