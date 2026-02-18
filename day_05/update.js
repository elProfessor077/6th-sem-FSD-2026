import { readFile, writeFile } from "../day_04/readWriteFile.js";
const FILE = "../day_04/student.json";

const updateFileData = async (id, data) => {
    const students = await readFile(FILE);

    if (!students) {
        console.log("User does not exist");
        return;
    }

    const updatedData = students.map((student) =>
        Number(student.id) === Number(id)
            ? { ...student, ...data }
            : student
    );

    await writeFile(FILE, JSON.stringify(updatedData, null, 2));
    console.log("File updated successfully");
};

updateFileData("12", { first_name: "ABC", last_name: "CDE" });
