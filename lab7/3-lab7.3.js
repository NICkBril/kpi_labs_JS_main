"use strict";

function unique(array) {
    let result = [];

    for (let i = 0; i < array.length; i++) {
        let item = array[i];

        if (result.indexOf(item) === -1) {
            result.push(item);
        }
    }

    return result;
}


const result = unique([2, 1, 1, 3, 2]);
console.log(result);