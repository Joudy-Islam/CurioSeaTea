const meals = [
  { name: "Pizza",  emoji: "🍕", type: "Meal" },
  { name: "Sushi",  emoji: "🍣", type: "Meal" },
  { name: "Tacos",  emoji: "🌮", type: "Meal" },
  { name: "Burger", emoji: "🍔", type: "Meal" },
  { name: "Ramen",  emoji: "🍜", type: "Meal" },
  { name: "Pasta",  emoji: "🍝", type: "Meal" },
  { name: "Curry",  emoji: "🍛", type: "Meal" },
  { name: "Salad",  emoji: "🥗", type: "Meal" },
];

const snacks = [
  { name: "Fries",     emoji: "🍟", type: "Snack" },
  { name: "Popcorn",   emoji: "🍿", type: "Snack" },
  { name: "Dumplings", emoji: "🥟", type: "Snack" },
];

const desserts = [
  { name: "Ice cream",      emoji: "🍦", type: "Dessert" },
  { name: "Chocolate cake", emoji: "🍰", type: "Dessert" },
  { name: "Pancakes",       emoji: "🥞", type: "Dessert" },
];
const foods = [...meals, ...snacks, ...desserts];
const dishJS = document.getElementById("dish");
const btnJS= document.getElementById("btn");
const recipeBtn = document.getElementById("recipeBtn")
let lastPick = null;
let currentFood = null;
function pickFood() {
    let food;
    do {
        food = foods[Math.floor(Math.random() * foods.length)];
    } while (food === lastPick && foods.length > 1);
lastPick = food;
return food;
}
let currentFood = null;
btnJS.addEventListener("click", function() {
    const food = pickFood();
dishJS.textContent = food.emoji + " " + food.name;
recipeBtn.disabled = false;
});

