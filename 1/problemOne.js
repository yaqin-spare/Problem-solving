function pow(exponent) {
  return function (num) {
    return Math.pow(num, exponent);
  };
}


const square = pow(2);
const cube = pow(3);

console.log(square(3)); 
console.log(cube(3));   

// install node in order to run the file 
// use: node 1/poblemOne.js  to run the file
//or cd into the folder then run node problemOne.js

