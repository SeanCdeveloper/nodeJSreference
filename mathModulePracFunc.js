module.exports = {
    sum: function sum(x, y) {
        return x + y;
    },
    difference: function difference(x, y) {
        return x - y;
    },
    product: function product (x, y) {
        return x * y;
    },
    quotient: function quotient (x, y) {
        return x / y;
    }
};

/* Exporting the Functions Directly

function sum(x, y){
    return x + y;
  };
  
   function difference(x, y){
    return x - y;
  };
  
   function product(x, y){
    return x * y;
  };
  
   function quotient(x, y){
    return x / y;
  };
  
  exports.sum = sum;
  exports.difference = difference;
  exports.product = product;
  exports.quotient = quotient;
  */
  