//Mediante una condición, el método filter me traerá un nuevo array
//con los elementos que cumplan la condición del array original
//Nunca me traerá en el nuevo array más elementos de los que contiene el array original
//Sin embargo si puede traerme menos o ninguno cuando no se cumpla la condición.
const words = ["spray", "limit", "elite", "exuberant"];

//Sintaxis larga
const newArray = [];
for (let index = 0; index < words.length; index++) {
    const item = words[index];
    if(item.length >= 6) {
        newArray.push(item);
    }
};
/*console.log("newArray", newArray);
console.log("original", words);*/

//Sintaxis corta
const rta = words.filter(item => item.length >= 6)
/*console.log("rta", rta);
console.log("original", words);*/

const orders = [
    {
        customerName: "Tatiana",
        total: 60,
        delivered: true,
    },
    {
        customerName: "Martha",
        total: 120,
        delivered: false,
    },
    {
        customerName: "Ivón",
        total: 180,
        delivered: false,
    },
    {
        customerName: "Elvira",
        total: 90,
        delivered: true,
    },
    {
        customerName: "José",
        total: 190,
        delivered: true,
    },
    {
        customerName: "Tatiana",
        total: 200,
        delivered: false,
    },
];

//Quiero ver las ordenes que fueron entregadas.
const delivered = orders.filter(item =>  item.delivered)
console.log("delivered", delivered);

//Quiero ver las ordenes que fueron entregadas y que tienen un valor superior a los usd100.
const deliveredAmount = orders.filter(item =>  item.delivered && item.total > 100)
console.log("deliveredAmount", deliveredAmount);

//Quiero ver las ordenes por medio de un buscador de nombre del cliente
const search = (query) => {
    return orders.filter(item => {
        return item.customerName.includes(query);
    })
};
console.log(search("tati"));