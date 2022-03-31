//A partir do objeto abaixo, retorne um array onde cada item é o nome completo de cada pessoa no array. Utilize arrow function.
let persons = [
	{ firstname: "Malcom", lastname: "Reynolds" },
	{ firstname: "Kaylee", lastname: "Frye" },
	{ firstname: "Jayne", lastname: "Cobb" },
];

console.log(persons.map((obj) => obj.firstname + " " + obj.lastname));
