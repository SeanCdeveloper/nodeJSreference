var pilots = [
    {
      id: 10,
      name: "Poe Dameron",
      years: 14,
    },
    {
      id: 2,
      name: "Temmin 'Snap' Wexley",
      years: 30,
    },
    {
      id: 41,
      name: "Tallissan Lintra",
      years: 16,
    },
    {
      id: 99,
      name: "Ello Asty",
      years: 22,
    }
  ];

  /* Finding the total years of experience */

  const totalYears = pilots.reduce((acc, pilot) => acc + pilot.years, 0);

  // The starting value is set at 0. 

  console.log(totalYears);

  /* Finding the most experienced pilot */

//   var mostExpPilot = pilots.reduce((oldest,pilot) => {
//       return (oldest.years || 0) > pilot.years ? oldest : pilot;   
//   }, {});

//   console.log(mostExpPilot);

