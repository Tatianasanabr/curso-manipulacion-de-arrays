//Every es lo opuesto a Some, todos los elementos deben cumplir con la condición
//Retornará un true o false

const numbers = [1, 30, 39, 29, 10, 13];

//Sintaxis larga
let rta = true;
for(let index = 0; index < numbers.length; index++){
    const element = numbers[index];
    if(element >= 40){
        rta = false;
    }
}
console.log("¿Todos los elementos son >= a 40?", rta);

//Sintaxis corta 
const rta2 = numbers.every(item => item <= 40);
console.log("¿Todos los elementos son >= a 40?", rta2);

//Reto, todos los miembros del team son <15 años?
const team = [
    {
        name: "Tatiana",
        age: 9,
    },
    {
        name: "Elvira",
        age: 8,
    },
    {
        name: "José",
        age: 10,
    },
    {
        name: "Ivón",
        age: 7,
    },
    {
        name: "Coqui",
        age: 11,
    },
    {
        name: "Martha",
        age: 6,
    },
];

const rta3 = team.every(item => item.age < 15);
console.log(rta3);
