const rangeOdd = (start, end) => {
    let myArray = [];

    if (start % 2 === 0) {
        console.log("Ви ввели парне перше число, тому починаємо з наступного непарного.");
        start += 1;
    }

    for (let i = start; i <= end; i += 2){
        myArray.push(i);
    }
    return myArray;
};   

console.log(rangeOdd(16, 30));