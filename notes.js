/*

Reference - Dipesh Malvia Youtube channel
link - https://www.youtube.com/watch?v=5rc7gkc2Chs&list=PLTP3E5bPW796_icZanMqhdg7i0Cl7Y51F


Getting Started with Node and Command line

1. Introduction to nodeJs
2. NodeJs Installation
3. Create nodejs Project
4. Run nodejs Scrips
5. Exit node from program
6. Environment variable
7. REPL
8. NodeJs Command line arguments
  - process.argv
  //process.argv; contains 3 arguments
  // 1. path of node
  // 2. file name to execute
  // 3. argument that we want
  // console.log(process.argv);
  //  node argument.js name=priya
  // to use the name
  console.log(process.argv.slice(2)[0]);

  - handling the arguments using minimist
  // to access only the name from the argument we have a another package called minimist
  // when we use minimist then we need to add -- in the commandline
  //  node argument.js --name=priya
9. Command line Output
  - format specifier in console
    %s - String
    %d - Number
    %o - Object
    %i - Integer
  - Clear console
  - Handling count,countReset in console
  - Handling stack trace
  - measure the time using console(console.time,console.timeEnd())
  - progress bar(by npm progress package)
10. Command line Input
  - command line interface
  - prompt in node

Node Package Manager

"optionalDependencies": { 
    "colors": "^1.4.0"//npm install colors --save-optional
  }
npm update -> will update all the packages to the latest version
npm update <package-name> -> will update the specific package to the latest version.

To see the global packages
  npm root -g (will show the path of nodemodules where the global packages were intalled)

npm list -> will show all the installed packages
npm view <package-name> -> will show the version of package

To install older version of a package
npm install <package-name>@older-version

Semantics of versioning
example - express ^4.18.1
X:first digit is major version
Y:second digit is minor version
Z:third digit is patch version

^4.18.1 -> change the minor or patch version. but update will never change the major version.
~4.18.1 -> change only the patch version

2024-10-21 3.20pm
Error Handling
- Error Handling using objects
- Custom Error Handling
- Error handling using try/catch
- Handling Uncaught Exceptions
- Handling Errors with Promise
- Handling Errors using async/await
File Handling
- About fs and path module, path joining(extracting __dirname, basename/filename, file extension)
- Read a file using callback(async version)
- Read a file synchronously
- Read file using promise(async/await)

- Write to a file using callback(async version)
- Write to a file using promise(async/await)
- Nested operations callback hell
- Nested operations using promise(async/await)

- Append File
- File system Flag +a
- Rename a file

2024-10-22 10.00 AM
Async Programming

*/