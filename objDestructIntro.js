// Destructuring is beneficial for extremely long Objects.  You can pick them out quickly with destructuring. 

const arya = {
    name: "Arya Stark",
    parents: ["Eddard Stark", "Catelyn Stark"]
  };
  
  const jaime = {
    name: "Jaime Lannister",
    parents: ["Tywin Lannister", "Joanna Lannister"]
  };
  
  // // In the past, if we wanted to pull off an object's property we'd have to do something like this:
  
  const aryaName = arya.name;
  const aryaParents = arya.parents;
  
  // console.log(aryaName); // prints `"Arya Stark"`
  // console.log(aryaParents); // prints `["Eddard Stark", "Catelyn Stark"]`
  
  // Now with ES6 object destructuring syntax, we can do this:
  
  // Destructuring Below:
  
  // arya Object is = at end but the Object referenced.  
  
  //const { name, parents } = arya;
  
  // // The keys are in the curly brackets in de-structuring form. 
  
  //const { name } = arya;
  
  //console.log(name); // prints `"Jaime Lannister"`
  //console.log(parents); // prints `["Tywin Lannister", "Joanna Lannister"]`
  
  // We can also rename our destructured properties like so:
  
  //const { name: jaimeName } = jaime;
  
  // The key of "name" is being re-defined as "jamieName" here. 
  
  //console.log(jaimeName); // prints `"Jaime Lannister"`
  
  // We can also destructure parameters using the same feature. e.g. previously we might have done something like this:
  
  const logCharacter = character =>
    console.log(
      character.name +
        "'s parents are: " +
        character.parents[0] +
        " and " +
        character.parents[1] +
        "."
    );
  
  logCharacter(arya);
  
  // But now we can do this:
  
  // Named Function Parameters, below:
  
  // Passing the code below, we are noly focused on what's 
  //inside object literal form.  That de-structures the Object.  
  /*
  const betterLogCharacter = ({ name, parents }) =>
    console.log(
      name + "'s parents are: " + parents[0] + " and " + parents[1] + "."
    );
  
  console.log(`${name}'s parents are: ${parents[0]} and ${parents[1]}`);
  
  betterLogCharacter(jaime);
  */
  
  