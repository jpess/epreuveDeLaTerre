/**
* Inverser une chaine
*/

/*
* Write a program that displays a reverted String
*/

//Retrieve the arguments
//const { argv } = require('process');
import { argv } from 'node:process';

if( argv.length !== 3 ){
  //Test if exactly ONE argument is passed
  console.log("Merci d'executer le programme avec un et un seul argument");
} else if( typeof argv[2] !== 'string' ){
  //Test if argument is type of String
  console.log("Merci de passer une chaine de caractere en argument");
} else {
  const str = argv[2];
  reverseStr = "";
  //Reverse loop from the String end to its beginning
  for( let i = str.length - 1; i >= 0; i--){
    //Concatenate the character to our result string
    reverseStr += str[i];
  }
  console.log(reverseStr);
}
