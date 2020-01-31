// Note: These are two .js files combined.  They need to be separated, 
// and rectangle.js needs to be run in node.js

class Shape {
    constructor(area, perimeter) {
      this.area = area;
      this.perimeter = perimeter;
    }
  
    printInfo() {
      for (var key in this) {
        console.log(`${key}: ${this[key]}`);
      }
    }
  }
  
  module.exports = Shape;

  ////////////////////////////////////////////////////////////////////////////////////

  const Shape = require("./shape");

// note "extends" keyword
// Rectangle is subclassing Shape. 
class Rectangle extends Shape {
  constructor(sideA, sideB) {
    const area = sideA * sideB;
    const perimeter = sideA * 2 + sideB * 2;

    //super() Function takes everything from previous class and adds it.  
  // Rectangle has a sideA + sideB but not "class Shape".    
    super(area, perimeter);
    this.sideA = sideA;
    this.sideB = sideB;
  }
}

const rectangle = new Rectangle(12, 9);
rectangle.printInfo();

// We are taking all the properties of the shape class 
// and bringing it to the Rectangle class

// super() extends a component.  



