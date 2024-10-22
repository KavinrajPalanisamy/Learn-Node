const x =2;
const y = 3;
console.log(x,y);

// format specifier in console
/* 
%s - String
%d - Number
%o - Object
%i - Integer
*/
console.log("I am %s with age %d born in %i and my details %o" ,"priya",28,1996,{address:"cuddalore"});

// to clear the console
console.clear();

// to count the console

console.count("Hello");
console.count("Welcome Priya");
console.count("Welcome Priya");


// to reset the count
console.count("Welcome User");
console.countReset("Welcome Priya"); // content should be same
console.count("Welcome Priya");
console.count("Welcome Priya");
// to print the stack trace

const function1=()=> console.trace();
const function2=()=>function1();

//function2();

// count the time

const sum =()=> console.log(`The sum of 2 and 3 is ",${2+3}`);
const product =()=> console.log(`The product of 2 and 3 is ",${2*3}`);

const calculateTime =()=>{
console.time("sum()");
sum();
console.timeEnd("sum()");
console.time("product()");
product();
console.timeEnd("product()");
}
calculateTime();


// const { default: chalk } = require('chalk');
// Progress bar
const Progressbar = require('progress');
// etas means expected time
const bar = new Progressbar("downloading [:bar] rates/bps :percent :etas ",{
total:20
});

const timer = setInterval(()=>{
    bar.tick();
    if(bar.complete){
        clearInterval(timer)
    }
},200);
// to add colors in console we can use chalk package
// to install use a specific version npm install chalk@4 becoz chalk5 has ES6 module features
const chalk = require("chalk");
console.log(chalk.green("This is outpage running in nodejs"));