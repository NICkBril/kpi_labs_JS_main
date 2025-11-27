"use strict";

function sum(...args) {
  return args.reduce((value, element) => value + element, 0);
}


console.log(sum(1, 2, 3));
console.log(sum(0));
console.log(sum());
console.log(sum(1, -1, 1));
console.log(sum(10, -1, -1, -1));