/**
* Trouver la Suisse
*/

/*
* Write a program that displays the middle value among 3 values in arguments
*/

//Retrieve argv
const {argv} = require('process');

//Check if 3 argv have been passed
if(argv.length !== 5){
  console.log("Veuillez entrer trois et seulement trois entiers.");
} else if(isNaN(argv[2]) || isNaN(argv[3] || isNaN(argv[4]))){
  console.log("Veuillez entrer trois nombres.");
} else if(!Number.isInteger(Number(argv[2])) || !Number.isInteger(Number(argv[3])) || !Number.isInteger(Number(argv[4]))){
  console.log("Veuillez entrer des nombres entiers.");
} else if(argv[2] === argv[3] || argv[2] === argv[4] || argv[3] === argv[4]){
  console.log("erreur.");
} else {
  //Compare numbers and find the middle one
  let first = argv[2];
  let second = argv[3];
  let third = argv[4];
  if(second>first){
    if(second<third){
      console.log(second);
    } else if(third>first){
      console.log(third);
    } else {
      console.log(first);
    }
  } else {
    if(second>third){
      console.log(second);
    } else if(third>first){
      console.log(first);
    } else {
      console.log(third);
    }
  }
}
//An optimal solution would be to insert value into a sorted array and get the middle index value at the end, but for 3 numbers this solution seems acceptable
