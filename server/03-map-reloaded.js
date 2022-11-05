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
        customerName: "Ivon",
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
];
//Con map selecciono los elementos sobre los que quiero trabajar 
// en este caso el total.
//console.log("original", orders);
const rta = orders.map(item => item.total)
//console.log("rta", rta);

//Agregar un atributo a cada objeto del array

/*const rta2 = orders.map(item => {
    item.tax = .19;
    return item;
})
console.log("rta2", rta2);
console.log("original", orders);*/
//Mi array original mutó, es decir, agregó el tax a mi array original
//Esto solo pasa con los objetos no con los primitivos (string o número)
//debido a que cada objeto tiene una referencia en memoria

//Se evita de la ste. manera, no hacer la modificación en el obejto
//que es el que guarda la referencia en memoria
//sino que crearemos un nuevo objeto utilizando script operation (...)
//función de EcmaScript clonaremos o copiaremos los atributos 
//del ojeto esto no traerá la referencia en memoria

const rta3 = orders.map((item) => {
    return {
        ...item,
        tax: .19
    };
});
console.log("rta3", rta3);
console.log("original", orders);
