console.log("Welcome Back Priyadharshini AP!");
// normal exit
// process.exit(0);

// to exit application programmatically
// process.exit(1);
// or
process.exitCode =1;
const _ = require('lodash');

const arr = [1,2,3,4,5];
console.log(_.chunk(arr));
console.log(_.last(arr));

const cowsay = require('cowsay');
console.log(cowsay.say({
    text:"Learning and Refreshing nodejs",
    eyes:"00",
    tongue:"U"
}))
var {personalInfo} = require('./personalDetail');
console.log("personal details ", personalInfo);
console.log("address ",personalInfo.address);
const {family} = personalInfo;
console.log("familyInfo ", family);

// to beautify the objects
console.log(JSON.stringify(family,null,15));// 15 for intendation
console.log(JSON.stringify(personalInfo.address,undefined,2));