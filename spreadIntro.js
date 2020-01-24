// 1. spread

  // Putting an array inside an array is what spread operator is good for. 
  //"... dragons" inside the weapons Array adds the dragons Index Elements 
  //to weapons Array.
    
 // ... = "rest" + "spread" Operator.

//  const dragons = ["Drogon", "Viserion", "Rhaegal"];
//  const weapons = ["dragonglass", ...dragons, "wildfire"]; // notice the spread operator ...dragons
 
//  console.log(weapons); // prints ["dragonglass", "Drogon", "Viserion", "Rhaegal", "wildfire"]

 //2. Copy the songs array into another array using spread and console.log what it returns.
 
// const songs = ["Creep", "Everlong", "Bulls On Parade", "Song 2", "What I Got"];
// const combinedSong = [ ...songs];
 
// console.log(combinedSong);

// ...songs brings all the songs into combinedSong Array. 

function addition(...nums) {
  const array = nums;
  return array.reduce((a, b) => a + b, 0); 
  
}
console.log(addition(1, 2, 3)); // 6