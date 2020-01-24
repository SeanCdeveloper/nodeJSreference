/* Looping Through Array with for-of Loop */

// 1. Using arrays
const songs = ['Bad Guy', 'Old Town Road', '7 Rings'];

for (const value of songs) {
  console.log(value);
}
// Bad Guy
// Old Town Road
// 7 Rings

/* Using for-of Loop to iterate over map() Method created Array */

const songs = new Map([['Bad Guy', 1], 
['Old Town Road', 2]]);

for (const [key, value] of songs) {
  console.log(`${key}'s chart position is ${value}`);
}

