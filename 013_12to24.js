/**
* 12 to 24
*/

/*
* Write a program that format a 12-hour time to a 24-hour time
*/

//We will skip argument error handling, and we suppose the time format is respected (no 12:30AM, nor 24:20PM)

const {argv} = require('process');

//Retrieve argv[2] as a String
const time12h = argv[2];

//Split it to extract hours from minutes and period (11:40PM)
const period = time12h.substr(time12h.length - 2);
const time12Split = time12h.substr(0, time12h.length - 2).split(":");
let hours12 = time12Split[0];
const minutes12 = time12Split[1];

//Check special values
switch (hours12) {
  case '0':
  case '00':
    hours12 = '00';
    break;
  case '12':
    hours12 = '12';
    break;
  default:
    if(period === "AM"){
      //hours12 don't need to be formatted
    } else if(period === "PM"){
      //Add 12 to hours12, then mod 24
      hours12 = (Number(hours12) + 12) % 24;
    } else {
      console.log("Erreur de format..");
    }
}

//Display formatted result
const result = hours12+":"+minutes12;
console.log(result);
