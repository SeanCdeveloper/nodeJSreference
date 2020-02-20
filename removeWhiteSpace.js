/*  Write a function that takes in a string and returns the string with white space removed 
and all letters changed to lowercase. 
This is a common task when a variable, routeName, etc needs to be created from user input */

/*
Input: Tammer Galal
Output: tammergalal
Input:    favorite tree    ever
Output: favoritetreeever
Input: one word
Output: oneword
*/

// noWhtSp("Tammer Galal");
// function noWhtSp(string) {
//     let str = string;
//     str = str.replace(/\s+/g,'').toLowerCase();
//     console.log(str);
// }

let noWhtSp = (string) => {let str=string; str=str.replace(/\s+/g,'').toLowerCase(); console.log(str)};
noWhtSp("Tamar Galal");
