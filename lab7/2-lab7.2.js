"use strict";

function removeElements(array) {
    for (let i = 1; i < arguments.length; i++) {
        let item = arguments[i];
        let index = array.indexOf(item);
        if (index >= 0) {
            array.splice(index, 1);
        }
    }
}


const array = [1, 2, 3, 4, 5, 6, 7];
removeElements(array, 5, 1, 6);
console.log(array);