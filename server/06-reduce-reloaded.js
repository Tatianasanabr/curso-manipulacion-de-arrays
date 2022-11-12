//Cuantas veces se repite cada número en mi array, arroja un objeto.
const items = [1, 3, 2, 3, 3, 1, 10];

const rta = items.reduce((obj, item) => {
    if(!obj[item]) {
        obj[item] = 1;
    } else {
        obj[item] = obj[item] + 1;
    }
    return obj;
}, {});

console.log(rta);

const data = [
    {
        name: "Tatiana",
        level: "hight",
    },
    {
        name: "José",
        level: "hight",
    },
    {
        name: "Elvira",
        level: "low",
    },
    {
        name: "Martha",
        level: "medium",
    },
    {
        name: "Ivón",
        level: "medium",
    },
    {
        name: "Coqui",
        level: "low",
    },
];

const rta1 = data
.map(item => item.level)
.reduce((obj, item) => {
    if (!obj[item]) {
        obj[item] = 1;
    } else {
        obj[item] = obj[item] + 1;
    }
    return obj;
}, {});

console.log(rta1);
