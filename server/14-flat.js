//Flat & FlatMap Métodos que me permiten manipular arrays que tienen
//otros arrays dentro.

const matriz = [
    [1, 2, 3],
    [4, 5, 6, [1, 2, [1, 2]]],
    [7, 8, 9],
];

//Sintaxis larga con for
const newArray = [];
for(let i = 0; i < matriz.length; i++){
    const array = matriz[i];
    for(let j = 0; j < array.length; j++){
        const element = array[j];
        newArray.push(element);
    }
};
console.log("For", newArray);

//Sintaxis larga flat
const rta = matriz.flat(3);
console.log("Flat", rta);