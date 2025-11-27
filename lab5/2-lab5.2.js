"use strict";

function createArray() {
  const data = [];

  return {
    get(index) {
      return data[index];
    },

    push(value) {
      data.push(value);
    },

    pop() {
      return data.pop();
    },

    length() {
      return data.length;
    }
  };
}

const arr = createArray();

arr.push('first');
arr.push('second');
arr.push('third');

console.log(arr.get(0));
console.log(arr.get(1));
console.log(arr.get(2));

console.log(arr.pop());
console.log(arr.pop());
console.log(arr.pop());

console.log(arr.pop());