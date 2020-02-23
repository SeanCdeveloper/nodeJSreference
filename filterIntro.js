// var filter = function(arr, cb) {
//     var result = [];
//     for (var index = 0; index < arr.length; index++) {
//       var currentElement = arr[index];
//       if (cb(currentElement, index)) {
//         result.push(currentElement);
//       }
//     }
//     return result;
//   };
  
//   var evenNumbers = filter(numbers, function(currentElement) {
//     return currentElement % 2 === 0;
//   });
  
//   // Prints `[ 2, 4, 6, 8, 10 ]`
//   console.log(evenNumbers);

  
//   const moviePatrons = [
//   { name: "Tom", age: 16 },
//   { name: "Ashley", age: 31 },
//   { name: "Sarah", age: 18 },
//   { name: "Alvin", age: 22 },
//   { name: "Cherie", age: 14 },
//   { name: "Malcolm", age: 15 }
// ];


// //Filter returns a new array containing only elements whose callback returns a truthy value

// const canWatchRatedR = moviePatrons.filter(function(patron) {
//   return patron.age > 17;
// });
// console.log(canWatchRatedR);
// const canWatchRatedR = moviePatrons.filter(patron => patron > 17);

// var numbers = [1,2,3,4,5,6,7];

// var result = numbers.filter(number => number > 5);
// console.log(result);

// var words = ["hi", "hello", "hey", "apple", "watermelon", 
//              "lemon", "javascript"]; 

// var result = words.filter(word => word.length > 5);

// console.log(result);


// Filter Method + Object 


var jsonarr = [ 
  { 
      id: 1, 
      name: "joe"
  }, 
  { 
      id: -19, 
      name: "john"
  }, 
  { 
      id: 20, 
      name: "james"
  }, 
  { 
      id: 25, 
      name: "jack"
  }, 
  { 
      id: -10, 
      name: "joseph"
  }, 
  { 
      id: "not a number", 
      name: "jimmy"
  }, 
  { 
      id: null, 
      name: "jeff"
  }, 
] 

var result = jsonarr.filter(user => user.id > 0); 

console.log(result); 