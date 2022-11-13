//Find smilar a filter pero find solo me retornará un objeto que cumpla
//con la condición, me lo retorna como un objeto no como un array.
//Traerá solo el primer elemento que cumplió con la condición
//Si no encuentra ninguno retornará Undefined.

const numbers = [1, 30, 49, 29, 10, 13];

//Sintaxis larga usando for
let rta = undefined;
for(let index = 0; index < numbers.length; index++){
    const element = numbers[index];
    if(element === 30) {
        rta = element;
        break;
    }
}
console.log("for", rta);

//Sintaxis corta
const rta2 = numbers.find(item => item === 30);
console.log("find", rta2);

//FindIndex devuelve la posición en la que se encuentra ese elemento.
//Si no encuentra el elemento nos retornará un -1.