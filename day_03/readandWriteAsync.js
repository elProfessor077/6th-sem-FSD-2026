import fs from "fs/promises";
// console.log(fs);
/*
 const  writeFile= async(path,data)=>{
    try{
    await fs.writeFile(path,data);
    console.log("data has been written succesfully");

    }
    catch(error){
        console.log("unable to perform write operation ");
        
    }
}
writeFile("./example.txt","this data has been written through async function ");
*/
// function to read file 

const readFile= async (path)=>{
    try{
    const data = await fs.readFile(path,"utf-8");
    console.log(data);

    }
    catch(error){
        console.log("file can not be read due to some error ");

    }
}
readFile("./example.txt");

// function to append in the file 
const appendFile=async (path,data)=>{
    try{
       await fs.appendFile(path,data);
       console.log("data has been appended succesfully ");
       
    }
    catch(error){
        console.log("data cannot be appended in the given file due to some error ");

    }
}
appendFile("./example.txt","\n this data has been appended in the file using appendFile function ");