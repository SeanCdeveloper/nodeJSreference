var map = (arr, cb) => {
    var result = [];
    for (var index = 0; index < arr.length; index++) {
      var currentElement = arr[index];
      result.push(cb(currentElement, index));
    }
    return result;
  };
  
  var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  
  var doubled = map(numbers, function(element) {
    return element * 2;
  });
  
  // Prints `[ 2, 4, 6, 8, 10, 12, 14, 16, 18, 20 ]`
  console.log(doubled);

  /*

  const moviePatrons = [
  { name: "Tom", age: 16 },
  { name: "Ashley", age: 31 },
  { name: "Sarah", age: 18 },
  { name: "Alvin", age: 22 },
  { name: "Cherie", age: 14 },
  { name: "Malcolm", age: 15 }
];

  const cardedMoviePatrons = moviePatrons.map(patron => {
  if (patron.age >= 17) {
    patron.canWatchRatedR = true;
  } else {
    patron.canWatchRatedR = false;
  }
  return patron;
});

console.log("Carded Movie Patrons: ");
console.log(cardedMoviePatrons);
*/