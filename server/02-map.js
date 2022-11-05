//Map me permite crear un nuevo array con los resultados
//que le aplico a cada elemento del array
//nunca me cambia el array original y me devuelve uno nuevo
//con el mismo número de elementos del array original.
const letters = ["a", "b", "c"];

//Sintaxis Larga.
const newArray = [];
for (let index = 0; index < letters.length; index++) {
    const element = letters[index];
    newArray.push(element + "++");
};

console.log("original", letters);
console.log("new", newArray);

//Sintaxis corta utilizando map
const newArrayMap = letters.map(item => item + "++");
console.log("original", letters);
console.log("new", newArrayMap);