const usersInfo = [{name: 'Marcus', city: 'Lviv', phone: '+380666666666'}, 
{name: 'Bogdan', city: 'Kyiv', phone: '+380555555555'}, 
{name: 'Artem', city: 'Poltava', phone: '+380444444444'}];

findPhoneByNumber = (name) => {
    for (let i = 0; i < usersInfo.length; i++) {
        if (name === usersInfo[i].name) {
            return usersInfo[i].phone
        };
    };
    return ("Таке ім'я не знайдено.");
};

console.log(findPhoneByNumber('Marcus'));