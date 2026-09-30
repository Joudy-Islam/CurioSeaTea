const breakfasts = [
  {
    name: "Pancakes", emoji: "🥞", type: "Breakfast",
    ingredients: ["200g flour", "2 eggs", "300ml milk", "1 tbsp sugar", "Butter for the pan"],
    steps: [
      "Whisk flour, sugar, eggs and milk into a smooth batter.",
      "Melt a little butter in a hot pan.",
      "Pour in a ladle of batter and cook 1-2 minutes per side.",
      "Serve with fruit, syrup or chocolate."
    ]
  },
  {
    name: "Omelette", emoji: "🍳", type: "Breakfast",
    ingredients: ["3 eggs", "Salt and pepper", "1 tbsp butter", "Grated cheese", "Chopped ham or mushrooms"],
    steps: [
      "Beat the eggs with salt and pepper.",
      "Melt the butter in a non-stick pan over medium heat.",
      "Pour in the eggs and let them set for 1-2 minutes.",
      "Add the cheese and filling, fold in half, and slide onto a plate."
    ]
  },
  {
    name: "Shakshuka", emoji: "🍅", type: "Breakfast",
    ingredients: ["1 onion", "1 red pepper", "2 garlic cloves", "1 can chopped tomatoes", "1 tsp cumin", "4 eggs"],
    steps: [
      "Fry the chopped onion and pepper in oil until soft.",
      "Add the garlic, cumin and tomatoes, then simmer 10 minutes.",
      "Make 4 wells in the sauce and crack an egg into each.",
      "Cover and cook until the whites are set. Serve with bread."
    ]
  },
  {
    name: "Avocado toast", emoji: "🥑", type: "Breakfast",
    ingredients: ["2 slices bread", "1 ripe avocado", "Lemon juice", "Salt", "Chilli flakes", "1 egg (optional)"],
    steps: [
      "Toast the bread.",
      "Mash the avocado with lemon juice and salt.",
      "Spread it thickly on the toast.",
      "Top with chilli flakes and a fried egg if you like."
    ]
  },
  {
    name: "Oatmeal with fruit", emoji: "🥣", type: "Breakfast",
    ingredients: ["1/2 cup oats", "1 cup milk", "1 banana", "Handful of berries", "Honey"],
    steps: [
      "Simmer the oats in the milk for 5 minutes, stirring often.",
      "Pour into a bowl.",
      "Top with sliced banana and berries.",
      "Drizzle with honey."
    ]
  },
  {
    name: "French toast", emoji: "🍞", type: "Breakfast",
    ingredients: ["4 slices thick bread", "2 eggs", "100ml milk", "1 tsp cinnamon", "Butter", "Maple syrup"],
    steps: [
      "Whisk the eggs, milk and cinnamon in a shallow dish.",
      "Dip each slice of bread on both sides.",
      "Fry in butter for 2-3 minutes per side until golden.",
      "Serve with maple syrup."
    ]
  },
  {
    name: "Smoothie bowl", emoji: "🍓", type: "Breakfast",
    ingredients: ["1 frozen banana", "1 cup frozen berries", "1/2 cup yoghurt", "Granola", "Sliced fruit"],
    steps: [
      "Blend the banana, berries and yoghurt until very thick.",
      "Pour into a bowl.",
      "Top with granola and sliced fruit.",
      "Eat immediately with a spoon."
    ]
  },
];
 
const meals = [
  {
    name: "Pizza", emoji: "🍕", type: "Meal",
    ingredients: ["300g flour", "1 tsp yeast", "200ml warm water", "Tomato sauce", "Mozzarella", "Olive oil"],
    steps: [
      "Mix flour, yeast, water and a splash of olive oil into a dough. Knead 10 minutes.",
      "Let it rise for 1 hour, then roll it out thin.",
      "Spread tomato sauce and add mozzarella.",
      "Bake at 250°C for 8-10 minutes."
    ]
  },
  {
    name: "Sushi", emoji: "🍣", type: "Meal",
    ingredients: ["2 cups sushi rice", "Rice vinegar", "Nori sheets", "Fresh salmon", "Cucumber", "Soy sauce"],
    steps: [
      "Cook the rice, mix in a splash of rice vinegar, and let it cool.",
      "Lay a nori sheet on a bamboo mat and spread rice over it.",
      "Add salmon and cucumber in a line, then roll tightly.",
      "Slice into pieces and serve with soy sauce."
    ]
  },
  {
    name: "Tacos", emoji: "🌮", type: "Meal",
    ingredients: ["Tortillas", "300g minced beef", "Taco seasoning", "Lettuce", "Tomato", "Cheese"],
    steps: [
      "Fry the beef until browned and stir in the taco seasoning.",
      "Warm the tortillas in a dry pan.",
      "Fill with beef, lettuce, tomato and cheese.",
      "Serve right away."
    ]
  },
  {
    name: "Burger", emoji: "🍔", type: "Meal",
    ingredients: ["400g minced beef", "4 burger buns", "Cheese slices", "Lettuce", "Tomato", "Salt and pepper"],
    steps: [
      "Shape the beef into 4 patties and season both sides.",
      "Fry 4 minutes per side. Add cheese in the last minute.",
      "Toast the buns lightly.",
      "Build the burger with lettuce, tomato and your favourite sauce."
    ]
  },
  {
    name: "Ramen", emoji: "🍜", type: "Meal",
    ingredients: ["Ramen noodles", "750ml chicken stock", "2 tbsp soy sauce", "2 eggs", "Spring onions"],
    steps: [
      "Boil the eggs for 7 minutes, cool them, and peel.",
      "Heat the stock with the soy sauce.",
      "Cook the noodles separately and drain.",
      "Put noodles in a bowl, pour over the broth, and top with halved eggs and spring onions."
    ]
  },
  {
    name: "Spaghetti bolognese", emoji: "🍝", type: "Meal",
    ingredients: ["250g spaghetti", "300g minced beef", "1 onion", "2 garlic cloves", "1 can chopped tomatoes", "Parmesan"],
    steps: [
      "Fry the chopped onion and garlic, then add the beef and brown it.",
      "Add the tomatoes and simmer for 25 minutes.",
      "Boil the spaghetti in salted water until al dente.",
      "Serve the sauce on top with parmesan."
    ]
  },
  {
    name: "Chicken curry", emoji: "🍛", type: "Meal",
    ingredients: ["2 chicken breasts", "1 onion", "2 tbsp curry paste", "1 can coconut milk", "Rice"],
    steps: [
      "Fry the chopped onion until soft, then add the curry paste.",
      "Add the chopped chicken and cook until sealed.",
      "Pour in the coconut milk and simmer 20 minutes.",
      "Serve over cooked rice."
    ]
  },
  {
    name: "Greek salad", emoji: "🥗", type: "Meal",
    ingredients: ["Cucumber", "Tomatoes", "Red onion", "Olives", "Feta cheese", "Olive oil", "Oregano"],
    steps: [
      "Chop the cucumber, tomatoes and red onion into chunks.",
      "Put them in a bowl with the olives.",
      "Place a slab of feta on top.",
      "Drizzle with olive oil and sprinkle with oregano."
    ]
  },
  {
    name: "Fried rice", emoji: "🍚", type: "Meal",
    ingredients: ["2 cups cooked cold rice", "2 eggs", "Frozen peas and carrots", "3 tbsp soy sauce", "Spring onions", "Oil"],
    steps: [
      "Scramble the eggs in a hot wok with oil, then set aside.",
      "Stir-fry the peas and carrots for 2 minutes.",
      "Add the cold rice and soy sauce and fry on high heat for 4 minutes.",
      "Stir the eggs back in and top with spring onions."
    ]
  },
  {
    name: "Lasagna", emoji: "🧀", type: "Meal",
    ingredients: ["Lasagna sheets", "400g bolognese sauce", "500ml white sauce", "200g mozzarella", "Parmesan"],
    steps: [
      "Heat the oven to 190°C.",
      "Layer bolognese, white sauce and pasta sheets in a dish. Repeat 3 times.",
      "Finish with white sauce, mozzarella and parmesan.",
      "Bake for 40 minutes until golden and bubbling."
    ]
  },
  {
    name: "Chili con carne", emoji: "🌶️", type: "Meal",
    ingredients: ["400g minced beef", "1 onion", "1 can kidney beans", "1 can chopped tomatoes", "2 tsp chilli powder", "1 tsp cumin"],
    steps: [
      "Fry the onion and beef until browned.",
      "Stir in the chilli powder and cumin.",
      "Add the tomatoes and beans, then simmer for 30 minutes.",
      "Serve with rice or tortilla chips."
    ]
  },
  {
    name: "Pad Thai", emoji: "🥢", type: "Meal",
    ingredients: ["200g rice noodles", "2 eggs", "200g prawns or tofu", "3 tbsp pad thai sauce", "Bean sprouts", "Crushed peanuts", "Lime"],
    steps: [
      "Soak the noodles in hot water until soft, then drain.",
      "Stir-fry the prawns or tofu, push to the side, and scramble the eggs.",
      "Add the noodles and sauce and toss for 2 minutes.",
      "Add bean sprouts and serve with peanuts and a squeeze of lime."
    ]
  },
  {
    name: "Falafel wrap", emoji: "🥙", type: "Meal",
    ingredients: ["8 falafel balls", "2 wraps", "Hummus", "Cucumber", "Tomato", "Lettuce"],
    steps: [
      "Bake or fry the falafel until crisp.",
      "Spread hummus over each wrap.",
      "Add the falafel and the chopped vegetables.",
      "Roll up tightly and cut in half."
    ]
  },
  {
    name: "Mac and cheese", emoji: "🧈", type: "Meal",
    ingredients: ["250g macaroni", "40g butter", "40g flour", "500ml milk", "200g grated cheddar"],
    steps: [
      "Boil the macaroni until just tender and drain.",
      "Melt the butter, stir in the flour, then slowly whisk in the milk.",
      "Simmer until thick, then stir in most of the cheese.",
      "Mix in the pasta, top with the rest of the cheese, and grill until golden."
    ]
  },
  {
    name: "Chicken noodle soup", emoji: "🍲", type: "Meal",
    ingredients: ["1 chicken breast", "1L chicken stock", "2 carrots", "2 celery sticks", "100g egg noodles", "Parsley"],
    steps: [
      "Simmer the chicken in the stock for 15 minutes, then shred it.",
      "Add the sliced carrots and celery and cook 10 minutes.",
      "Add the noodles and the shredded chicken and cook 5 more minutes.",
      "Season and top with parsley."
    ]
  },
  {
    name: "Quesadilla", emoji: "🫓", type: "Meal",
    ingredients: ["2 tortillas", "150g grated cheese", "Cooked chicken or beans", "Sliced peppers", "Salsa"],
    steps: [
      "Cover half of each tortilla with cheese, filling and peppers.",
      "Fold the tortilla over.",
      "Fry in a dry pan for 2-3 minutes per side until crisp.",
      "Cut into triangles and serve with salsa."
    ]
  },
  {
    name: "Spaghetti carbonara", emoji: "🥓", type: "Meal",
    ingredients: ["250g spaghetti", "150g bacon or pancetta", "3 egg yolks", "50g parmesan", "Black pepper"],
    steps: [
      "Boil the spaghetti and save a cup of the cooking water.",
      "Fry the bacon until crisp.",
      "Mix the egg yolks with the parmesan and lots of pepper.",
      "Toss the hot pasta with the bacon, then stir in the egg mix off the heat, adding a splash of pasta water."
    ]
  },
  {
    name: "Veggie stir-fry", emoji: "🥦", type: "Meal",
    ingredients: ["Broccoli", "Carrot", "Red pepper", "Snow peas", "3 tbsp soy sauce", "1 tsp ginger", "Noodles or rice"],
    steps: [
      "Chop all the vegetables into small pieces.",
      "Heat oil in a wok until very hot.",
      "Stir-fry the vegetables with ginger for 4-5 minutes.",
      "Add the soy sauce and serve over noodles or rice."
    ]
  },
  {
    name: "Burrito bowl", emoji: "🌯", type: "Meal",
    ingredients: ["Cooked rice", "Black beans", "Grilled chicken", "Corn", "Avocado", "Salsa", "Lime"],
    steps: [
      "Put the rice in the bottom of a bowl.",
      "Add beans, chicken and corn in sections.",
      "Top with sliced avocado and salsa.",
      "Squeeze lime over everything."
    ]
  },
  {
    name: "Grilled cheese sandwich", emoji: "🥪", type: "Meal",
    ingredients: ["2 slices bread", "Butter", "Cheddar or mozzarella slices"],
    steps: [
      "Butter one side of each slice of bread.",
      "Put the cheese between the slices, buttered sides out.",
      "Fry on medium heat for 3 minutes per side until golden.",
      "Cut diagonally and serve hot."
    ]
  },
];
 
const snacks = [
  {
    name: "Fries", emoji: "🍟", type: "Snack",
    ingredients: ["4 large potatoes", "Oil", "Salt"],
    steps: [
      "Cut the potatoes into sticks and soak in cold water for 30 minutes.",
      "Dry them very well.",
      "Bake at 220°C for 30 minutes with oil, turning halfway.",
      "Sprinkle with salt."
    ]
  },
  {
    name: "Popcorn", emoji: "🍿", type: "Snack",
    ingredients: ["1/2 cup popcorn kernels", "2 tbsp oil", "Salt", "Butter (optional)"],
    steps: [
      "Heat the oil in a large pot with a lid and add 3 kernels.",
      "When they pop, add the rest and cover.",
      "Shake the pot until the popping slows down.",
      "Pour into a bowl and add salt or melted butter."
    ]
  },
  {
    name: "Dumplings", emoji: "🥟", type: "Snack",
    ingredients: ["Dumpling wrappers", "200g minced pork", "Grated ginger", "Soy sauce", "Spring onion"],
    steps: [
      "Mix the pork, ginger, soy sauce and spring onion.",
      "Put a spoonful in each wrapper, wet the edges, and fold shut.",
      "Fry the bottoms until golden.",
      "Add a splash of water, cover, and steam for 5 minutes."
    ]
  },
  {
    name: "Guacamole and chips", emoji: "🥑", type: "Snack",
    ingredients: ["2 ripe avocados", "1 lime", "1/2 red onion", "1 tomato", "Coriander", "Tortilla chips"],
    steps: [
      "Mash the avocados in a bowl.",
      "Stir in lime juice, finely chopped onion, tomato and coriander.",
      "Season with salt.",
      "Serve with tortilla chips."
    ]
  },
  {
    name: "Hummus with veggies", emoji: "🥕", type: "Snack",
    ingredients: ["1 can chickpeas", "2 tbsp tahini", "1 garlic clove", "Lemon juice", "Olive oil", "Carrot and cucumber sticks"],
    steps: [
      "Blend the chickpeas, tahini, garlic, lemon juice and a splash of water until smooth.",
      "Season with salt.",
      "Spoon into a bowl and drizzle with olive oil.",
      "Serve with carrot and cucumber sticks."
    ]
  },
  {
    name: "Garlic bread", emoji: "🧄", type: "Snack",
    ingredients: ["1 baguette", "100g soft butter", "3 garlic cloves", "Parsley"],
    steps: [
      "Heat the oven to 200°C.",
      "Mix the butter with crushed garlic and chopped parsley.",
      "Slice the baguette almost through and spread the butter inside.",
      "Wrap in foil and bake for 12 minutes."
    ]
  },
  {
    name: "Nachos", emoji: "🧀", type: "Snack",
    ingredients: ["Tortilla chips", "150g grated cheese", "Jalapeños", "Salsa", "Sour cream"],
    steps: [
      "Heat the oven to 200°C.",
      "Spread the chips on a tray and cover with cheese and jalapeños.",
      "Bake for 5-7 minutes until the cheese melts.",
      "Serve with salsa and sour cream."
    ]
  },
  {
    name: "Caprese skewers", emoji: "🍡", type: "Snack",
    ingredients: ["Cherry tomatoes", "Mini mozzarella balls", "Basil leaves", "Olive oil", "Balsamic glaze"],
    steps: [
      "Thread a tomato, a basil leaf and a mozzarella ball onto each skewer.",
      "Arrange on a plate.",
      "Drizzle with olive oil and balsamic glaze.",
      "Add a pinch of salt and serve."
    ]
  },
];
 
const desserts = [
  {
    name: "Ice cream", emoji: "🍦", type: "Dessert",
    ingredients: ["300ml double cream", "200ml condensed milk", "1 tsp vanilla"],
    steps: [
      "Whip the cream until it forms soft peaks.",
      "Gently fold in the condensed milk and vanilla.",
      "Pour into a container and freeze for 6 hours.",
      "Scoop and serve."
    ]
  },
  {
    name: "Chocolate cake", emoji: "🍰", type: "Dessert",
    ingredients: ["200g flour", "150g sugar", "50g cocoa powder", "2 eggs", "200ml milk", "100g butter"],
    steps: [
      "Heat the oven to 180°C.",
      "Mix all the ingredients into a smooth batter.",
      "Pour into a greased tin.",
      "Bake for 30-35 minutes and let it cool before serving."
    ]
  },
  {
    name: "Brownies", emoji: "🍫", type: "Dessert",
    ingredients: ["150g dark chocolate", "150g butter", "200g sugar", "3 eggs", "100g flour"],
    steps: [
      "Heat the oven to 180°C and line a small tin.",
      "Melt the chocolate and butter together, then stir in the sugar.",
      "Beat in the eggs, then fold in the flour.",
      "Bake for 22-25 minutes. The middle should still be a little soft."
    ]
  },
  {
    name: "Apple crumble", emoji: "🍎", type: "Dessert",
    ingredients: ["4 apples", "1 tsp cinnamon", "150g flour", "100g cold butter", "80g sugar"],
    steps: [
      "Heat the oven to 190°C.",
      "Slice the apples into a dish and sprinkle with cinnamon.",
      "Rub the butter into the flour and sugar until it looks like breadcrumbs.",
      "Cover the apples with the crumble and bake for 35 minutes."
    ]
  },
  {
    name: "Banana bread", emoji: "🍌", type: "Dessert",
    ingredients: ["3 ripe bananas", "80g melted butter", "150g sugar", "1 egg", "200g flour", "1 tsp baking soda"],
    steps: [
      "Heat the oven to 175°C and grease a loaf tin.",
      "Mash the bananas and mix in the butter, sugar and egg.",
      "Stir in the flour and baking soda.",
      "Pour into the tin and bake for 55 minutes."
    ]
  },
  {
    name: "Chocolate chip cookies", emoji: "🍪", type: "Dessert",
    ingredients: ["125g soft butter", "100g sugar", "1 egg", "180g flour", "150g chocolate chips"],
    steps: [
      "Heat the oven to 180°C.",
      "Beat the butter and sugar, then add the egg.",
      "Stir in the flour and chocolate chips.",
      "Place spoonfuls on a tray and bake for 10-12 minutes."
    ]
  },
  {
    name: "Rice pudding", emoji: "🍮", type: "Dessert",
    ingredients: ["100g pudding rice", "1L milk", "50g sugar", "1 tsp vanilla", "Cinnamon"],
    steps: [
      "Put the rice, milk, sugar and vanilla in a pot.",
      "Simmer gently for 35-40 minutes, stirring often.",
      "When thick and creamy, spoon into bowls.",
      "Sprinkle with cinnamon."
    ]
  },
  {
    name: "Fruit salad", emoji: "🍉", type: "Dessert",
    ingredients: ["Strawberries", "Grapes", "Pineapple", "Kiwi", "Orange juice", "Mint"],
    steps: [
      "Chop all the fruit into bite-sized pieces.",
      "Mix in a large bowl.",
      "Pour over a little orange juice.",
      "Top with mint and chill for 30 minutes."
    ]
  },
  {
    name: "Tiramisu", emoji: "☕", type: "Dessert",
    ingredients: ["250g mascarpone", "2 eggs", "60g sugar", "200ml strong coffee", "Ladyfinger biscuits", "Cocoa powder"],
    steps: [
      "Whisk the egg yolks with the sugar, then fold in the mascarpone.",
      "Whip the egg whites and fold them in gently.",
      "Dip the biscuits in the coffee and layer them in a dish with the cream.",
      "Chill for 4 hours and dust with cocoa powder."
    ]
  },
];
 
// ===================== BATCH 2: MORE FOOD =====================
 
const moreBreakfasts = [
  {
    name: "Waffles", emoji: "🧇", type: "Breakfast",
    ingredients: ["200g flour", "2 tsp baking powder", "2 eggs", "300ml milk", "50g melted butter", "1 tbsp sugar"],
    steps: [
      "Heat up the waffle iron.",
      "Whisk everything together into a smooth batter.",
      "Pour some batter into the iron and cook until golden, about 4 minutes.",
      "Serve with berries and syrup."
    ]
  },
  {
    name: "Breakfast burrito", emoji: "🌯", type: "Breakfast",
    ingredients: ["2 large tortillas", "4 eggs", "Grated cheese", "Black beans", "Salsa", "Avocado"],
    steps: [
      "Scramble the eggs in a pan.",
      "Warm the tortillas and the beans.",
      "Fill each tortilla with eggs, beans, cheese, salsa and avocado.",
      "Fold in the sides and roll up tightly."
    ]
  },
  {
    name: "Egg muffin cups", emoji: "🥚", type: "Breakfast",
    ingredients: ["6 eggs", "Chopped spinach", "Diced peppers", "Grated cheese", "Salt and pepper"],
    steps: [
      "Heat the oven to 180°C and grease a muffin tin.",
      "Divide the spinach, peppers and cheese between the holes.",
      "Beat the eggs with salt and pepper and pour over.",
      "Bake for 18-20 minutes until set."
    ]
  },
  {
    name: "Bagel with salmon", emoji: "🥯", type: "Breakfast",
    ingredients: ["1 bagel", "Cream cheese", "Smoked salmon", "Cucumber slices", "Capers", "Lemon"],
    steps: [
      "Slice and toast the bagel.",
      "Spread a thick layer of cream cheese on both halves.",
      "Add salmon, cucumber and capers.",
      "Squeeze a little lemon over the top."
    ]
  },
  {
    name: "Yoghurt parfait", emoji: "🍨", type: "Breakfast",
    ingredients: ["Greek yoghurt", "Granola", "Mixed berries", "Honey"],
    steps: [
      "Spoon some yoghurt into a glass.",
      "Add a layer of berries, then a layer of granola.",
      "Repeat the layers until the glass is full.",
      "Drizzle with honey."
    ]
  },
];
 
const moreMeals = [
  {
    name: "Butter chicken", emoji: "🍗", type: "Meal",
    ingredients: ["500g chicken thigh", "150ml yoghurt", "2 tsp garam masala", "1 onion", "1 can chopped tomatoes", "100ml cream", "Butter"],
    steps: [
      "Marinate the chicken in yoghurt and half the garam masala for 30 minutes.",
      "Fry the chicken in butter until browned and set aside.",
      "Fry the onion, add the rest of the spice and the tomatoes, and simmer 15 minutes.",
      "Blend the sauce if you want it smooth, add the chicken and cream, and simmer 10 minutes. Serve with rice or naan."
    ]
  },
  {
    name: "Beef stew", emoji: "🥘", type: "Meal",
    ingredients: ["600g stewing beef", "3 carrots", "3 potatoes", "1 onion", "500ml beef stock", "2 tbsp tomato puree", "Thyme"],
    steps: [
      "Brown the beef in batches in a heavy pot.",
      "Fry the onion, stir in the tomato puree, then return the beef.",
      "Add the stock and thyme, cover, and simmer 1 hour.",
      "Add the chopped carrots and potatoes and cook 45 more minutes until tender."
    ]
  },
  {
    name: "Fish and chips", emoji: "🐟", type: "Meal",
    ingredients: ["2 white fish fillets", "100g flour", "150ml cold sparkling water", "4 potatoes", "Oil", "Lemon"],
    steps: [
      "Cut the potatoes into chips and bake at 220°C for 35 minutes.",
      "Whisk the flour and sparkling water into a thin batter.",
      "Dip the fish in the batter and fry for 4-5 minutes until golden.",
      "Serve with the chips, salt and lemon."
    ]
  },
  {
    name: "Chicken fajitas", emoji: "🫑", type: "Meal",
    ingredients: ["2 chicken breasts", "2 peppers", "1 onion", "2 tsp fajita seasoning", "Tortillas", "Sour cream"],
    steps: [
      "Slice the chicken, peppers and onion into strips.",
      "Fry the chicken with the seasoning until cooked through.",
      "Add the peppers and onion and cook 5 minutes.",
      "Serve in warm tortillas with sour cream."
    ]
  },
  {
    name: "Mushroom risotto", emoji: "🍄", type: "Meal",
    ingredients: ["300g arborio rice", "250g mushrooms", "1 onion", "1L hot vegetable stock", "100ml white wine", "Parmesan", "Butter"],
    steps: [
      "Fry the onion and mushrooms in butter until golden.",
      "Add the rice and stir for 1 minute, then pour in the wine.",
      "Add the hot stock a ladle at a time, stirring, until the rice is creamy (about 20 minutes).",
      "Stir in parmesan and a knob of butter."
    ]
  },
  {
    name: "Shepherd's pie", emoji: "🥧", type: "Meal",
    ingredients: ["500g minced lamb", "1 onion", "2 carrots", "200ml stock", "800g potatoes", "Butter", "Milk"],
    steps: [
      "Boil the potatoes, then mash with butter and milk.",
      "Brown the lamb with the onion and carrots, then add the stock and simmer 15 minutes.",
      "Put the meat in a dish and cover with mash.",
      "Bake at 200°C for 25 minutes until golden on top."
    ]
  },
  {
    name: "Teriyaki salmon", emoji: "🍱", type: "Meal",
    ingredients: ["2 salmon fillets", "3 tbsp soy sauce", "2 tbsp honey", "1 tbsp rice vinegar", "Ginger", "Rice", "Broccoli"],
    steps: [
      "Mix the soy sauce, honey, vinegar and grated ginger.",
      "Fry the salmon skin-side down for 4 minutes, then flip.",
      "Pour in the sauce and let it bubble for 2 minutes.",
      "Serve on rice with steamed broccoli."
    ]
  },
  {
    name: "Tomato soup", emoji: "🍅", type: "Meal",
    ingredients: ["1 onion", "2 garlic cloves", "2 cans chopped tomatoes", "500ml vegetable stock", "Basil", "Cream (optional)"],
    steps: [
      "Fry the onion and garlic in oil until soft.",
      "Add the tomatoes and stock and simmer 20 minutes.",
      "Blend until smooth and season.",
      "Add a swirl of cream and the basil."
    ]
  },
  {
    name: "Pesto pasta", emoji: "🌿", type: "Meal",
    ingredients: ["250g pasta", "4 tbsp basil pesto", "Cherry tomatoes", "Pine nuts", "Parmesan"],
    steps: [
      "Boil the pasta and save a little cooking water.",
      "Drain and toss with the pesto and a splash of pasta water.",
      "Add halved cherry tomatoes.",
      "Top with toasted pine nuts and parmesan."
    ]
  },
  {
    name: "Stuffed peppers", emoji: "🫑", type: "Meal",
    ingredients: ["4 bell peppers", "1 cup cooked rice", "300g minced beef or beans", "1 can chopped tomatoes", "Cheese"],
    steps: [
      "Heat the oven to 190°C and cut the tops off the peppers.",
      "Brown the mince, then mix with the rice and tomatoes.",
      "Fill the peppers, top with cheese, and stand them in a dish.",
      "Bake for 35 minutes."
    ]
  },
  {
    name: "Chicken Caesar salad", emoji: "🥬", type: "Meal",
    ingredients: ["2 chicken breasts", "Romaine lettuce", "Croutons", "Parmesan shavings", "Caesar dressing"],
    steps: [
      "Grill or pan-fry the chicken until cooked through, then slice.",
      "Tear the lettuce into a bowl.",
      "Toss with the dressing.",
      "Top with chicken, croutons and parmesan."
    ]
  },
  {
    name: "Beef stroganoff", emoji: "🍖", type: "Meal",
    ingredients: ["400g beef strips", "250g mushrooms", "1 onion", "200ml beef stock", "150ml sour cream", "Egg noodles"],
    steps: [
      "Sear the beef strips quickly and set aside.",
      "Fry the onion and mushrooms until golden.",
      "Add the stock and simmer 5 minutes, then stir in the sour cream and beef.",
      "Serve over noodles."
    ]
  },
  {
    name: "Chickpea curry", emoji: "🫘", type: "Meal",
    ingredients: ["2 cans chickpeas", "1 onion", "2 garlic cloves", "2 tbsp curry powder", "1 can coconut milk", "Spinach", "Rice"],
    steps: [
      "Fry the onion and garlic, then stir in the curry powder.",
      "Add the chickpeas and coconut milk and simmer 15 minutes.",
      "Stir in the spinach until wilted.",
      "Serve over rice."
    ]
  },
  {
    name: "Spaghetti and meatballs", emoji: "🍝", type: "Meal",
    ingredients: ["400g minced beef", "1 egg", "50g breadcrumbs", "Parmesan", "Tomato sauce", "250g spaghetti"],
    steps: [
      "Mix the beef, egg, breadcrumbs and parmesan, then roll into balls.",
      "Brown the meatballs in a pan.",
      "Add the tomato sauce and simmer 15 minutes.",
      "Serve over boiled spaghetti."
    ]
  },
  {
    name: "Bibimbap", emoji: "🍲", type: "Meal",
    ingredients: ["Cooked rice", "Spinach", "Carrot", "Zucchini", "Beef strips or tofu", "1 fried egg", "Gochujang", "Sesame oil"],
    steps: [
      "Stir-fry the beef or tofu, and separately sauté each vegetable with a pinch of salt.",
      "Put the warm rice in a bowl.",
      "Arrange the toppings in sections and place a fried egg on top.",
      "Add gochujang and sesame oil, then mix everything at the table."
    ]
  },
  {
    name: "Lentil soup", emoji: "🥣", type: "Meal",
    ingredients: ["200g red lentils", "1 onion", "2 carrots", "1 tsp cumin", "1L vegetable stock", "Lemon"],
    steps: [
      "Fry the chopped onion and carrots with the cumin.",
      "Add the lentils and stock.",
      "Simmer 25 minutes until the lentils are soft.",
      "Blend if you like, then finish with a squeeze of lemon."
    ]
  },
  {
    name: "Jacket potato", emoji: "🥔", type: "Meal",
    ingredients: ["2 large potatoes", "Olive oil", "Salt", "Butter", "Baked beans", "Grated cheese"],
    steps: [
      "Heat the oven to 200°C.",
      "Prick the potatoes, rub with oil and salt.",
      "Bake for 60-75 minutes until the skin is crisp.",
      "Split open and fill with butter, beans and cheese."
    ]
  },
  {
    name: "Sausage and mash", emoji: "🌭", type: "Meal",
    ingredients: ["4 sausages", "800g potatoes", "Butter", "Milk", "1 onion", "Gravy"],
    steps: [
      "Boil the potatoes until soft, then mash with butter and milk.",
      "Fry or bake the sausages for 20 minutes, turning often.",
      "Fry the sliced onion until sweet and golden.",
      "Serve with gravy."
    ]
  },
  {
    name: "Egg fried noodles", emoji: "🍜", type: "Meal",
    ingredients: ["2 nests egg noodles", "2 eggs", "Spring onions", "Soy sauce", "Sesame oil", "Garlic"],
    steps: [
      "Cook the noodles and drain.",
      "Scramble the eggs in a hot wok with garlic.",
      "Add the noodles, soy sauce and sesame oil and toss for 2 minutes.",
      "Top with spring onions."
    ]
  },
  {
    name: "Baked salmon with vegetables", emoji: "🐠", type: "Meal",
    ingredients: ["2 salmon fillets", "Asparagus or green beans", "Cherry tomatoes", "Olive oil", "Lemon", "Salt and pepper"],
    steps: [
      "Heat the oven to 200°C.",
      "Put the salmon and vegetables on a tray, drizzle with oil, and season.",
      "Add lemon slices on top.",
      "Bake for 15 minutes."
    ]
  },
];
 
const moreSnacks = [
  {
    name: "Onion rings", emoji: "🧅", type: "Snack",
    ingredients: ["2 large onions", "100g flour", "150ml cold beer or sparkling water", "Breadcrumbs", "Oil"],
    steps: [
      "Slice the onions into thick rings.",
      "Whisk the flour and beer into a batter and dip in the rings.",
      "Coat in breadcrumbs.",
      "Fry in hot oil for 2-3 minutes until golden."
    ]
  },
  {
    name: "Spring rolls", emoji: "🥠", type: "Snack",
    ingredients: ["Spring roll wrappers", "Shredded cabbage", "Carrot", "Glass noodles", "Soy sauce", "Oil"],
    steps: [
      "Stir-fry the cabbage, carrot and noodles with soy sauce, then cool.",
      "Put a spoonful on each wrapper and roll up, sealing the edge with water.",
      "Fry for 3-4 minutes until crisp, or bake at 200°C for 15 minutes.",
      "Serve with sweet chilli sauce."
    ]
  },
  {
    name: "Bruschetta", emoji: "🍞", type: "Snack",
    ingredients: ["Baguette slices", "4 tomatoes", "1 garlic clove", "Basil", "Olive oil", "Balsamic vinegar"],
    steps: [
      "Toast the baguette slices and rub with the cut garlic.",
      "Dice the tomatoes and mix with basil, oil and a little balsamic.",
      "Spoon onto the toast.",
      "Serve right away so it stays crisp."
    ]
  },
  {
    name: "Deviled eggs", emoji: "🥚", type: "Snack",
    ingredients: ["6 eggs", "3 tbsp mayonnaise", "1 tsp mustard", "Paprika", "Salt"],
    steps: [
      "Hard-boil the eggs for 10 minutes, cool, and peel.",
      "Halve them and scoop out the yolks.",
      "Mash the yolks with mayonnaise, mustard and salt.",
      "Spoon back into the whites and dust with paprika."
    ]
  },
  {
    name: "Chicken wings", emoji: "🍗", type: "Snack",
    ingredients: ["1kg chicken wings", "1 tbsp baking powder", "Salt", "3 tbsp hot sauce", "2 tbsp melted butter"],
    steps: [
      "Toss the wings with baking powder and salt.",
      "Bake at 220°C on a rack for 45 minutes, turning halfway.",
      "Mix the hot sauce and melted butter.",
      "Toss the wings in the sauce and serve."
    ]
  },
  {
    name: "Mozzarella sticks", emoji: "🧀", type: "Snack",
    ingredients: ["Mozzarella sticks", "Flour", "2 eggs", "Breadcrumbs", "Oil", "Marinara sauce"],
    steps: [
      "Roll each stick in flour, then egg, then breadcrumbs.",
      "Repeat the egg and breadcrumbs for a thicker coating and freeze for 30 minutes.",
      "Fry for 1-2 minutes until golden.",
      "Serve with marinara sauce."
    ]
  },
  {
    name: "Stuffed mushrooms", emoji: "🍄", type: "Snack",
    ingredients: ["12 button mushrooms", "100g cream cheese", "2 garlic cloves", "Breadcrumbs", "Parsley"],
    steps: [
      "Heat the oven to 200°C and remove the mushroom stalks.",
      "Mix the cream cheese with crushed garlic and parsley.",
      "Fill the mushroom caps and sprinkle with breadcrumbs.",
      "Bake for 20 minutes."
    ]
  },
  {
    name: "Edamame", emoji: "🫛", type: "Snack",
    ingredients: ["300g edamame in pods", "Sea salt", "Chilli flakes (optional)"],
    steps: [
      "Boil the pods in salted water for 4-5 minutes.",
      "Drain well.",
      "Sprinkle with sea salt and chilli flakes.",
      "Squeeze the beans out of the pods to eat."
    ]
  },
  {
    name: "Sweet potato fries", emoji: "🍠", type: "Snack",
    ingredients: ["2 sweet potatoes", "2 tbsp oil", "1 tsp paprika", "Salt"],
    steps: [
      "Heat the oven to 220°C.",
      "Cut the potatoes into thin sticks and toss with oil, paprika and salt.",
      "Spread out on a tray without crowding.",
      "Bake for 25 minutes, turning once."
    ]
  },
  {
    name: "Cheese board", emoji: "🧀", type: "Snack",
    ingredients: ["3 kinds of cheese", "Crackers", "Grapes", "Nuts", "Honey or jam"],
    steps: [
      "Take the cheese out of the fridge 30 minutes early.",
      "Place the cheeses on a board with knives.",
      "Fill the gaps with crackers, grapes and nuts.",
      "Add a small bowl of honey or jam."
    ]
  },
];
 
const moreDesserts = [
  {
    name: "No-bake cheesecake", emoji: "🍰", type: "Dessert",
    ingredients: ["200g digestive biscuits", "100g melted butter", "400g cream cheese", "200ml double cream", "80g icing sugar", "Berries"],
    steps: [
      "Crush the biscuits, mix with the butter, and press into a tin.",
      "Beat the cream cheese, cream and sugar until thick.",
      "Spread over the base and chill for 4 hours.",
      "Top with berries."
    ]
  },
  {
    name: "Churros", emoji: "🥨", type: "Dessert",
    ingredients: ["250ml water", "2 tbsp sugar", "100g flour", "1 tbsp oil", "Cinnamon sugar", "Chocolate sauce"],
    steps: [
      "Boil the water, sugar and oil, then stir in the flour to make a dough.",
      "Pipe or shape into sticks.",
      "Fry in hot oil until golden.",
      "Roll in cinnamon sugar and serve with chocolate sauce."
    ]
  },
  {
    name: "Chocolate mousse", emoji: "🍫", type: "Dessert",
    ingredients: ["200g dark chocolate", "3 eggs", "300ml double cream", "1 tbsp sugar"],
    steps: [
      "Melt the chocolate and let it cool slightly, then stir in the egg yolks.",
      "Whip the cream and fold it into the chocolate.",
      "Whisk the egg whites with the sugar until stiff and fold in gently.",
      "Spoon into glasses and chill for 3 hours."
    ]
  },
  {
    name: "Crepes", emoji: "🥞", type: "Dessert",
    ingredients: ["125g flour", "2 eggs", "250ml milk", "1 tbsp melted butter", "Chocolate spread", "Sliced banana"],
    steps: [
      "Whisk the flour, eggs, milk and butter into a thin batter.",
      "Pour a thin layer into a hot pan and swirl.",
      "Cook 1 minute per side.",
      "Fill with chocolate spread and banana, then fold."
    ]
  },
  {
    name: "Banana split", emoji: "🍌", type: "Dessert",
    ingredients: ["1 banana", "3 scoops ice cream", "Chocolate sauce", "Whipped cream", "Cherries", "Chopped nuts"],
    steps: [
      "Split the banana lengthways and place in a long dish.",
      "Add three scoops of ice cream in a row.",
      "Pour over the chocolate sauce.",
      "Add whipped cream, cherries and nuts."
    ]
  },
  {
    name: "Mug cake", emoji: "☕", type: "Dessert",
    ingredients: ["4 tbsp flour", "3 tbsp sugar", "2 tbsp cocoa powder", "1 egg", "3 tbsp milk", "2 tbsp oil"],
    steps: [
      "Mix all the ingredients in a large mug until smooth.",
      "Microwave for 90 seconds.",
      "Let it cool for a minute.",
      "Eat straight from the mug."
    ]
  },
  {
    name: "Baked apples", emoji: "🍏", type: "Dessert",
    ingredients: ["4 apples", "3 tbsp raisins", "2 tbsp brown sugar", "1 tsp cinnamon", "Butter"],
    steps: [
      "Heat the oven to 180°C and core the apples.",
      "Mix the raisins, sugar and cinnamon and stuff into the apples.",
      "Top each with a small piece of butter.",
      "Bake for 40 minutes until soft."
    ]
  },
  {
    name: "Panna cotta", emoji: "🍮", type: "Dessert",
    ingredients: ["400ml double cream", "100ml milk", "50g sugar", "3 gelatine leaves", "1 tsp vanilla", "Berry sauce"],
    steps: [
      "Soak the gelatine leaves in cold water.",
      "Warm the cream, milk, sugar and vanilla until the sugar dissolves.",
      "Squeeze the gelatine and stir it into the warm cream.",
      "Pour into glasses, chill for 4 hours, and top with berry sauce."
    ]
  },
  {
    name: "Peanut butter cookies", emoji: "🥜", type: "Dessert",
    ingredients: ["1 cup peanut butter", "1/2 cup sugar", "1 egg"],
    steps: [
      "Heat the oven to 175°C.",
      "Mix the three ingredients into a dough.",
      "Roll into balls, place on a tray, and press down with a fork.",
      "Bake for 10 minutes and cool before moving."
    ]
  },
  {
    name: "Lemon sorbet", emoji: "🍋", type: "Dessert",
    ingredients: ["200g sugar", "250ml water", "250ml lemon juice", "Zest of 2 lemons"],
    steps: [
      "Heat the sugar and water until dissolved, then cool.",
      "Stir in the lemon juice and zest.",
      "Freeze in a container, stirring with a fork every hour for 4 hours.",
      "Scoop and serve."
    ]
  },
  {
  name: "Ratatouille", emoji: "🍆", type: "Meal",
  ingredients: [
    "1 aubergine (eggplant)",
    "2 courgettes (zucchini)",
    "1 red pepper",
    "1 yellow pepper",
    "1 onion",
    "3 garlic cloves",
    "1 can chopped tomatoes",
    "3 tbsp olive oil",
    "Fresh thyme",
    "Basil",
    "Salt and pepper"
  ],
  steps: [
    "Chop the aubergine, courgettes and peppers into 2cm chunks.",
    "Heat the olive oil in a large pot and fry the chopped onion for 5 minutes until soft. Add the garlic and cook 1 minute.",
    "Add the aubergine and fry for 5 minutes, then add the courgettes and peppers and cook another 5 minutes.",
    "Pour in the tomatoes, add the thyme, salt and pepper, and stir.",
    "Cover and simmer on low heat for 30-40 minutes, stirring now and then, until everything is soft.",
    "Tear in the basil and serve warm with crusty bread, rice, or as a side dish."
  ]
},
];
 
const foods = [
  ...breakfasts, ...meals, ...snacks, ...desserts,
  ...moreBreakfasts, ...moreMeals, ...moreSnacks, ...moreDesserts,
];
 
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
btnJS.addEventListener("click", function() {
    const food = pickFood();
dishJS.textContent = food.emoji + " " + food.name;
recipeBtn.disabled = false;
});

