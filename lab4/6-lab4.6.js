"use strict";

function max(array) {
  let maxValue = 0;
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array[i].length; j++) {
      if (array[i][j] > maxValue) {
        maxValue = array[i][j];
      }
    }
  }
  return maxValue;
}

const m = max([[1, 2, 3], [4, 5, 6], [7, 8, 9]]);
console.log(m);