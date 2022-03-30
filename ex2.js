import fetch from "node-fetch";

//2. Faça fetch dos dados através da aPI (https://www.themealdb.com/api/json/v1/1/lookup.php?i=52772) e retorne a ficha desta refeição com id, nome, área (país de origem), ingredientes (em uma única string) e as intruções.
//Formato:
//Nome: [nome]
//ID: [id]
//Região: [area]
//Ingredientes: [ingredientes (string única)]
//Instruções: [instruções]

fetch("https://www.themealdb.com/api/json/v1/1/lookup.php?i=52772")
	.then((response) => {
		if (response.ok) return response.json();
	})
	.then((data) => {
		return console.log({
			nome: data.meals["0"].strMeal,
			ID: data.meals["0"].idMeal,
			Região: data.meals["0"].strArea,
			Ingredientes: `${data.meals["0"].strIngredient1}, ${data.meals["0"].strIngredient2}, ${data.meals["0"].strIngredient3}, ${data.meals["0"].strIngredient4}, ${data.meals["0"].strIngredient5}, ${data.meals["0"].strIngredient6}, ${data.meals["0"].strIngredient7}, ${data.meals["0"].strIngredient8}, ${data.meals["0"].strIngredient9}`,
			Instruções: data.meals["0"].strInstructions,
		});
	});
