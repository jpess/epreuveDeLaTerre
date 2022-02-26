/**
* L'Alphabet a partir de
*/

/*
* Write a program that displays alphabet from a letter (lowercase + line break)
*
* Requirement: use a loop
*/

// Array of alphabet letters
const alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

// Retrieve the array of arguments
const { argv } = require('process');
let result = '';

// Test if an argument has been passed (ommit the 2 first __direname and __filename)
if( argv.length > 2){
  let letterIndex = '';
  const letter = argv[2];
  // Retrieve the index of letter by looping alphabet Array
  alphabet.forEach((value, index) => {
    if(letter === value){
      letterIndex = index;
    }
    if(letterIndex !== ''){
      result += value;
    }
  });
  // Test if letterIndex has been found in alphabet Array (otherwise the argument might not be a letter)
  if(letterIndex !== ''){
    console.log(result + "\n");
  } else {
    console.log("Please enter a letter as argument.");
  }
} else {
  console.log("Need a argument");
}
