// These variables are used in modularztionIntro2.js.

var pie = "apple";

var predictable = function(){
  return 1;
}

module.exports = {
  pie: pie,
  predictable: predictable
};

// module.exports is an object we use to store variables or methods.  It prepares an Object for use somewhere else.  
// Only the Object gets exported - not the entire File. 

// You can use more than one module per file.

//If you imported multiple modules in, you would then combine and put them in one export.  
// You can require multiple modules as needed in certain files.

// Adding a Second Object:

var dog = {
    "voice": "bark",
    "legs": 4
  }
  
  module.exports = {
    pie: pie, 
    predictable: predictable,
    dog: dog
  };

