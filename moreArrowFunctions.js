// let sum = (a,b) => {return a + b};

// console.log(sum(3,4));

// let isPositive = number => number >= 0;

// console.log(isPositive(1));

// let randomNUmber = () => Math.random;

// console.log(randomNumber());

// document.addEventListener('click', function() {
//     console.log("click");
// });

// document.on("click", function() {
//     conssole.log("click");
// });

// document.addEventListener("click", () => console.log("click"));

class Person {
    constructor(name) {
        this.name = name;
    }
    printNameArrow() {
        setTimeout(() => {
            console.log('Arrow: ' + this.name);
        }, 100);
    }
    printNameFunction() {
        setTimeout(function() {
            console.log("Function: " + this.name);
    }, 100)
}
}

let person = new Person("Captain Anonymous");
person.printNameArrow();
person.printNameFunction();
console.log(this.name); // displays undefined




