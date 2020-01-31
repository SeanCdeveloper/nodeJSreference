// This is 3 separate .js files with module.export used.  They have to be separated in separate Files to work. 

/* item.js */

class Item {
    constructor(title, price) {
      this.title = title;
      this.price = price;
    }
  }
  
  module.exports = Item;
  
  // There's an Item Class set, which takes 
  // 2 properties.  

  //////////////////////////////////////////////////////////////////////////

/* order.js */

class Order {
    constructor(item) {
      this.item = item;
  
      // Whatever last id of Order was will be iterated up. 
      Order.lastId++;
      this.id = Order.lastId;
    }
  }
  Order.lastId = 0;
  
  module.exports = Order;
  
  // Order Class takes one property (item);

  //////////////////////////////////////////////////////////////////////////

  const Order = require("./order");
const Item = require("./item");

class Restaurant {
  constructor(name) {
    this.name = name;
    this.orders = [];
    this.revenue = 0;
  }

  takeOrder(order) {
    this.revenue += order.item.price;
    this.orders.push(order);
    console.log(`Added #${order.id} to the queue`);
    this.printRevenue();
  }

  printRevenue() {
    console.log(`${this.name} has made ${this.revenue} so far!`);
  }

  prepareOrders() {
    const prepareInterval = setInterval(() => {
      if (this.orders.length === 0) {
        console.log("Finished cooking all orders!");

        clearInterval(prepareInterval);
      } else {
        const order = this.orders.shift();

        console.log(`#${order.id} has been prepared.`);
      }
    }, 1000);
  }
}

const restaurant = new Restaurant("McJared's");

const items = [
  new Item("Burger", 5.99),
  new Item("Soda", 3.5),
  new Item("Chips", 2.0),
  // Adding new order:
  new Item("Pizza", 2.5)
];

const orders = items.map(item => new Order(item));

orders.forEach(order => restaurant.takeOrder(order));

restaurant.prepareOrders();

// Using multiple classes at same time is important to understand here.

 //////////////////////////////////////////////////////////////////////////

 /* console.log Display */

//  Added #1 to the queue
//  McJared's has made 5.99 so far!
//  Added #2 to the queue
//  McJared's has made 9.49 so far!
//  Added #3 to the queue
//  McJared's has made 11.49 so far!
//  Added #4 to the queue
//  McJared's has made 13.99 so far!
//  #1 has been prepared.
//  #2 has been prepared.
//  #3 has been prepared.
//  #4 has been prepared.
//  Finished cooking all orders!

  
