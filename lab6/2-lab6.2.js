"use strict";

function composeSafe(...fns) {
  const errorHandlers = [];

  for (const fn of fns) {
    if (typeof fn !== 'function') {
      throw new TypeError('All arguments of composeSafe must be functions. ', fn, '<- not a function');
    }
  }

  const composed = function(input) {
    let value = input;

    for (let i = fns.length - 1; i >= 0; i--) {
      try {
        value = fns[i](value);
      } catch (err) {
        for (const handler of errorHandlers) {
          handler(err);
        }
        console.log('Error:', err);
        return undefined;
      }
    }

    return value;
  };

  composed.on = function(event, handler) {
    if (event === 'error' && typeof handler === 'function') {
      errorHandlers.push(handler);
    }
  };

  return composed;
}


const inc = x => x + 1;
const twice = x => x * 2;
const cube = x => x ** 3;

const f1 = composeSafe(inc, twice, cube);
console.log(f1(5));

const f2 = composeSafe(inc, inc);
console.log(f2(7));

const f3 = composeSafe(
  x => { if (x > 3) throw 'Too large number. Change it.'; return x * 2; },
  inc
);

f3.on('error', e => console.log('Error detected:', e));

console.log(f3(1))
console.log(f3(3));

