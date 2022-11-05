//Método map (Iterar sobre cada elemento del array).
const letters = ["a", "b", "c"];

//Sintaxis larga.
for (let index = 0; index < letters.length; index++) {
    const element = letters[index];
    console.log("for", element);
};

//Sintaxis corta.
//En el forEach tengo una arrow function, es decir, la función
//que se va a ejecutar por cada uno de los elementos.
letters.forEach(item => console.log("forEach", item));