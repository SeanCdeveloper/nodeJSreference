var filter = function(arr, cb) {
    var result = [];
    for (var index = 0; index < arr.length; index++) {
      var currentElement = arr[index];
      if (cb(currentElement, index)) {
        result.push(currentElement);
      }
    }
    return result;
  };
  
  var evenNumbers = filter(numbers, function(currentElement) {
    return currentElement % 2 === 0;
  });
  
  // Prints `[ 2, 4, 6, 8, 10 ]`
  console.log(evenNumbers);

  /*
  const moviePatrons = [
  { name: "Tom", age: 16 },
  { name: "Ashley", age: 31 },
  { name: "Sarah", age: 18 },
  { name: "Alvin", age: 22 },
  { name: "Cherie", age: 14 },
  { name: "Malcolm", age: 15 }
];
  // 2.

// Filter returns a new array containing only elements whose callback returns a truthy value

const canWatchRatedR = moviePatrons.filter(function(patron) {
  return patron.age > 17;
});

console.log(canWatchRatedR);

*/