//Includes me dice si un elemento está o no dentro del array.

const pets = ["cat", "dog", "bat"];

//Sintaxis larga con for.
let includeInArray = false;
for(let index = 0; index < pets.length; index++){
    const element = pets[index];
    if(element === "dog"){
        includeInArray = true;
        break;
    }
} 
console.log(includeInArray);

//Sintaxis corta con includes
//Tener en cuenta que el método includes no requiere un arrow function
//Simplemente debo poner entre paréntesis el elemento que busco
const rta2 = pets.includes("dog");
console.log("¿Hay un elemento dog en mi array?", rta2);
