//npm init : Create package.json file
//npm init -y : Create package.json file with default values

//npm i package-name: Install package locally
//npm i package-name -g: Install package globally
//npm i package-name -D: Install package as dev dependency

//npm uninstall package-name: Uninstall package locally

//Create a .gitignore file and add /node_modules to it

//npm install : Install all dependencies from package.json

//nodemon is the package that watches our application changes and restarts the app on making changes automatically

//npx is the new way to install packages without installing them globally. Eg npx create-react-app my-app

const _ = require("lodash");

const items = [1, [2, [3, [4]]]];
const newItems = _.flattenDeep(items);
console.log(newItems);
