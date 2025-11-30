"use strict";

function difference(array1, array2) {
    let result = [];

    for (let i = 0; i < array1.length; i++) {
        let item = array1[i];

        if (array2.indexOf(item) === -1) {
            result.push(item);
        }
    }

    return result;
}

const array1 = [7, -2, 10, 5, 0];
const array2 = [0, 10];
const result = difference(array1, array2);
console.log(result);