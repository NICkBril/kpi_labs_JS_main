const inc = (n) => {
    n = n + 1;
    return n;
}

const a = 5;
const b = inc(a);

console.dir({a, b});