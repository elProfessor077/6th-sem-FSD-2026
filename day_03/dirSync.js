// synchronous ooperations on directory 
 import fs from 'fs';
 // created new directory using mkdir 
/*
 const makeDirSync= (path)=>{
     try{
     fs.mkdirSync(path);
     console.log("directory created successfully ");
     }
     catch(error){
         console.log("directory not created due to error ");
 
     }
 
 }
 makeDirSync("../day_04");
*/
// //  removing the directory 
//  const removeDirSync=(path)=>{
//      try{
//      fs.rmdirSync(path);
//      console.log("directory deleted successfully");
//      }
//      catch(error){
//         console.log(" directory cannot be deleted due to error");
 
//      }
 
//  }
//  removeDirSync('../day_04');
 
//  // creating readDirectory using c function to read a directory 
 
 const readDirSync=(path)=>{
     try{
         const data= fs.readdirSync(path);
         console.log(data);
         console.log("we have read the directory succcessfully ");
 
     }
     catch(error){
         console.log("directory cannot be read due to error ");
 
     }
 }
 readDirSync("../day_04");