/**
* Trié ou pas
*/

/*
* Write a program that tells if an integer list is sorted or not
*/

const {argv} = require('process');

//Check if at least 2 arguments are passed
if(argv.length < 4){
  //console.log("Veuillez entrer une liste d'entiers");
  console.log("erreur.");
} else {
  let result = "Triée !"; //default value
  for(let i=2; i<argv.length-1; i++){
    let num = Number(argv[i]); //current number
    let numSucc = Number(argv[i+1]);//next number
    //if not integers, end the script and display "erreur"
    if(!Number.isInteger(num) || !Number.isInteger(numSucc)){
      result = "erreur.";
      break;
    } else {
      //if next number < current number, the list is not sorted, result is updated to "Pas triée !"
      if(num > numSucc){
        result = "Pas triée !";
        //we could break; here and display result but if there is a Non integer further in the list the script won't return an error.
      }
    }
  }
  console.log(result);
}
