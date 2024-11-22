import recipes from './recipes.mjs';

function random(number) {
    return Math.floor(Math.random() * number);
}

function randomRecipe(list) {
    const listLength = list.length;
    const randomNumber = random(listLength);
    return list[randomNumber];
}

function tagsTemplate(tags) {
    return tags.map(tag => `<li class="tag">${tag}</li>`).join('');
}

function ratingTemplate(rating) {
    let html = `<span class="rating" role="img" aria-label="Rating: ${rating} out of 5 stars">`;
    for (let i = 1; i <= 5; i++) {
        if (i <= rating) {
            html += `<span aria-hidden="true" class="icon-star">⭐</span>`;
        } else {
            html += `<span aria-hidden="true" class="icon-star-empty">☆</span>`;
        }
    }
    html += `</span>`;
    return html;
}

function recipeTemplate(recipe) {
    return `<figure class="recipe-item">
        <img src="${recipe.image}" alt="Image of ${recipe.name}" />
        <figcaption class="recipe-details">
            <ul class="tag">
                ${tagsTemplate(recipe.tags)}
            </ul>
            <h2><a href="#">${recipe.name}</a></h2>
            <p class="recipe__ratings">
                ${ratingTemplate(recipe.rating)}
            </p>
            <p class="recipe__description">${recipe.description}</p>
        </figcaption>
    </figure>`;
}

function renderRecipes(recipeList) {
    const recipeSection = document.getElementById('recipeSection');
    const recipeHTML = recipeList.map(recipe => recipeTemplate(recipe)).join('');
    recipeSection.innerHTML = recipeHTML;
}

function filter(query) {
    const filtered = recipes.filter(recipe => {
        return (
            (recipe.name.toLowerCase().includes(query)) ||
            (recipe.description.toLowerCase().includes(query)) ||
            (recipe.tags && recipe.tags.some(tag => tag.toLowerCase().includes(query))) ||  // Check if tags exist
            (recipe.ingredients && recipe.ingredients.some(ingredient => ingredient.toLowerCase().includes(query))) // Check if ingredients exist
        );
    });

    const sorted = filtered.sort((a, b) => a.name.localeCompare(b.name));
    return sorted;
}

function searchHandler(e) {
    e.preventDefault();

    const searchInput = document.getElementById('searchInput').value;
    const query = searchInput.toLowerCase();
    const filteredRecipes = filter(query);

    renderRecipes(filteredRecipes);
}

function init() {
    // Render a random recipe initially
    const randomRecipeData = randomRecipe(recipes);
    renderRecipes([randomRecipeData]);

    // Attach event listener to the search button
    const searchButton = document.querySelector('input[type="image"]'); // Target the input with type="image"
    if (searchButton) {
        searchButton.addEventListener('click', searchHandler);
    } else {
        console.error('Search button not found in the DOM');
    }
}

document.addEventListener('DOMContentLoaded', () => {
    init();
});



