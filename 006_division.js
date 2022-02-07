/*
* Division
*/

/*
* Write a program that displays the quotient and remainder of a division
*/

//Get the function arguments
const { argv } = require('process');

//Check if two arguments are passed and they are Integers
if( argv.length === 4){
  const x = argv[2];
  const y = argv[3];
  if((x % 1 === 0) && (y % 1 === 0) && (x > y) && (y !== 0)){
    const quotient = Math.floor(x / y);
    const remainder = x % y;
    console.log(`résultat: ${quotient}`);
    console.log(`reste: ${remainder}`);
  } else {
    console.log('erreur');
  }
} else {
  console.log('erreur.');
}
