
//process.argv; contains 3 arguments
// 1. path of node
// 2. file name to execute
// 3. argument that we want
const minimist = require('minimist');
// console.log(process.argv);
//  node argument.js name=priya

// to use the name

console.log(process.argv.slice(2)[0]);
// to print all the argv

process.argv.forEach((index,value) => {
    console.log(`${index}:${value}`)
});

// to access only the name from the argument we have a another package called minimist
// when we use minimist then we need to add -- in the commandline
//  node argument.js --name=priya
const newArg = minimist(process.argv.slice(2));
console.log(newArg.name);