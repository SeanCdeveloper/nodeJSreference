// without rest

// function add(x, y) {
//   return x + y;
// }
// console.log(add(1, 2, 3, 4, 5)); // => 3

//1. rest
// function add(...nums) {
//   let sum = 0;
//   for (let num of nums) sum += num;
//   return sum;
// }
// // add console.log to see display in Command-Line 
// console.log(add(1)); // => 1
// console.log(add(3, 3)); // => 6
// console.log(add((1, 1, 4, 5))); // => 11

/* ...nums is key part of code. */

// 2. 
// function howManyArgs(...args) {
//     return `You passed ${args.length} arguments.`; // point out the template literal
//   }
  
//   console.log(howManyArgs(0, 1)); // You have passed 2 arguments.
//   // // Adding another number to Arguments: console.log(howmanyArgs(0, 1, 2)); = // You have passed 3 arguments.
//   console.log(howManyArgs("argument!", null, ["one", 2, "three"], 4)); // You have passed 4 arguments.
  
  // 3. spread

  // Putting an array inside an array is what spread operator is good for. 
  //"... dragons" inside the weapons Array adds the dragons Index Elements 
  //to weapons Array.
    
 // ... = "rest" + "spread" Operator.

  const dragons = ["Drogon", "Viserion", "Rhaegal"];
  const weapons = ["dragonglass", ...dragons, "wildfire"]; // notice the spread operator ...dragons
  
  console.log(weapons); // prints ["dragonglass", "Drogon", "Viserion", "Rhaegal", "wildfire"]
  
 
  
  