const pickFnArguments = (object) => {
    let fnArgumentsList = [];

    for (const key in object){
        if (typeof object[key] === 'function'){
            fnArgumentsList.push([key, object[key].length]);
        }
    };
    return fnArgumentsList;
};

const iface = {
  m1: x => [x],
  m2: function (x, y) {
    return [x, y];
  },
  m3(x, y, z) {
    return [x, y, z];
  }
};

console.log(pickFnArguments(iface));