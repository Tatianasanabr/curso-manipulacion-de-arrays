//Sort método para hacer ordenamiento dentro de los arrays
//Va a mutar, es decir cambiará el array original

const months = ["March", "Jan", "Feb", "Dec"];
//Ordenamos months con sort
months.sort();
console.log(months);

const numbers = [1, 30, 4, 21, 100000];
//Ordenamos numbers con sort
numbers.sort((a, b) => a - b);
console.log(numbers);

const words = [
    "réservé",
    "premier",
    "communiqué",
    "café",
    "adieu",
    "éclair",
    "banana",
];
//Ordenamos words con sort
words.sort();
console.log(words);

const orders = [
    {
        customerName: "Nicolas",
        total: 600,
        delivered: true,
    },
    {
        customerName: "Zulema",
        total: 120,
        delivered: false,
    },
    {
        customerName: "Santiago",
        total: 1840,
        delivered: true,
    },
    {
        customerName: "Valentina",
        total: 240,
        delivered: true,
    },
];

//Ordenamos words con sort
orders.sort((a, b) => b.total - a.total);
console.log(orders);
