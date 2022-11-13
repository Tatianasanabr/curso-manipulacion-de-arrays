//Flatmap función entre un flat de alinear un array y map, es decir, ir trasnfromando a medida de que lo aplana

const users = [
    { userId: 1, username: "Tatiana", attributes: ["Nice", "Cool"] },
    { userId: 2, username: "José", attributes: ["Nice", "Cute"] },
    { userId: 3, username: "Coqui", attributes: ["Lovely"] },
];

const rta = users.map(user => user.attributes).flat();
console.log(rta);
const rta1 = users.flatMap(user => user.attributes);
console.log(rta1);

//Reto solo tener en array con los startDate

const calendars = {
    primaryCalendar: [
      {
        startDate: new Date(2021, 1, 1, 15),
        endDate: new Date(2021, 1, 1, 15, 30),
        title: "Cita 1",
      },
      {
        startDate: new Date(2021, 1, 1, 17),
        endDate: new Date(2021, 1, 1, 18),
        title: "Cita 2",
      },
    ],
    secondaryCalendar: [
      {
        startDate: new Date(2021, 1, 1, 12),
        endDate: new Date(2021, 1, 1, 12, 30),
        title: "Cita 2",
      },
      {
        startDate: new Date(2021, 1, 1, 9),
        endDate: new Date(2021, 1, 1, 10),
        title: "Cita 4",
      },
    ],
  };

  const challenge = Object.values(calendars).flat().flatMap(item => item.startDate);
  console.log("Challenge", challenge);

  //Rta profesor
  const rta3 = Object.values(calendars).flat().flatMap(item => item.startDate);
  console.log(rta3);