function addition(...nums) {
    const array = nums;
    return array.reduce((a, b) => a + b, 0); 
    
  }
  console.log(addition(1, 2, 3)); // 6

// reduce adds everything in the array into one item.  a is the value; b is thing to which we are adding. 

// reduce is an accumulator method.  add to the current running total the current element in the index while running through Array. 

// a is the accumulator. b is the index.  
