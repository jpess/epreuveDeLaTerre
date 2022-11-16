/**
* Taille d'une chaine
*/

/*
* Write a program that displays the passed String number of characters
*/

//Retrieve the arguments
//const { argv } = require('process');
import { argv } from 'node:process';

if( argv.length !== 3 ){
  //Test if exactly ONE argument is passed
  console.log("erreur.");
} else if(!isNaN(argv[2])){
    //Test if argument is not a number
    console.log("erreur.");
} else {
  console.log(argv[2].length);
}
