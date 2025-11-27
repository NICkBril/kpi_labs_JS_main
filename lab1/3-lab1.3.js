const myArray = [1, 10, 'hello', true, true, null, false, 0, 10, 'abc', 'KPI', 100, undefined, 1234, undefined, 'JS', null, {el11: 10, el12: 20}];

const typesList = {
    number: 0,
    string: 0,
    boolean: 0, 
    undefined: 0,
    object: 0
};

for (const element of myArray) {
    const type = typeof element;
    typesList[type]++
};

console.log(typesList);

