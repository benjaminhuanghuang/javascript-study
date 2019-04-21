/*
  A symbol is a unique and immutable data type that is often used to identify object properties.
  To create a symbol, you write Symbol() with an optional string as its description.

*/
var sym1 = Symbol();
var sym2 = Symbol("foo");
var sym3 = Symbol("foo");

Symbol("foo") === Symbol("foo"); // false


const bowl = {
  [Symbol('apple')]: { color: 'red', weight: 136.078 },
  [Symbol('banana')]: { color: 'yellow', weight: 183.15 },
  [Symbol('orange')]: { color: 'orange', weight: 170.097 },
  [Symbol('banana')]: { color: 'yellow', weight: 176.845 }
};
console.log(bowl);
/*
  Object {Symbol(apple): Object, Symbol(banana): Object, Symbol(orange): Object, Symbol(banana): Object}

  By changing the bowl’s properties to use symbols, each property is a unique Symbol and the first banana doesn’t 
  get overwritten by the second banana.
*/