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
        title: "Healthy Banana Bread with Dark Chocolate Chips",
        category: "breakfast",
        tags: ["Easy", "Sweet", "Healthy"],
        waitingTime: "15 Min.",
        cookingTime: "60 Min.",
        image: "banan.png",
        description: "A moist, healthy banana bread made with ripe bananas, whole wheat flour, Greek yogurt, and dark chocolate chips. Naturally sweetened and perfect for breakfast or a snack!",
        ingredients: [
            "3 ripe bananas (mashed)",
            "2 large eggs",
            "1/4 cup honey or maple syrup",
            "1/4 cup plain Greek yogurt (or unsweetened applesauce)",
            "1/4 cup olive oil or melted coconut oil",
            "1 tsp vanilla extract",
            "1 ½ cups whole wheat flour (or oat flour for gluten-free)",
            "1 tsp baking soda",
            "1/2 tsp cinnamon",
            "1/4 tsp salt",
            "Dark chocolate chips (around 1/4 cup for topping, optional extra to fold in)"
        ],
        instructions: [
            "Preheat your oven to 175°C (350°F). Grease a standard 9x5-inch loaf pan or line it with parchment paper.",
            "In a large mixing bowl, mash the bananas until smooth.",
            "Add eggs, honey, yogurt, oil, and vanilla extract. Mix until fully combined.",
            "In another bowl, whisk together the flour, baking soda, cinnamon, and salt.",
            "Gently fold the dry ingredients into the wet mixture. Do not overmix—just until combined.",
            "(Optional) Fold in a handful of dark chocolate chips if you like them inside the bread.",
            "Pour the batter into your prepared loaf pan. Sprinkle the dark chocolate chips on top.",
            "Bake in the preheated oven for 45–55 minutes, or until a toothpick inserted into the center comes out clean or with just a few moist crumbs.",
            "Let it cool in the pan for 10 minutes, then transfer to a wire rack to cool completely."
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
        title: "Eggless Chocolate Chip Muffins",
        category: "breakfast",
        tags: ["Easy", "Sweet", "Vegetarian"],
        waitingTime: "15 Min.",
        cookingTime: "25 Min.",
        image: "muff.png",
        description: "Delicious and moist chocolate chip muffins made without eggs, perfect for a quick and satisfying breakfast or snack.",
        ingredients: [
            "1 ½ cups (180g) all-purpose flour",
            "¾ cup (150g) granulated sugar (white & brown sugar)",
            "1 tsp baking soda",
            "½ tsp salt",
            "1 cup (240ml) milk",
            "1 tbsp vinegar",
            "¼ cup (60ml) vegetable oil",
            "1 tsp vanilla extract",
            "Chocolate chips (to taste)"
        ],
        instructions: [
            "Preheat oven to 375°F (190°C) and line a muffin tin with paper liners.",
            "In a large bowl, whisk together the flour, sugar, baking soda, and salt.",
            "In another bowl, mix the milk and vinegar, then let it sit for 5 minutes to create a buttermilk-like mixture.",
            "Add the vegetable oil and vanilla extract to the milk mixture and stir well.",
            "Gradually add the wet ingredients to the dry ingredients, mixing until just combined.",
            "Fold in the chocolate chips.",
            "Divide batter among muffin cups, filling each about 3/4 full.",
            "Bake for 20-25 minutes, or until a toothpick comes out clean.",
            "Let cool for 5 minutes before serving."
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
