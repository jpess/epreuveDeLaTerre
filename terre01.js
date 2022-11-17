/**
* Nom du Programme
*/

/*
* Write a program that displays its filename as <filename>.<extension>
*
* Doc sources: https://nodejs.org/api/all.html#all_path_pathdirnamepath https://nodejs.org/api/path.html#pathbasenamepath-ext
*/

// The path module provides utilities for working with file and directory paths.
//const path = require('path');
import { argv } from 'node:process';
let splitPath = argv.[1].split("/");
console.log(splitPath.[splitPath.length - 1]);

/*
// __filename contains the absolute file path of the current module.
// console.log(__filename); output is /media/.../.../Epreuve_de_la_Terre/002_nomDuProgramme.js

// path.basename() returns the last portion of a path
const filename = path.basename(__filename);
console.log(filename);
*/
