var math = require('./mathModulePracFunc');

// capturing the operation used
var operation = process.argv[2];

// capturing the first number
var numOne = parseInt(process.argv[3]);

// capturing the second number 
var numTwo = parseInt(process.argv[4]);

switch(operation) {
  case 'sum':
    console.log(math.sum(numOne, numTwo));
    break;
  case 'difference':
    console.log(math.difference(numOne, numTwo));
    break;
  case 'product':
    console.log(math.product(numOne, numTwo));
    break;
  case 'quotient':
    console.log(math.quotient(numOne, numTwo));
    break;
  default:
    console.log("Invalid operation, please try again.")
}


