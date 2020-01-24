const fs = require("fs");

fs.readFile("animals.json", "utf8", function(err, data) {
  if (err) {
    throw err;
  }
  // Parse the JSON string to an object
  const animalJSON = JSON.parse(data);
  // Create two new arrays to contain the cats and dogs objects
  const dogs = [];
  const cats = [];
  // For each element in animal
  animalJSON.forEach(function(animal) {
    if (animal.species === "dog") {
      dogs.push(animal);
    } else if (animal.species === "cat") {
      cats.push(animal);
    }
    /*   Ternary Operator: Second Option for if statement above: 
    animal.species === "cat" ? cats.push(animal) : dogs.push(animal);*/
  });

  // Turn the arrays into JSON strings so they can be written to files
  const dogJSON = JSON.stringify(dogs, null, 2);
  const catJSON = JSON.stringify(cats, null, 2);

  fs.writeFile("dogs.json", dogJSON, function(err) {
    if (err) {
      throw err;
    }
    console.log("Successfully wrote to dogs.json file");
  });

  fs.writeFile("cats.json", catJSON, function(err) {
    if (err) {
      throw err;
    }
    console.log("Successfully wrote to cats.json file");
  });
});

/* Object Being Parsed

[
    {
      "name": "Mittens",
      "species": "cat",
      "age": 12,
      "gender": "F"
    },
    {
      "name": "Fido",
      "species": "dog",
      "age": 2,
      "gender": "M"
    },
    {
      "name": "Wally",
      "species": "dog",
      "age": 6,
      "gender": "M"
    },
    {
      "name": "Sasha",
      "species": "cat",
      "age": 8,
      "gender": "F"
    },
    {
      "name": "Penny",
      "species": "dog",
      "age": 1,
      "gender": "F"
    },
    {
      "name": "Bandit",
      "species": "dog",
      "age": 7,
      "gender": "M"
    },
    {
      "name": "Bella",
      "species": "cat",
      "age": 3,
      "gender": "F"
    },
    {
      "name": "Frank",
      "species": "cat",
      "age": 10,
      "gender": "M"
    },
    {
      "name": "Bailey",
      "species": "cat",
      "age": 1,
      "gender": "F"
    },
    {
      "name": "Loki",
      "species": "dog",
      "age": 5,
      "gender": "M"
    }
  ]
*/

/* Instructions:
# Callback Review

In this activity you will write code to read a file containing a list of dogs and cats, and write two new files to separate dog and cat entries.

## Instructions

// loop through animals.json and check the "species" property.  If dog, push to dog array; if cat, push to cat array.  Use "forEach". 

// Implement Writing a file 

* Open the `Unsolved/index.js` file and take a moment to examine the provided code:

  * The `fs.readFile` method is being used to read the `animals.json` file.

  * Since the JSON data retrieved using `fs.readFile` is a string, we're calling `JSON.parse` to parse the string to a JSON object.

  * We're allocating two empty arrays called `dogs` and `cats`.

* After understanding the provided code, write code to loop through `animalJSON` and for each animal object, check its `species` property. If an animal is a `dog`, push it to the `dogs` array, else push it to the `cats` array.

* After looping through every animal, convert both the `dogs` and `cats` arrays to JSON strings using `JSON.stringify`. Save the stringified versions of the arrays to new variables.

* Then, save the JSON string version of the `dogs` array to a new `dogs.json` file. Print a message after this completes indicating that it was successful.

* Then, save the JSON string version of the `cats` array to a new `cats.json` file. Print a message after this completes indicating that it was successful.

* You can verify that you've successfully completed this activity if after running your code you have a `dogs.json` file containing only dogs and a `cats.json` object containing only cats.
*/