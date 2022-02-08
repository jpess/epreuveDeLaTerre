/**
* Puissance d'un nombre
*/

/*
* Write a program that displays the result argument 1 to the power argument 2
*/
const { argv } = require('process');

if( argv.lenght !== 4){
  console.log("Veuillez entrer 2 arguments.");
} else if( isNaN(argv[2] || isNaN(argv[3]))){
  console.log("Veuillez entrer 2 nombres.");
} else {
  let result = 1;
  for(let i = 0; i < argv[3]; i++){
    result *= argv[2];
  }
  console.log(result);
  //We can also use Math.pow(argv[2], argv[3]);
}
