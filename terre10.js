/**
* Nombre Premier
*/

/*
* Write a program that displays if a number is a prime number
*/

//const { argv } = require('process');
import { argv } from 'node:process';

//Result messages const as anonymous functions
const errorNotPrimeNumber = (number) => {
  return `Non, ${number} n'est pas un nombre premier.`;
}
const successPrimeNumber = (number) => {
  return `Oui, ${number} est un nombre premier.`
}

//Test arguments
if(argv.length !== 3){
  console.log("erreur : Veuillez entrer un et un seul argument.");
} else if(isNaN(argv[2])){
  console.log("erreur : Veuillez entrer un nombre.");
} else {
  const number = Number(argv[2]);
  if(!Number.isInteger(number)){
    console.log("erreur : Veuillez entrer un entier.");
  } else if( number < 0 ){
    console.log("erreur : Veuillez entrer un entier positif.");
  } else
    //0 and 1 are not prime numbers, 2 is the first prime number
    switch(number){
      case 0:
      case 1:
        console.log(errorNotPrimeNumber(number));
        break;
      case 2:
        console.log(successPrimeNumber(number));
        break;
      default:
        //Iterate from 2 to the number-1 and test if number division remainder is 0
        for(let i=2; i<number; i++){
          if(number % i === 0){
            //We found our number can be divided by another one, not prime
            console.log(errorNotPrimeNumber(number));
            break;
          } else if(i === (number-1)) {
            //We did not find a number to divide ours, that's a prime number !
            console.log(successPrimeNumber(number));
          }
        }
        break;
    }
  }
}
