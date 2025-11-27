const phoneList = {
    Marcus: '+380666666666',
    Bogdan: '380555555555',
    Artem: '380444444444'
};

const findPhoneByNumber = (name) => {
    for (const key in phoneList) {
        if (key === name) {
            return phoneList[key];
        };
    };
    return ("Таке ім'я не знайдено.");
};

console.log(findPhoneByNumber('Marcus'));

