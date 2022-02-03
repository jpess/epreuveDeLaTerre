/**
* L'Alphabet
*/

/*
* Write a program that displays the alphabet in lowercase with a line break.
*/

// Array of alphabet letters
const alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','x','y','z'];

// For each letter in alphabet array, concatenate the letter to the variable result.
let result = '';
for (let i = 0; i < alphabet.length; i++) {
  result += alphabet[i];
}

// Display result wih a line break
console.log(result + "\n");
