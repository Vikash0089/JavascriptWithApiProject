
const search_button = document.getElementById("search-btn");
const mealContentList = document.getElementById("meal");
const detail_content = document.querySelector(".meal-details-content");
const recipeCloseBtn = document.getElementById("recipe-close-btn");

search_button.addEventListener("click", allMeals);
mealContentList.addEventListener("click", allRecipe);
recipeCloseBtn.addEventListener("click", () => {
    detail_content.parentElement.classList.remove("active");
});

function allMeals() {
    let searchText = document.getElementById("search-input").value.trim();
    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${searchText}`)
        .then((response) => response.json())
        .then((data) => {
            let html = "";
            if (data.meals) {
                data.meals.forEach((meal) => {
                    html += `
                <div class="meal-item" data-id="${meal.idMeal}">
                  <div class="meal-img">
                    <img src="${meal.strMealThumb}" alt="food" />
                  </div>
                  <div class="meal-name">
                    <h3>${meal.strMeal}</h3>
                    <a href="#" class="recipe-btn">Recipe Details</a>
                  </div>
                </div>
              `;
                });
            } else {
                html = "Sorry, we didn't find any meal!";
            }
            mealContentList.innerHTML = html;
        });
}

function allRecipe(e) {
    e.preventDefault();
    if (e.target.classList.contains("recipe-btn")) {
        let mealItem = e.target.parentElement.parentElement;
        fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealItem.dataset.id}`)
            .then((response) => response.json())
            .then((data) => mealRecipeModal(data.meals[0]));
    }
}

function mealRecipeModal(meal) {
    let html = `
    <h2 class="recipe-title">${meal.strMeal}</h2>
    <p class="recipe-category">${meal.strCategory}</p>
    <div class="recipe-instruct">
        <h3>Instructions:</h3>
        <p>${meal.strInstructions}</p>
    </div>
    <div class="recipe-meal-img">
        <img src="${meal.strMealThumb}" alt="" />
    </div>
    <div class="recipe-link">
        <a href="${meal.strYoutube}" target="_blank">Watch Video</a>
    </div>
    `;
    detail_content.innerHTML = html;
    detail_content.parentElement.classList.add("active");
}
