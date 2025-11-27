const average = (a, b) => {
    result1 = (a + b) / 2;
    return result1;
};

const square = (x) =>  x ** 2;

const cube = (x) => x ** 3;

const calculate = () => {
    let calcArray = [];

    for (let i = 0; i <= 9; i++){
        calcArray.push(average(square(i), cube(i)));
    }
    return calcArray;
};

console.log(calculate());