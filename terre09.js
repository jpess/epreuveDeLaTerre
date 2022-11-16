/**
* Racine carree
*/

/*
* Write a program that displays the square root of an Integer
*/
//const { argv } = require('process');
import { argv } from 'node:process';

if( argv.length !== 3){
  console.log("erreur : Veuillez entrer un et un seul argument.");
} else if( isNaN( argv[2] ) ){
  console.log("erreur : Veuillez entrer un nombre.");
} else {
  const number = Number(argv[2]);
  if( !Number.isInteger( number ) ){
    console.log("erreur : Veuillez entrer un entier.");
  } else if( number < 0 ){
    console.log("erreur : Veuillez entrer un entier positif.");
  } else {
    console.log(Math.sqrt(number));
  }
}
