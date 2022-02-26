/**
* Afficheur d'arguments
*/

/*
* Write a program that displays each argument line by line
*/

// process.argv returns an array containing the command-line arguments passed when the Node.js process was launched
const process = require('process');
const arguments = process.argv;

// log arguments by looping through argv length from index = 2 to skip __direname and __filename, the two first arguments.
for(let i=2; i<arguments.length; i++){
  console.log(arguments[i]);
}

// Tips: another syntax exists const { argv } = require('process'); to get the argument array from process in one line
