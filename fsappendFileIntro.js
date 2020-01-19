
var fs = require("fs");
/*
fs.appendFile("logApp.txt", process.argv[2], function(error) {
   
    if (error) throw error;
    console.log("Saved");
    
   /*
   if (error) {
       console.log(error);
   }
   console.log("Saved");
   
});
*/

// Appending text on a new line 
fs.appendFile("log.txt", process.argv[2] + "\n", function (error) {
    if (error) {
        console.log(error);
    }
    console.log("Saved!!!");
});


