/* (1) Binding De-Structured Variables To Properties of an Object */

// let robotA = { name: "Bender" };
// let robotB = { name: "Flexo" };

// console.log(robotA);
// console.log(robotB);

// var {name: nameA} = robotA;  // displays: {name: 'Bender'}
// var {name: nameB} = robotB;  // displays: {name: 'Flexo'}

// // The "nameA" and "nameB" variables are interpolators and can be named anything; they are just there to contain the values of the Property */

// console.log(nameA);  // displays: Bender
// console.log(nameB);  // displays: Flexo

/* (2) When Property and Variable names are same, you can quickly modify them. */
/* Assigning Variables to Object and then Traversing */

// var {foo,bar} = {foo:"lorem", bar: "ipsum"};

// console.log(foo);
// console.log(bar);

/* (3) Gettting Values From Nested Object Destructuring */

// var complicatedObj = {
//     arrayProp: [
//         "Object", 
//         { second: "Joined"}
//     ]
// }

// var {arrayProp: [first, {second}]} = complicatedObj;

// console.log(first);
// // displays: "Object";
// console.log(second);
// // displays: "Joined";





