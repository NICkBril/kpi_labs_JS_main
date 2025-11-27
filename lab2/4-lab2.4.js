const range = (start, end) => {
    let myArray = [];

    for (let i = start; i <= end; i++){
        myArray.push(i);
    }
    return myArray;
};   

console.log(range(15, 30));