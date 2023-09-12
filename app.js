//npm init : Create package.json file
//npm init -y : Create package.json file with default values

//npm install package-name: Install package locally
//npm install package-name -g: Install package globally

//Create a .gitignore file and add /node_modules to it

//npm install : Install all dependencies from package.json

const _ = require("lodash");

const items = [1, [2, [3, [4]]]];
const newItems = _.flattenDeep(items);
console.log(newItems);
