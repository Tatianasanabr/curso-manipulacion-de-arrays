//Join método sirve para unificar todo un array

const elements = ["Fire", "Air", "Water"];

let rtaFinal = "";
const separator = "--";
for(let index = 0; index < elements.length; index++){
    const element = elements[index];
    rtaFinal = rtaFinal + element + separator;
};
console.log("for", rtaFinal);

const rta = elements.join("--");
console.log("Join", rta);

const title = "Curso de manipulación de Arrays";
const rta2 = title.split(" ")
console.log(rta2);

const urlFinal = title.split(" ").join("-").toLowerCase();
console.log("Nuestra URL", urlFinal);
