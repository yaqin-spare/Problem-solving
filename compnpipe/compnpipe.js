//compose(f, g)(x) = f(g(x))
function compose(...funcs) {
  return function(initialValue) {
    return funcs.reduceRight((acc, fn) => fn(acc), initialValue);
  };
}


//  pipe(f, g)(x) = g(f(x)) 
function pipe(...funcs) {
  return function(initialValue) {
    return funcs.reduce((acc, fn) => fn(acc), initialValue);
  };
}
// its about thinking in compositions of funcationa as an maths functions but here i do it in programming way
// compose
var greet = function(name){ return 'hello ' + name; };
var exclaim = function(statement){ return statement.toUpperCase() + '!'; };
var welcome = compose(exclaim, greet);
console.log(welcome('phillip')); 

// pipe
var add2 = function(number){ return number + 2; };
var multiplyBy3 = function(number){ return number * 3; };
var addAndMultiply = pipe(add2, multiplyBy3);
console.log(addAndMultiply(5)); 

var addAndMultiplyTwice = pipe(add2, multiplyBy3, multiplyBy3);
console.log(addAndMultiplyTwice(5)); 
