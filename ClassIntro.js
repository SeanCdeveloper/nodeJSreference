// The class is having a Method added to it.  

class Shape {
    // Just like constructor functions, classes can accept arguments
    // constructor, below, is used to add new function to the "Class" above. 
    constructor(area, perimeter) {
      this.area = area;
      this.perimeter = perimeter;
    }
  
    printInfo() {
      console.log(`Area: ${this.area}`);
      console.log(`Perimeter: ${this.perimeter}`);
    }
  }
  
  const shape = new Shape(25, 25);
  
  shape.printInfo();
  
  // "Class" refers to making a model of someting, like a car, in JavaScript OOP language. 
  