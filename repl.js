//  Read evaluate print loop
const repl = require('repl');
const local = repl.start();


// to exit with a message

local.on('exit',()=>{
    console.log("REPL code exited. Thanks for using the console.");
    process.exit(1);
});