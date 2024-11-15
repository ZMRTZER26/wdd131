import recipes from './recipes.mjs';

document.addEventListener('DOMContentLoaded', () => {
    init();
});

function init() {
    const recipeSection = document.getElementById("recipeSection");
    
    if (!recipeSection) {
        console.error("recipeSection not found!");
        return;
    }
    
    console.log("Initializing recipe section...");
    
    if (recipes.length > 0) {
        const recipe = recipes[7];
        recipeSection.innerHTML = `
            <article class="recipe-item">
                <img src="${recipe.image}" alt="${recipe.name}">
                <div class="recipe-details">
                    <div class="tag">${recipe.tags}</div>
                    <h2>${recipe.name}</h2>
                    <p>${recipe.description}</p>
                    <div class="rating" role="img" aria-label="Rating: ${recipe.rating} out of 5 stars">
                        ${'⭐'.repeat(Math.floor(recipe.rating))}${'☆'.repeat(5 - Math.floor(recipe.rating))}
                    </div>
                </div>
            </article>
        `;
        console.log("First recipe successfully rendered!");
    } else {
        recipeSection.innerHTML = "<h2>No recipes available.</h2>";
        console.log("No recipes found.");
    }
}
