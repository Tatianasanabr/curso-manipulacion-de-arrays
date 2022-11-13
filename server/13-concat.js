//Concat método que fusiona arrays
//Concat es inmutable es decir no modifica el array original
//Solo crea uno nuevo.

const elements = [1, 1, 2, 2];
const otherElements = [3, 3, 4, 4];

//Sintaxis larga con for
//Referencia en memoria ... en la constante newArray.
const newArray = [...elements];
for(let index = 0; index < otherElements.length; index++){
    const element = otherElements[index];
    newArray.push(element);
};
console.log("For", newArray);

//Sintaxis corta con concat
const rta = elements.concat(otherElements);
console.log("Mis arrays unidos", rta);