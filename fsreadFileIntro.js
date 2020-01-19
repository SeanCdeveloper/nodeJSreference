var fs = require("fs");

fs.readFile("data.csv", "utf8", function(error, data) {

  // first parameter is for the file being read. 
  // second parameter is describing the readable format
  // third parameter is the callback, taking two parameters: error and data.
  
  if (error) {
    return console.log(error);
  }

  console.log(data);
});

//Fs is an internal Node Library
// "require" takes a library and allows its use in node.js

// readFile is a method allowing a file to be read.

// return the contents of 'data.csv' as a string in the variable "data"
// "utf8" encodes the raw buffer data in human-readable format
// readfile() method always includes error and data.