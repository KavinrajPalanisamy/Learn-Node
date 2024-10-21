/*
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

*/