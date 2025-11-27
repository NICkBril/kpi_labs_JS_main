"use strict";

function seq(...args) {
  const step = [...args];

  function stepAdd(arg) {
    if (typeof arg === "number") {
      return step.reduceRight((value, fn) => fn(value), arg);
    }
    step.push(arg);
    return stepAdd;
  }

  return stepAdd;
}

console.log(seq((x) => x + 7)((x) => x * 2)(5));
console.log(seq((x) => x * 2)((x) => x + 7)(5));
console.log(seq((x) => x + 1)((x) => x * 2)((x) => x / 3)((x) => x - 4)(7));