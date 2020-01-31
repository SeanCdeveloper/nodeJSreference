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