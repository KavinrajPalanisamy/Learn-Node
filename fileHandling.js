const path = require('path');
const fsPromise = require('fs').promises;
const filePath = "/Users/kavinrajvp/Documents/node/Learn-Node/files/sample.txt";

// to get dir name
console.log(path.dirname(filePath));
console.log(__dirname);
// to get the base name or filename
console.log(path.basename(filePath));
// to get the extension
console.log(path.extname(filePath));

// Path Joining
console.log("*********PATH JOINING***********");
const sampleFile ='sample.txt';
console.log(path.join(path.dirname(filePath),sampleFile));



// File System

const fs = require('fs');
// read a file using async
fs.readFile(filePath,"utf-8",(err,data)=>{
    if(err){
        throw new Error(err);
    }else{
        console.log("Async " ,data);
    }
});
// read a file in synchronous way
try{
const data = fs.readFileSync(path.join(__dirname,"files","sample.txt"),'utf-8');
console.log("Sync ",data);
}catch(err){
console.log(err);
}

// read file using FS PROMISES
const readFileUsingFsPromises =async()=>{
    try {
        const data = await fsPromise.readFile(filePath,{encoding:"utf-8"});
        console.log("FS PROMISES ", data);
    } catch (error) {
        console.log(error);
    }
}
readFileUsingFsPromises();

// WRITE TO A FILE
const writeFile= async()=>{
    const textFile=path.join(__dirname,"files","text.txt");
    const contentToWrite = "I am learning and trying files handling in nodejs";
    fs.writeFile(textFile,contentToWrite,(err)=>{
        if(err){
            throw new Error(err);
        }
        console.log("Async write success");
        fs.readFile(textFile,"utf-8",(error,data)=>{// callback inside a callback
            if(error){
                throw new Error(error);
            }
            console.log("Printing the latest content from Text.txt",data);
        });
    });
}
writeFile();

// to overcome the nested callbacks use fs promises

const writeFileUsingFsPromises =async()=>{
    try {
        const textFile= path.join(__dirname,"files","text.txt");
        console.log("WRITING IN FILE USING FS PROMISES");
        await fsPromise.writeFile(textFile,"\nWelccome to txt file.",{flag:"a+"});
        
        // await fsPromise.appendFile(textFile,"\nWriting to append the file");
        await fsPromise.writeFile(textFile,"\nIs Awesome.",{flag:"a+"});// flag will write the content in a+ position that is last postion of file
        const appData = await fs.promises.readFile(textFile);
        console.log(appData.toString());

        // rename the text.text file
        await fsPromise.rename(textFile,path.join(__dirname,'files','newTextFile'));
    } catch (error) {
        console.log(error);
    }

}
writeFileUsingFsPromises();