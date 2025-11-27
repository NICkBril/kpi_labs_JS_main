const ipToNumber = (ip = '127.0.0.1') => {
    return ip
        .split('.')
        .map(Number)
        .reduce((acc, byte) => (acc << 8) + byte, 0)
};

console.log(ipToNumber('10.0.0.1'));