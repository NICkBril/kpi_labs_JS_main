const inc = (obj) => {
    obj.n = obj.n + 1;
    return obj.n;
};

const myObj = { n: 5 };

inc(myObj);

console.dir({ myObj });