const searchBox = document.querySelector('.searchBox');
const searchBtn = document.querySelector('.searchBtn');
const recipeContainer = document.querySelector('.recipe-container');

const fetchMeal = async (query) => {
    recipeContainer.innerHTML = '<h2>Fetching Meals...</h2>';
    try {
        const data = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`);
        const response = await data.json();
        // console.log(response.meals[0]);
        recipeContainer.innerHTML = "";
        response.meals.forEach(meal => {
            // console.log(meal);
            const mealDiv = document.createElement('div');
            mealDiv.classList.add('recipe');
            mealDiv.innerHTML = `
        <img src="${meal.strMealThumb}">
        <h3>${meal.strMeal}</h3>
        <p><span>${meal.strArea}<span> Dish</p>   
        <p><span>${meal.strCategory}<span> Category</p>   `
            recipeContainer.appendChild(mealDiv);
        });
    }
    catch (error) {
        recipeContainer.innerHTML = '<h2>Please Enter Correct Meals Name...</h2>';
    }


}



searchBtn.addEventListener('click', (e) => {
    e.preventDefault();


    const searchInput = searchBox.value.trim();
    if (!searchInput) {
        recipeContainer.innerHTML = `<h3>Enter Meal Name in Search Box....</h3>`;
        return;
    }
    fetchMeal(searchInput);
});