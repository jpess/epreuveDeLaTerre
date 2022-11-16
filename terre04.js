/**
* Pair ou Impair
*/

/*
* Write a program that tells if a integer in params is odd or even
*
* Handle negatives, string, empty params, etc.
*/

// Retrieve the array of arguments
//const { argv } = require('process');
import { argv } from 'node:process';

// Test if an argument has been passed (ommit the 2 first __direname and __filename)
if( argv.length === 3){
  const param = argv[2];

  //Check if param is even by testing the result of modulo 2 is 0
  if(param % 2 === 0){
    console.log("pair");
  } else if(param % 2 === 1 || param % 2 === -1) {
    //Check if param is odd if modulo 2 returns 1 (or -1 if negative odd)
    console.log("impair");
  } else {
    //If any other result than the ones expected, log 'Do not fool me.'
    console.log("Tu ne me la mettras pas à l’envers.");
  }
} else {
  //If there is no param or if there are more than 1 param, log 'Do not fool me.'
  console.log("Tu ne me la mettras pas à l’envers.");
}
