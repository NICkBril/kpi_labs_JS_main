"use strict";

function contract(fn, ...types) {
    return function(...args) {
        for (let i = 0; i < args.length; i++) {
            if (typeof args[i] !== types[i].name.toLowerCase()) {
                throw new TypeError(`Argument ${i} must be ${types[i].name}`);
            }
        }

        const result = fn(...args);

        const expectedResultType = types[types.length - 1].name.toLowerCase();
        if (typeof result !== expectedResultType) {
            throw new TypeError(`Result must be ${types[types.length - 1].name}`);
        }

        return result;
    }
}


const add = (a, b) => a + b;
const addNumbers = contract(add, Number, Number, Number);
const res = addNumbers(2, 3);
console.dir(res);