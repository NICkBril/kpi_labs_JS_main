"use strict";

const pipe = (...funcs) => {
  for (let i = 0; i < funcs.length; i++) {
    if (typeof funcs[i] !== 'function') {
      console.log('All arguments must be functions. ', funcs[i], '<- not a function');
      return;
    }
  }

  return function(x) {
    let val = x;
    for (let i = 0; i < funcs.length; i++) {
      val = funcs[i](val);
    }
    return val;
  };
};


const inc = x => x + 1;
const twice = x => x * 2;
const cube = x => x ** 3;

const f1 = pipe(inc, twice, cube);
console.log(f1(5));

const f2 = pipe(inc, inc);
console.log(f2(7));

const f3 = pipe(inc, 7, cube); // error