//const fs = require('fs') // type common js

import fs from 'fs'; // type module
//console.log(fs);

const appendFileSync = (file, data) => {
    try {
        fs.appendFileSync(file, data);
        console.log("File has been written succesfully ...")
    } catch (error) {
        console.log("some error occured...");
    }
}
appendFileSync("./example.txt", " this data has been appended through sync function of fs");


const readFileSync = (path) => {
    try {
        const data = fs.readFileSync(path, "utf-8");
        console.log(data);
    } catch (error){
        console.log("unable to read data");
    }
}
readFileSync("./example.txt");


// const writeFileSync = (file, data) => {
//     try {
//         fs.writeFileSync(file, data);
//         console.log("File has been written succesfully ...")
//     } catch (error) {
//         console.log("some error occured...");
//     }
// }
// writeFileSync("./example.txt", "this data has been written through sync function of fs module");====