"use strict";

function removeElement(array, item) {
    let index = array.indexOf(item);
    if (index >= 0) {
        array.splice(index, 1);
    }
}


const array = ['Kiev', 'Beijing', 'Lima', 'Saratov'];
removeElement(array, 'Lima');
removeElement(array, 'Berlin');
console.log(array);