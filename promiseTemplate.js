const fs = require("fs");

function readFileAsync(path, encoding) {
  return new Promise(function(resolve, reject) {
    fs.readFile(path, encoding, function(err, data) {
      if (err) {
        return reject(err);
      }

      resolve(data);
    });
  });
}

readFileAsync("example.txt", "utf8")
  .then(function(data) {
    console.log(data);
  })
  .catch(function(err) {
    console.log(err);
  });

/*
 We want to use a "promise", with "then" method to handle the operation.

Anything with then() method has a "promise". 

The "new Promise" works because of the then() Method. */


/* Arrow Function Re-Factoring */

/*
function readFileAsync(path, encoding) => {
    // constructor for new promise, below.  Gives a new 
    return new Promise(function(resolve, reject) => {
    // what's inside resolve() is available to the .then() Method.
        fs.readFile(path, encoding, function(err, data) => {
          if (err) {
            return reject(err);
          }
    
          resolve(data);
        });
      });
  

      readFileAsync("example.txt", "utf8")
    .then(function(data) {
      console.log(data);
    })
    .catch(function(err) {
      console.log(err);
    });
    }
  
*/

/* 

We want to use a "promise", with "then" method to handle the operation.
Anything with then() method has a "promise". 
The "new Promise" works because of the then() Method. 

*/