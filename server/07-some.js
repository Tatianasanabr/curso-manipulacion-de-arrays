//Some Verifica si algun elmento cumple con una condicional
//Retornará un true o false.
const numbers = [1, 2, 3, 4];

//Sintaxis larga
for(let index = 0; index < numbers.length; index++) {
    const element = numbers[index];
    if (element % 2 === 0) {
        rta = true;
        break;
    }
};
console.log("Sintaxis larga", rta);

//Sintaxis corta gracias a Some
const rta2 = numbers.some(item => item % 2 === 0);

console.log("Sintaxis corta", rta2);

//Ahora con objetos
const orders = [
    {
        customerName: "Tatiana",
        total: 60,
        delivered: true,
    },
    {
        customerName: "Martha",
        total: 120,
        delivered: false,
    },
    {
        customerName: "Ivón",
        total: 180,
        delivered: false,
    },
    {
        customerName: "Elvira",
        total: 90,
        delivered: true,
    },
    {
        customerName: "José",
        total: 190,
        delivered: true,
    },
    {
        customerName: "Tatiana",
        total: 200,
        delivered: false,
    },
];

const rta3 = orders.some(item => item.delivered);
console.log("Ordenes entregadas", rta3)

//Un ejemplo complejo con una librería usando un calendario con citas
const dates = [
    {
        startDate: new Date(2022, 1, 1, 10),
        endDate: new Date(2022, 1, 1, 11),
        title: "Cita de código",
    },
    {
        startDate: new Date(2022, 1, 1, 15),
        endDate: new Date(2022, 1, 1, 15, 30),
        title: "Cita familiar",
    },
    {
        startDate: new Date(2022, 1, 1, 20),
        endDate: new Date(2022, 1, 1, 21),
        title: "Cena",
    },
];

//Puedo agendar esta cita sin que se cruce con alguna existente?
const newAppointment = {
    startDate: new Date(2021, 1, 1, 19),
    endDate: new Date(2021, 1, 1, 20, 30),
};

const areIntervalsOverlapping = require("date-fns/areIntervalsOverlapping")

const isOverlap = (newDate) => {
    return dates.some(date => {
        return areIntervalsOverlapping(
            {start: date.startDate, end: date.endDate},
            {start: newDate.startDate, end: date.endDate},
        )
    })
}
//Arrojará true si se sobrepone
console.log("isOverlap", isOverlap(newAppointment));