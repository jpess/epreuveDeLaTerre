/**
* 24 to 12
*/

/*
* Write a program that format a 24-hour time to a 12-hour time
*/

//We will skip argment error handling

const {argv} = require('process');

//Retrieve argv[2] as a String
const time24h = argv[2];

//Split it to extract hours from minutes
const time24Split = time24h.split(":");
let hours24 = time24Split[0];
const minutes24 = time24Split[1];
//Define time period
let hoursNumber = Number(hours24); //explicitally format into Number (optionnal)
const period = (hoursNumber >= 12)?'PM':'AM';

//We use modulo 12 to get hours between 0 and 11, with a specific check on 00 and 12
switch (hours24) {
  case '00':
  case '0':
    hours24 = '00';
    break;
  case '12':
    hours24 = '12';
    break;
  default:
    hours24 = hours24 % 12;
}

//Format hours concatenate with minutes and 'AM' or 'PM' accordingly
const hours12 = hours24+':'+minutes24+period;

//Display the result
console.log(hours12);
