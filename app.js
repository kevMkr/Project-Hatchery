// Sample recipe data (in a real app, this would come from a database or API)
const recipes = [
    {
        id: 1,
        title: "Chocolate Peanut Butter Energy Ball",
        category: "Dessert",
        tags: ["Sweet", "Snack"],
        waitingTime: "10 Min.",
        cookingTime: "30 Min.",
        image: "chocolatepeanutballs.jpg",
        description: "These chocolate peanut butter no-bake energy bites taste just like a cookie, although they are full of protein and naturally sweetened.",
        ingredients: [
            "1 cup oats",
            "1/2 cup peanut butter",
            "1/3 cup honey",
            "1/4 cup cocoa powder",
            "1/4 cup mini chocolate chips"
        ],
        steps: [
            "Mix all ingredients in a bowl.",
            "Roll mixture into bite-sized balls.",
            "Chill in the refrigerator for 30 minutes.",
            "Enjoy or store for later."
        ]
    },
    {
        id: 2,
        title: "Avocado Toast",
        category: "breakfast",
        tags: ["Easy", "Savory", "Healthy"],
        waitingTime: "5 Min.",
        cookingTime: "5 Min.",
        image: "avoc.jpg",
        description: "Simple and healthy breakfast option. Toast bread, mash avocado, spread on toast, season to taste. A great way to start your day!",
          ingredients: [
            "2 slices of bread",
            "1 ripe avocado",
            "Salt and pepper to taste",
            "Lemon juice (optional)"
        ],
        steps: [
            "Toast the bread slices.",
            "Mash the avocado in a bowl.",
            "Spread avocado on toasted bread.",
            "Season with salt, pepper, and lemon juice."
        ]
    }
];

// DOM Elements
const searchInput = document.getElementById('searchInput');
const searchButton = document.getElementById('searchButton');
const recipesContainer = document.getElementById('recipesContainer');
const filterToggle = document.getElementById('filterToggle');
const tagFilters = document.getElementById('tagFilters');
const tagBtns = () => document.querySelectorAll('.tag-btn');


// Detail overlay elements
const recipeDetailOverlay = document.getElementById('recipeDetailOverlay');
const detailImage = document.getElementById('detailImage');
const detailTitle = document.getElementById('detailTitle');
const detailTags = document.getElementById('detailTags');
const detailWaitingTime = document.getElementById('detailWaitingTime');
const detailCookingTime = document.getElementById('detailCookingTime');
const detailDescription = document.getElementById('detailDescription');
const likeBtn = document.getElementById('likeBtn');
const detailShareBtn = document.getElementById('detailShareBtn');
const backBtn = document.getElementById('backBtn');
const startCookingBtn = document.getElementById('startCookingBtn');


let activeTag = '';
let currentRecipe = null;
let favoriteRecipes = JSON.parse(localStorage.getItem('favoriteRecipes') || '[]');

// Initialize the app
function init() {
    let params = new URLSearchParams(document.location.search);
    if(params.has("id")){
        openRecipeDetail(params.get("id"));
        console.log(params.get("id"));
    }
    displayRecipes(recipes);
    setupEventListeners();
    setActiveTagButton('');
}

// Display recipes in the container
function displayRecipes(recipesToShow) {
    recipesContainer.innerHTML = '';
    recipesToShow.forEach(recipe => {
        const recipeCard = createRecipeCard(recipe);
        recipesContainer.appendChild(recipeCard);
    });
}

// Create a recipe card element
function createRecipeCard(recipe) {
    const card = document.createElement('div');
    card.className = 'recipe-card';
    card.innerHTML = `
        <img src="${recipe.image}" alt="${recipe.title}" class="recipe-image">
        <div class="recipe-content">
            <h2 class="recipe-title">${recipe.title}</h2>
            <div class="recipe-meta">
                <span>${capitalize(recipe.category)}</span>
            </div>
            <p>${recipe.description.substring(0, 60)}...</p>
        </div>
    `;
    card.addEventListener('click', () => {
        const newUrl = new URL(window.location);
        newUrl.searchParams.set('id', recipe.id);
        window.history.pushState({}, '', newUrl);
        openRecipeDetail(recipe.id);
    });
    return card;
}

function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

// Filter recipes based on search and tag
function filterRecipes() {
    const searchTerm = searchInput.value.toLowerCase();
    const filteredRecipes = recipes.filter(recipe => {
        const matchesSearch = recipe.title.toLowerCase().includes(searchTerm) ||
            recipe.description.toLowerCase().includes(searchTerm);
        const matchesTag = !activeTag || recipe.category === activeTag;
        return matchesSearch && matchesTag;
    });
    displayRecipes(filteredRecipes);
}

// --- Detail Overlay Logic ---
function openRecipeDetail(recipeId) {
    console.log(recipeId);
    const recipe = recipes.find(r => r.id === Number(recipeId));
    if (!recipe) return;
    currentRecipe = recipe;
    detailImage.src = recipe.image;
    detailTitle.textContent = recipe.title + ' - 100% guilt-free';
    detailTags.innerHTML = '';
    detailIngredients.innerHTML = '';
    detailSteps.innerHTML = '';
    (recipe.tags || []).forEach(tag => {
        const tagEl = document.createElement('span');
        tagEl.className = 'tag-btn';
        tagEl.textContent = tag;
        detailTags.appendChild(tagEl);
    });
    detailWaitingTime.textContent = recipe.waitingTime || '-';
    detailCookingTime.textContent = recipe.cookingTime || '-';
    detailDescription.innerHTML = `<b>Who doesn't like a healthy snack?</b><br>${recipe.description}`;
    updateLikeBtn();
    recipeDetailOverlay.style.display = 'flex';
    document.body.style.overflow = 'hidden';

}

function closeRecipeDetail() {
    recipeDetailOverlay.style.display = 'none';
    document.body.style.overflow = '';
}

function updateLikeBtn() {
    if (!currentRecipe) return;
    if (favoriteRecipes.includes(currentRecipe.id)) {
        likeBtn.classList.add('liked');
    } else {
        likeBtn.classList.remove('liked');
    }
}

function toggleLike() {
    if (!currentRecipe) return;
    const idx = favoriteRecipes.indexOf(currentRecipe.id);
    if (idx === -1) {
        favoriteRecipes.push(currentRecipe.id);
    } else {
        favoriteRecipes.splice(idx, 1);
    }
    localStorage.setItem('favoriteRecipes', JSON.stringify(favoriteRecipes));
    updateLikeBtn();
}

function shareCurrentRecipe() {
    if (!currentRecipe) return;
    const shareData = {
        title: currentRecipe.title,
        text: currentRecipe.description,
        url: window.location.href
    };
    if (navigator.share) {
        navigator.share(shareData).catch(error => console.log('Error sharing:', error));
    } else {
        const shareUrl = `mailto:?subject=${encodeURIComponent(currentRecipe.title)}&body=${encodeURIComponent(currentRecipe.description)}`;
        window.open(shareUrl);
    }
}
// Set up event listeners
function setupEventListeners() {
    searchButton.addEventListener('click', filterRecipes);
    searchInput.addEventListener('keyup', (e) => {
        if (e.key === 'Enter') filterRecipes();
    });
    filterToggle.addEventListener('click', () => {
        tagFilters.classList.toggle('hidden');
    });
    tagBtns().forEach(btn => {
        btn.addEventListener('click', function() {
            activeTag = this.dataset.tag;
            setActiveTagButton(activeTag);
            filterRecipes();
        });
    });
    likeBtn.addEventListener('click', toggleLike);
    detailShareBtn.addEventListener('click', shareCurrentRecipe);
    backBtn.addEventListener('click', closeRecipeDetail);
    startCookingBtn.addEventListener('click', startCooking);
}

function setActiveTagButton(tag) {
    tagBtns().forEach(btn => {
        if (btn.dataset.tag === tag) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });
}
function loadRecipeByTitle(title) {
  const recipe = recipes.find(r => r.title === title);
  if (recipe) {
    loadRecipe(recipe);
  } else {
    console.error("Recipe not found:", title);
  }
}

// Function to display the recipe details
function loadRecipe(recipe) {
  const stepsContainer = document.getElementById('recipe-steps-container');
  if (!stepsContainer) {
    console.error('Recipe steps container not found.');
    return;
  }
  stepsContainer.innerHTML = ''; // Clear previous steps

  recipe.steps.forEach((step, index) => {
    const stepDiv = document.createElement('div');
    stepDiv.classList.add('recipe-step');

    const stepTitle = document.createElement('h3');
    stepTitle.textContent = `Step ${index + 1}`;
    stepDiv.appendChild(stepTitle);

    const stepText = document.createElement('p');
    stepText.textContent = step;
    stepDiv.appendChild(stepText);

    stepsContainer.appendChild(stepDiv);
  });
}

// Example: Load the first recipe on page load
document.addEventListener('DOMContentLoaded', () => {
  if (recipes.length > 0) {
    loadRecipe(recipes[0]);
  }
});

// Check login state
function checkLoginState() {
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
    const loginBtn = document.querySelector('.login-btn');
    
    if (isLoggedIn) {
        const userEmail = localStorage.getItem('userEmail');
        loginBtn.innerHTML = `<i class="fas fa-user"></i> ${userEmail}`;
        loginBtn.href = '#';
        loginBtn.addEventListener('click', function(e) {
            e.preventDefault();
            if (confirm('Do you want to log out?')) {
                localStorage.removeItem('isLoggedIn');
                localStorage.removeItem('userEmail');
                window.location.reload();
            }
        });
    }
}

// Call checkLoginState when the page loads
document.addEventListener('DOMContentLoaded', function() {
    checkLoginState();
    init();
}); 
