const moviePatrons = [
    { name: "Tom", age: 16 },
    { name: "Ashley", age: 31 },
    { name: "Sarah", age: 18 },
    { name: "Alvin", age: 22 },
    { name: "Cherie", age: 14 },
    { name: "Malcolm", age: 15 }
  ];
  
  // 1.
  
  // forEach is a functional way of iterating through an array without a for-loop
  
  moviePatrons.forEach(patron => console.log(patron.age));

  moviePatrons.forEach(patron => console.log(patron.name));

