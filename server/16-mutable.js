const products = [
    { title: 'Pizza', price: 121, id: '🍕' },
    { title: 'Burger', price: 121, id: '🍔' },
    { title: 'Hot cakes', price: 121, id: '🥞' },
];

const myProducts = [];

console.log("products", products);
console.log("myProducts", myProducts);
console.log("-".repeat(10));

//Métodos mutables que van a modificar el array original 
//Inmutables para el objetivo de búsquedas

const product = products.find(item => item.id === "🍔");
if(product){
    myProducts.push(product);
};
console.log("products", products);
console.log("myProducts", myProducts);
console.log("-".repeat(10));

//Eliminar un elemento del array

const productIndex = products.findIndex(item => item.id === "🍔");
if(productIndex !== -1){
    myProducts.push(products[productIndex]);
    //Eliminamos los pancakes
    //Los parámetros de splice (Posición y cuantos elementos a partir de esa posición quiero eliminar).
    products.splice(productIndex, 1);
};
console.log("products", products);
console.log("myProducts", myProducts);
console.log("-".repeat(10));

//Update 
const productsV2 = [
    { title: 'Pizza', price: 121, id: '🍕' },
    { title: 'Burger', price: 121, id: '🍔' },
    { title: 'Hot cakes', price: 121, id: '🥞' },
];

const update = {
    id: "🥞",
    changes: {
        price: 200,
        description: "delicioso"
    }
};

const productsIndexV2 = productsV2.findIndex(item => item.id === update.id);
productsV2[productsIndexV2] = {
    ...productsV2[productsIndexV2],
    ...update.changes,
}
console.log(productsV2);