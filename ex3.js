import fetch from "node-fetch";

//3. Faça fetch dos dados através da API (https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood) e retorne uma lista(array) com os nomes dos primeiros 10 resultados.

fetch("https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood")
	.then((response) => {
		if (response.ok) {
			return response.json();
		}
	})
	.then((data) => {
		return console.log([
			data.meals[0].strMeal,
			data.meals[1].strMeal,
			data.meals[2].strMeal,
			data.meals[3].strMeal,
			data.meals[4].strMeal,
			data.meals[5].strMeal,
			data.meals[6].strMeal,
			data.meals[7].strMeal,
			data.meals[8].strMeal,
			data.meals[9].strMeal,
		]);
	});
