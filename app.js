// Sample recipe data (in a real app, this would come from a database or API)
const recipes = [
    {
        id: 1,
        title: "Chocolate Peanut Butter Energy Ball",
        category: "dessert",
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
            "1. Put 1 cup rolled oats, 1/2 cup peanut butter, 1/3 cup chocolate chips, 2 tablespoons honey, 1 teaspoon vanilla extract, and a pinch of salt in a medium bowl",
            "2. Combine all ingredients in a medium bowl.",
            "3. Mix well until everything is evenly incorporated.",
            "4. Roll mixture into small balls.",
            "5. Place on a baking sheet and refrigerate for at least 30 minutes."
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
            "Pepper"
        ],
        instructions: [
            "1. Toast the bread to your desired level of crispness.",
            "2. While the bread is toasting, mash the avocado in a small bowl.",
            "3. Season the mashed avocado with salt, pepper, and any other desired seasonings.",
            "4. Spread the avocado mixture evenly over the toasted bread.",
            "5. Serve immediately."
        ]
    },
    {
        id: 3,
        title: "Mochi",
        category: "dessert",
        tags: ["Easy", "Sweet", "Healthy"],
        waitingTime: "1 Hour.",
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
            "Make the Mochi Dough. In a microwave-safe bowl, mix: 1 cup glutinous rice flour, 1/4 cup sugar, 3/4 cup water, Add a few drops of food coloring if desired.",
            "Microwave on high for 1 minute, then stir. Repeat in 30-second intervals, stirring each time, until the mixture becomes thick, sticky, and slightly translucent (usually around 2 to 3 minutes total).",
            "Dust & Roll the Dough. Roll the dough out gently to about 1/4 inch (6 mm) thick. Let it cool slightly ",
            "Cut the dough into circles using a round cutter or cup (about 3-4 inches wide). Working quickly, place a frozen scoop of ice cream/sorbet in the center of a circle.",
            "Wrap each mochi ball in plastic wrap and freeze for at least 1 hour. Let mochi sit at room temperature for a few minutes before serving for best texture."
        ]
    },
    {
        id: 4,
        title: "Yogurt Protein Power Rolls",
        category: "dessert",
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
            "1. Mix together 1 scoop of protein powder and 1/2 cup of yogurt in a bowl, then mix it.",
            "2. Add in the berries, and coat it in the yogurt mixture, then place clusters on wax paper.",
            "3. Freeze for 30 min or until frozen.",
            "4. Melt the chocolate, and dip the clusters in chocolate.",
            "5. Put it back in the freezer."
        ]
    },
    {
        id: 5,
        title: "Simple Lemon Herb Baked Salmon with Asparagus",
        category: "dinner",
        tags: ["Easy", "Quick", "Healthy"],
        waitingTime: "5 Min.",
        cookingTime: "20 Min.",
        image: "salmonasparagus.jpg",
        description: "A quick and healthy one-pan dinner featuring flaky baked salmon and tender asparagus seasoned with lemon and herbs.",
        ingredients: [
            "Salmon Fillets",
            "Fresh Asparagus",
            "Lemon",
            "Olive Oil",
            "Dried Herbs",
            "Salt",
            "Black Pepper"
        ],
        instructions: [
            "1. Preheat your oven to 400°F (200°C). Line a baking sheet with parchment paper.",
            "2. Wash and trim the woody ends off the asparagus spears. Place them on one side of the baking sheet.",
            "3. Place the salmon fillets on the other side of the baking sheet.",
            "4. Drizzle both the salmon and asparagus with olive oil.",
            "5. Squeeze fresh lemon juice over the salmon and asparagus.",
            "6. Sprinkle the dried herbs, salt, and pepper over everything.",
            "7. Bake for 15-20 minutes, or until the salmon is cooked through and flakes easily with a fork, and the asparagus is tender-crisp."
        ]
    },
    {
        id: 6,
        title: "Quick Mediterranean Quinoa Salad",
        category: "lunch",
        tags: ["Easy", "Healthy", "Quick", "Vegetarian"],
        waitingTime: "15 Min.", 
        cookingTime: "15 Min.", 
        image: "QuinaSalad.jpg", 
        description: "A fresh and flavorful Mediterranean-inspired quinoa salad that's perfect for a light and healthy lunch.",
        ingredients: [
        "Cooked Quinoa",
        "Cucumber",
        "Cherry Tomatoes",
        "Red Onion",
        "Feta Cheese (crumbled)",
        "Kalamata Olives (pitted)",
        "Fresh Parsley",
        "Lemon Juice",
        "Olive Oil",
        "Salt",
        "Black Pepper"
        ],
        instructions: [
        "1. If not using pre-cooked quinoa, cook 1/2 cup of dry quinoa according to package directions and let it cool.",
        "2. While the quinoa cools, finely dice the cucumber and red onion, and halve the cherry tomatoes.",
        "3. In a large bowl, combine the cooled quinoa, diced cucumber, cherry tomatoes, red onion, crumbled feta cheese, and pitted Kalamata olives.",
        "4. Chop the fresh parsley and add it to the bowl.",
        "5. In a small bowl, whisk together the fresh lemon juice and olive oil. Season with salt and black pepper to taste.",
        "6. Pour the dressing over the salad ingredients and gently toss to combine.",
        "7. Serve immediately or refrigerate for later. Flavors meld nicely if chilled for at least 10-15 minutes."
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
