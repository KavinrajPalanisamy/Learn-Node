// error handling using error object
const error = new Error("Something went wrong");
const { some } = require('lodash');
// console.log(error.stack);
// console.log(error.message);
 //or we can throw the error by
//  throw new Error("Something went wrong!!!");
 // Custom errors

 const {customError} = require('./customErrors');
//  throw new customError("Throwing a custom error object") ;

 // try catch
 try{
    // doSomething();
 }catch(error){
    console.log("Error Occured");
    console.log(error);
 }
 function doSomething(){
    const data = fetch("localhost:2000/api/get");
    console.log("I am in doSomething()");
 }

 // uncaught exceptions
process.on("uncaughtException",(error)=>{
    console.log("There was an uncaught exception",error);
    process.exit(1);
});
// doSomething();

//Exceptions with Promises
const promise = new Promise((resolve,reject)=>{
    if(false){
        resolve(doSomething());
    }else{
        reject(doSomething());
    }
});

// promise.then((result)=>{
//     console.log(result);
// }).catch((error)=>{
//     console.log("Error in Promise ", error);
// });

// Exceptions with async and await

const someFunction =async ()=>{
    try{
        await doSomething();
    }catch(err){
        throw new customError(err.message);
    }
    
}
someFunction();