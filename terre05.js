/*
* Division
*/

/*
* Write a program that displays the quotient and remainder of a division
*/

//Get the function arguments
//const { argv } = require('process');
import { argv } from 'node:process';

let result = 'erreur.';
//Check if two arguments are passed and they are Integers
if( argv.length === 4){
  const x = argv[2];
  const y = argv[3];
  //Check if arguments are Integers
  if((x % 1 === 0) && (y % 1 === 0)){
    //Check if arguments x > y and y is not 0. NOTE: do not compare x > y as it compare String value and not Integer value
    if((x-y > 0) && y !== '0'){
      const quotient = Math.floor(x / y);
      const remainder = x % y;
      result = `Résultat: ${quotient} \n Reste: ${remainder}`;
    }

  }
}
console.log(result);
