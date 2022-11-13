//Reduce reduce mi array a un solo valor
//Debo enviarle 2 parámetros (1. mi arrow function y 2. mi inicializador de sum (0))
const totals = [1,2,3,4];

//Sintaxis larga
let sum = 0;
for (let index = 0; index < totals.length; index++) {
    const element = totals[index];
    sum = sum + element;
}
console.log(sum);

//Sintaxis Corta
const rta = totals.reduce((sum, element) =>sum + element, 0);
console.log("Rta", rta);