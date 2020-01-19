const arya = {
    first: "Arya",
    last: "Stark",
    origin: "Winterfell",
    allegiance: "House Stark"
  };
  
  const greeting = `My name is ${arya.first}!
  I am loyal to ${arya.allegiance}.`;
  
  console.log(greeting); // prints
  // My name is Arya!
  // I am loyal to House Stark.
  
  console.log(`My name is ${arya.first}`);
  //Getting variables into JavaScript can be tough without template Strings.  
  // breaks are respected inside template strings.

  