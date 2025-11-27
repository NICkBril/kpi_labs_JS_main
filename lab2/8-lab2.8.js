const createUser = (name, city) => {
    const userInfo = {name, city};
    return userInfo;
};

console.log(createUser('Mykola', 'Kyiv'));