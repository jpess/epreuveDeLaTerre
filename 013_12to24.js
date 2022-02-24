/**
* 12 to 24
*/

/*
* Write a program that format a 12-hour time to a 24-hour time
*/

//We will skip argment error handling
//We suppose that the format is respected : leading 0 for hours before 10 (e.g., 09:05)

const {argv} = require('process');

//Retrieve argv[2] as a String
const time24h = argv[2];

//Split it to extract hours from minutes
const time24Split = time24h.split(":");
let hours24 = time24Split[0];
const minutes24 = time24Split[1];
