const promt = require('prompt-sync')(); // since it a function we are invoking here itself;


const { stdin, stdout } = require('process');
const readline = require('readline');
const interface = readline.createInterface({
    input:stdin,output:stdout
});

interface.question("What is your name?", (name)=>{
    console.log(`Welcome to commandline interface ${name}`);
    interface.close();
});

// using promp-sync

const name = promt("Whats your name");
console.log(`Welcome to commandline interface ${name}`);
// we have to exit manually from command line by ctrl+c

