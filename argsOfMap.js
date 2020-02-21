/* Examining first argument (value) */

// const existingArray = ["decode", "dom", "javascript"];

// const newArray = existingArray.map(function (value) {
//     return value + "!";
// });

// console.log(newArray);


/* Examining Second Argument (index) + Third argument (array) */

// const existingArray = ["decode", "dom", "javascript"];

// const newArray = existingArray.map(function (value, index, array) {
//     console.log(array);
//     return index + ": " + value + "!";
// });

// console.log(newArray);

/* Examining "this" argument */
const existingArray = ["decode", "dom", "javascript"];
const newArray = existingArray.map(function (value, index, array) {
    //console.log(array);
    console.log(this);
    console.log(this.age);
    console.log(this.name);
    return index + ": " + value + "!" + ` ${this.name}` + "|" + ` ${this.age}`;
}, 
{
    name: "Captain Anonymous",
    age: 1000
});

console.log(newArray);

/* Code Above Without Comments */

// const existingArray = ["decode", "dom", "javascript"];
// const newArray = existingArray.map(function (value, index, array) {
//     return index + ": " + value + "!" + ` ${this.name}` + "|" + ` ${this.age}`;
// }, {
//     name: "Captain Anonymous",
//     age: 1000
// });

// console.log(newArray);



