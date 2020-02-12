var pilots = [
    {
      id: 2,
      name: "Wedge Antilles",
      faction: "Rebels",
    },
    {
      id: 8,
      name: "Ciena Ree",
      faction: "Empire",
    },
    {
      id: 40,
      name: "Iden Versio",
      faction: "Empire",
    },
    {
      id: 66,
      name: "Thane Kyrell",
      faction: "Rebels",
    }
  ];

// Splitting up Data into Rebels + Non Rebels

const rebels = pilots.filter(pilot => pilot.faction === "Rebels");
const empire = pilots.filter(pilot => pilot.faction === "Empire");

console.log(rebels);
console.log(empire);

// If the callback function returns 'true', the Element will be in 
// the resulting array. 


/* Noting the difference between map() and filter() 
var pilots = [
    {
      id: 2,
      name: "Wedge Antilles",
      faction: "Rebels",
    },
    {
      id: 8,
      name: "Ciena Ree",
      faction: "Empire",
    },
    {
      id: 40,
      name: "Iden Versio",
      faction: "Empire",
    },
    {
      id: 66,
      //name: "Thane Kyrell",
      faction: "Rebels",
    }
  ];

*/
// const name1 = pilots.filter(pilot => pilot.name);
// const name2 = pilots.map(pilot => pilot.name);
// console.log("filter: ", name1);
// console.log("map: ", name2);

  