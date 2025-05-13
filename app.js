// Sample recipe data (in a real app, this would come from a database or API)
const recipes = [
    {
        id: 1,
        title: "Chocolate Peanut Butter Energy Ball",
        category: "Dessert",
        tags: ["Easy","Sweet", "Snack"],
        waitingTime: "10 Min.",
        cookingTime: "30 Min.",
        image: "chocolatepeanutballs.jpg",
        description: "These chocolate peanut butter no-bake energy bites taste just like a cookie, although they are full of protein and naturally sweetened.",
        ingredients: [
            "Rolled oats",
            "Peanut butter",
            "Chocolate chips",
            "Honey",
            "Vanilla extract",
            "Salt"
        ],
        instructions: [
            "Put 1 cup rolled oats, 1/2 cup peanut butter, 1/3 cup chocolate chips, 2 tablespoons honey, 1 teaspoon vanilla extract, and a pinch of salt in a medium bowl",
            "Combine all ingredients in a medium bowl.",
            "Mix well until everything is evenly incorporated.",
            "Roll mixture into small balls.",
            "Place on a baking sheet and refrigerate for at least 30 minutes."
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
            "Whole-wheat bread",
            "Ripe avocado",
            "Salt",
            "Pepper",
            "Optional: red pepper flakes, everything bagel seasoning"
        ],
        instructions: [
            "Toast the bread to your desired level of crispness.",
            "While the bread is toasting, mash the avocado in a small bowl.",
            "Season the mashed avocado with salt, pepper, and any other desired seasonings.",
            "Spread the avocado mixture evenly over the toasted bread.",
            "Serve immediately."
        ]
    },
    {
        id: 3,
        title: "Mochi",
        category: "Dessert",
        tags: ["Easy", "Sweet", "Healthy"],
        waitingTime: "5 Min.",
        cookingTime: "5 Min.",
        image: "mochi.webp",
        description: "Mochi is a Japanese rice cake made from glutinous rice, known for its soft, stretchy, and chewy texture.",
        ingredients: [
            "Glutinous rice flour",
            "Sugar",
            "Food coloring/dye",
            "Cornstarch",
            "Sorbet/Ice-cream"
        ],
        instructions: [
            "Toast the bread to your desired level of crispness.",
            "While the bread is toasting, mash the avocado in a small bowl.",
            "Season the mashed avocado with salt, pepper, and any other desired seasonings.",
            "Spread the avocado mixture evenly over the toasted bread.",
            "Serve immediately."
        ]
    },
    {
        id: 4,
        title: "Yogurt Protein Power Rolls",
        category: "Dessert",
        tags: ["Easy", "Sweet", "Healthy"],
        waitingTime: "40 Min.",
        cookingTime: "5 Min.",
        image: "YogurtProtein.png",
        description: "Simple and Healthy snack option. It serves with pack of protein while still satisfying your sweet tooth.",
        ingredients: [
            "Protein Powder",
            "Yogurt",
            "Any kind of berries",
            "Chocolate chips/bar",
        ],
        instructions: [
            "Mix together 1 scoop of protein powder and 1/2 cup of yogurt in a bowl, then mix it.",
            "Add in the berries, and coat it in the yogurt mixture, then place clusters on wax paper.",
            "Freeze for 30 min or until frozen.",
            "Melt the chocolate, and dip the clusters in chocolate.",
            "Put it back in the freezer."
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
const ingredientsListElement = document.getElementById('ingredients-list');  
const instructionsTextElement = document.getElementById('instructions-text');  
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
    ingredientsListElement.innerHTML = '';  
    instructionsTextElement.innerHTML = ''; 
    recipe.ingredients.forEach(ingredient => {
        const li = document.createElement('li');
        li.textContent = ingredient;
        ingredientsListElement.appendChild(li);
    });

    recipe.instructions.forEach(instruction => {
        const p = document.createElement('p'); 
        p.textContent = instruction;
        instructionsTextElement.appendChild(p);
    });
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
