export const Az = title => title.sort((a, b) => a.title >= b.title ? 1:-1 )
export const Za = title => title.sort((a, b) => a.title >= b.title ? -1:1 )
export const higherScore = score => score.sort((a, b) => a.spoonacularScore >= b.spoonacularScore ? -1:1 )
export const lowerScore = score => score.sort((a, b) => a.spoonacularScore >= b.spoonacularScore ? 1:-1 )
export const matchDiets = (all, selected) => all.filter(r=>r.diets.sort().join().includes(selected.sort()))
export const allRecipes = [
    {
    "vegetarian": true,
    "vegan": true,
    "glutenFree": true,
    "dairyFree": true,
    "veryHealthy": true,
    "cheap": false,
    "veryPopular": true,
    "sustainable": false,
    "weightWatcherSmartPoints": 4,
    "gaps": "no",
    "lowFodmap": false,
    "aggregateLikes": 3689,
    "spoonacularScore": 100,
    "healthScore": 76,
    "creditsText": "Full Belly Sisters",
    "license": "CC BY-SA 3.0",
    "sourceName": "Full Belly Sisters",
    "pricePerServing": 112.39,
    "id": 716426,
    "title": "Cauliflower, Brown Rice, and Vegetable Fried Rice",
    "readyInMinutes": 30,
    "servings": 8,
    "sourceUrl": "http://fullbellysisters.blogspot.com/2012/01/cauliflower-fried-rice-more-veggies.html",
    "image": "https://spoonacular.com/recipeImages/716426-312x231.jpg",
    "imageType": "jpg",
    "summary": "Cauliflower, Brown Rice, and Vegetable Fried Rice might be a good recipe to expand your side dish recipe box. Watching your figure? This gluten free, dairy free, lacto ovo vegetarian, and vegan recipe has <b>192 calories</b>, <b>7g of protein</b>, and <b>6g of fat</b> per serving. For <b>$1.12 per serving</b>, this recipe <b>covers 19%</b> of your daily requirements of vitamins and minerals. This recipe serves 8. This recipe from fullbellysisters.blogspot.com has 3689 fans. This recipe is typical of Chinese cuisine. From preparation to the plate, this recipe takes about <b>30 minutes</b>. Head to the store and pick up peas, broccoli, salt, and a few other things to make it today. Overall, this recipe earns an <b>awesome spoonacular score of 100%</b>. Users who liked this recipe also liked <a href=\"https://spoonacular.com/recipes/vegetable-fried-brown-rice-36199\">Vegetable Fried Brown Rice</a>, <a href=\"https://spoonacular.com/recipes/vegetable-fried-cauliflower-rice-933261\">Vegetable Fried Cauliflower Rice</a>, and <a href=\"https://spoonacular.com/recipes/easy-vegetable-fried-brown-rice-with-egg-802042\">Easy Vegetable Fried Brown Rice with Egg</a>.",
    "cuisines": [
    "Chinese",
    "Asian"
    ],
    "dishTypes": [
    "side dish"
    ],
    "diets": [
    "gluten free",
    "dairy free",
    "lacto ovo vegetarian",
    "vegan"
    ],
    "occasions": [],
    "analyzedInstructions": [
    {
    "name": "",
    "steps": [
    {
    "number": 1,
    "step": "Remove the cauliflower's tough stem and reserve for another use. Using a food processor, pulse cauliflower florets until they resemble rice or couscous. You should end up with around four cups of \"cauliflower rice.\"",
    "ingredients": [
    {
    "id": 10011135,
    "name": "cauliflower florets",
    "localizedName": "cauliflower florets",
    "image": "cauliflower.jpg"
    },
    {
    "id": 10111135,
    "name": "cauliflower rice",
    "localizedName": "cauliflower rice",
    "image": "cauliflower.jpg"
    },
    {
    "id": 11135,
    "name": "cauliflower",
    "localizedName": "cauliflower",
    "image": "cauliflower.jpg"
    },
    {
    "id": 20028,
    "name": "couscous",
    "localizedName": "couscous",
    "image": "couscous-cooked.jpg"
    },
    {
    "id": 20444,
    "name": "rice",
    "localizedName": "rice",
    "image": "uncooked-white-rice.png"
    }
    ],
    "equipment": [
    {
    "id": 404771,
    "name": "food processor",
    "localizedName": "food processor",
    "image": "food-processor.png"
    }
    ]
    },
    {
    "number": 2,
    "step": "Heat 1T butter and 1T oil in a large skillet over medium heat.",
    "ingredients": [
    {
    "id": 1001,
    "name": "butter",
    "localizedName": "butter",
    "image": "butter-sliced.jpg"
    },
    {
    "id": 4582,
    "name": "cooking oil",
    "localizedName": "cooking oil",
    "image": "vegetable-oil.jpg"
    }
    ],
    "equipment": [
    {
    "id": 404645,
    "name": "frying pan",
    "localizedName": "frying pan",
    "image": "pan.png"
    }
    ]
    },
    {
    "number": 3,
    "step": "Add garlic and the white and light green pieces of scallion. Sauté about a minute.",
    "ingredients": [
    {
    "id": 11291,
    "name": "green onions",
    "localizedName": "green onions",
    "image": "spring-onions.jpg"
    },
    {
    "id": 11215,
    "name": "garlic",
    "localizedName": "garlic",
    "image": "garlic.png"
    }
    ],
    "equipment": []
    },
    {
    "number": 4,
    "step": "Add the cauliflower to the pan. Stir to coat with oil, then spread out in pan and let sit; you want it cook a bit and to caramelize (get a bit brown), which will bring out the sweetness. After a couple of minutes, stir and spread out again.",
    "ingredients": [
    {
    "id": 11135,
    "name": "cauliflower",
    "localizedName": "cauliflower",
    "image": "cauliflower.jpg"
    },
    {
    "id": 0,
    "name": "spread",
    "localizedName": "spread",
    "image": ""
    },
    {
    "id": 4582,
    "name": "cooking oil",
    "localizedName": "cooking oil",
    "image": "vegetable-oil.jpg"
    }
    ],
    "equipment": [
    {
    "id": 404645,
    "name": "frying pan",
    "localizedName": "frying pan",
    "image": "pan.png"
    }
    ]
    },
    {
    "number": 5,
    "step": "Add cold rice (it separates easily, so it won't clump up during cooking), plus the additional grapeseed and coconut oil or butter. Raise heat to medium-high. Toss everything together and, again, spread the mixture out over the whole pan and press a bit into the bottom.",
    "ingredients": [
    {
    "id": 4047,
    "name": "coconut oil",
    "localizedName": "coconut oil",
    "image": "oil-coconut.jpg"
    },
    {
    "id": 1001,
    "name": "butter",
    "localizedName": "butter",
    "image": "butter-sliced.jpg"
    },
    {
    "id": 0,
    "name": "spread",
    "localizedName": "spread",
    "image": ""
    },
    {
    "id": 20444,
    "name": "rice",
    "localizedName": "rice",
    "image": "uncooked-white-rice.png"
    }
    ],
    "equipment": [
    {
    "id": 404645,
    "name": "frying pan",
    "localizedName": "frying pan",
    "image": "pan.png"
    }
    ]
    },
    {
    "number": 6,
    "step": "Let it sit for about two minutes—so the rice can get toasted and a little crispy.",
    "ingredients": [
    {
    "id": 20444,
    "name": "rice",
    "localizedName": "rice",
    "image": "uncooked-white-rice.png"
    }
    ],
    "equipment": [],
    "length": {
    "number": 2,
    "unit": "minutes"
    }
    },
    {
    "number": 7,
    "step": "Add the peas and broccoli and stir again.",
    "ingredients": [
    {
    "id": 11090,
    "name": "broccoli",
    "localizedName": "broccoli",
    "image": "broccoli.jpg"
    },
    {
    "id": 11304,
    "name": "peas",
    "localizedName": "peas",
    "image": "peas.jpg"
    }
    ],
    "equipment": []
    },
    {
    "number": 8,
    "step": "Drizzle soy sauce and toasted sesame oil over rice.Cook for another minute or so and turn off heat.",
    "ingredients": [
    {
    "id": 4058,
    "name": "sesame oil",
    "localizedName": "sesame oil",
    "image": "sesame-oil.png"
    },
    {
    "id": 16124,
    "name": "soy sauce",
    "localizedName": "soy sauce",
    "image": "soy-sauce.jpg"
    },
    {
    "id": 20444,
    "name": "rice",
    "localizedName": "rice",
    "image": "uncooked-white-rice.png"
    }
    ],
    "equipment": []
    },
    {
    "number": 9,
    "step": "Add chopped scallion tops and toss.I like to toast some sesame seeds in a dry pan; I sprinkle these and some more raw, chopped scallion over the top of the rice for added flavor and crunch.Season to taste with salt and, if you'd like, more soy sauce. Keep in mind that if you're serving this with something salty and saucy (ie. teriyaki chicken) you may want to hold off on adding too much salt to the fried rice.",
    "ingredients": [
    {
    "id": 12023,
    "name": "sesame seeds",
    "localizedName": "sesame seeds",
    "image": "sesame-seeds.png"
    },
    {
    "id": 16124,
    "name": "soy sauce",
    "localizedName": "soy sauce",
    "image": "soy-sauce.jpg"
    },
    {
    "id": 11291,
    "name": "green onions",
    "localizedName": "green onions",
    "image": "spring-onions.jpg"
    },
    {
    "id": 5006,
    "name": "whole chicken",
    "localizedName": "whole chicken",
    "image": "whole-chicken.jpg"
    },
    {
    "id": 18070,
    "name": "toast",
    "localizedName": "toast",
    "image": "toast"
    },
    {
    "id": 20444,
    "name": "rice",
    "localizedName": "rice",
    "image": "uncooked-white-rice.png"
    },
    {
    "id": 2047,
    "name": "salt",
    "localizedName": "salt",
    "image": "salt.jpg"
    }
    ],
    "equipment": [
    {
    "id": 404645,
    "name": "frying pan",
    "localizedName": "frying pan",
    "image": "pan.png"
    }
    ]
    }
    ]
    }
    ],
    "spoonacularSourceUrl": "https://spoonacular.com/cauliflower-brown-rice-and-vegetable-fried-rice-716426"
    },
    {
    "vegetarian": true,
    "vegan": true,
    "glutenFree": false,
    "dairyFree": true,
    "veryHealthy": true,
    "cheap": false,
    "veryPopular": true,
    "sustainable": false,
    "weightWatcherSmartPoints": 19,
    "gaps": "no",
    "lowFodmap": false,
    "aggregateLikes": 1669,
    "spoonacularScore": 99,
    "healthScore": 78,
    "creditsText": "Jen West",
    "sourceName": "Pink When",
    "pricePerServing": 83.23,
    "id": 715594,
    "title": "Homemade Garlic and Basil French Fries",
    "readyInMinutes": 45,
    "servings": 2,
    "sourceUrl": "http://www.pinkwhen.com/homemade-french-fries/",
    "image": "https://spoonacular.com/recipeImages/715594-312x231.jpg",
    "imageType": "jpg",
    "summary": "The recipe Homemade Garlic and Basil French Fries is ready <b>in roughly 45 minutes</b> and is definitely a super <b>vegan</b> option for lovers of American food. One serving contains <b>596 calories</b>, <b>18g of protein</b>, and <b>15g of fat</b>. For <b>83 cents per serving</b>, you get a side dish that serves 2. Several people made this recipe, and 1669 would say it hit the spot. If you have garlic salt, flour, garlic powder, and a few other ingredients on hand, you can make it. All things considered, we decided this recipe <b>deserves a spoonacular score of 100%</b>. This score is outstanding. Try <a href=\"https://spoonacular.com/recipes/homemade-french-fries-with-fresh-garlic-and-dill-494220\">Homemade French Fries with Fresh Garlic and Dill</a>, <a href=\"https://spoonacular.com/recipes/roasted-garlic-french-fries-519898\">Roasted Garlic French Fries</a>, and <a href=\"https://spoonacular.com/recipes/sweet-potato-fries-with-basil-salt-and-garlic-mayonnaise-120735\">Sweet Potato Fries With Basil Salt and Garlic Mayonnaise</a> for similar recipes.",
    "cuisines": [
    "American"
    ],
    "dishTypes": [
    "lunch",
    "main course",
    "main dish",
    "dinner"
    ],
    "diets": [
    "dairy free",
    "lacto ovo vegetarian",
    "vegan"
    ],
    "occasions": [],
    "analyzedInstructions": [],
    "spoonacularSourceUrl": "https://spoonacular.com/homemade-garlic-and-basil-french-fries-715594"
    },
    {
    "vegetarian": true,
    "vegan": false,
    "glutenFree": false,
    "dairyFree": false,
    "veryHealthy": true,
    "cheap": false,
    "veryPopular": true,
    "sustainable": false,
    "weightWatcherSmartPoints": 15,
    "gaps": "no",
    "lowFodmap": false,
    "preparationMinutes": 5,
    "cookingMinutes": 0,
    "aggregateLikes": 689,
    "spoonacularScore": 99,
    "healthScore": 63,
    "creditsText": "Jen West",
    "sourceName": "Pink When",
    "pricePerServing": 204.29,
    "id": 715497,
    "title": "Berry Banana Breakfast Smoothie",
    "readyInMinutes": 5,
    "servings": 1,
    "sourceUrl": "http://www.pinkwhen.com/berry-banana-breakfast-smoothie/",
    "image": "https://spoonacular.com/recipeImages/715497-312x231.jpg",
    "imageType": "jpg",
    "summary": "If you have around <b>5 minutes</b> to spend in the kitchen, Berry Banana Breakfast Smoothie might be a tremendous <b>lacto ovo vegetarian</b> recipe to try. This recipe makes 1 servings with <b>501 calories</b>, <b>21g of protein</b>, and <b>11g of fat</b> each. For <b>$2.19 per serving</b>, this recipe <b>covers 32%</b> of your daily requirements of vitamins and minerals. 688 people found this recipe to be tasty and satisfying. It is brought to you by Pink When. Head to the store and pick up graham crackers, soy milk, banana, and a few other things to make it today. It works well as a morn meal. Overall, this recipe earns a <b>super spoonacular score of 100%</b>. If you like this recipe, take a look at these similar recipes: <a href=\"https://spoonacular.com/recipes/berry-banana-breakfast-smoothie-249239\">Berry Banana Breakfast Smoothie</a>, <a href=\"https://spoonacular.com/recipes/berry-and-banana-oat-breakfast-smoothie-626817\">Berry and Bananan Oat Breakfast Smoothie</a>, and <a href=\"https://spoonacular.com/recipes/berry-breakfast-smoothie-774875\">Berry Breakfast Smoothie</a>.",
    "cuisines": [],
    "dishTypes": [
    "morning meal",
    "brunch",
    "breakfast"
    ],
    "diets": [
    "lacto ovo vegetarian"
    ],
    "occasions": [],
    "analyzedInstructions": [
    {
    "name": "",
    "steps": [
    {
    "number": 1,
    "step": "Take some yogurt in your favorite flavor and add 1 container to your blender.",
    "ingredients": [
    {
    "id": 1116,
    "name": "yogurt",
    "localizedName": "yogurt",
    "image": "plain-yogurt.jpg"
    }
    ],
    "equipment": [
    {
    "id": 404726,
    "name": "blender",
    "localizedName": "blender",
    "image": "blender.png"
    }
    ]
    },
    {
    "number": 2,
    "step": "Add in the berries, banana, and soy milk and blend. Top your glass with a few graham cracker crumbs and serve.",
    "ingredients": [
    {
    "id": 10018617,
    "name": "graham cracker crumbs",
    "localizedName": "graham cracker crumbs",
    "image": "graham-crackers.jpg"
    },
    {
    "id": 16223,
    "name": "soymilk",
    "localizedName": "soymilk",
    "image": "soy-milk.jpg"
    },
    {
    "id": 1009054,
    "name": "berries",
    "localizedName": "berries",
    "image": "berries-mixed.jpg"
    },
    {
    "id": 9040,
    "name": "banana",
    "localizedName": "banana",
    "image": "bananas.jpg"
    }
    ],
    "equipment": []
    }
    ]
    }
    ],
    "spoonacularSourceUrl": "https://spoonacular.com/berry-banana-breakfast-smoothie-715497"
    },
    {
    "vegetarian": true,
    "vegan": true,
    "glutenFree": true,
    "dairyFree": true,
    "veryHealthy": true,
    "cheap": false,
    "veryPopular": false,
    "sustainable": false,
    "weightWatcherSmartPoints": 5,
    "gaps": "no",
    "lowFodmap": false,
    "aggregateLikes": 19,
    "spoonacularScore": 99,
    "healthScore": 93,
    "creditsText": "Foodista.com – The Cooking Encyclopedia Everyone Can Edit",
    "license": "CC BY 3.0",
    "sourceName": "Foodista",
    "pricePerServing": 69.09,
    "id": 644387,
    "title": "Garlicky Kale",
    "readyInMinutes": 45,
    "servings": 2,
    "sourceUrl": "http://www.foodista.com/recipe/J2FTJBF7/garlicky-kale",
    "image": "https://spoonacular.com/recipeImages/644387-312x231.jpg",
    "imageType": "jpg",
    "summary": "Garlicky Kale might be just the side dish you are searching for. This caveman, gluten free, primal, and whole 30 recipe serves 2 and costs <b>69 cents per serving</b>. One serving contains <b>179 calories</b>, <b>3g of protein</b>, and <b>15g of fat</b>. A few people made this recipe, and 17 would say it hit the spot. If you have olive oil, garlic, curly kale, and a few other ingredients on hand, you can make it. From preparation to the plate, this recipe takes around <b>45 minutes</b>. All things considered, we decided this recipe <b>deserves a spoonacular score of 99%</b>. This score is awesome. Try <a href=\"https://spoonacular.com/recipes/garlicky-kale-248759\">Garlicky Kale</a>, <a href=\"https://spoonacular.com/recipes/garlicky-kale-14910\">Garlicky Kale</a>, and <a href=\"https://spoonacular.com/recipes/garlicky-kale-crostini-15010\">Garlicky Kale Crostini</a> for similar recipes.",
    "cuisines": [],
    "dishTypes": [
    "side dish"
    ],
    "diets": [
    "gluten free",
    "dairy free",
    "paleolithic",
    "lacto ovo vegetarian",
    "primal",
    "vegan"
    ],
    "occasions": [],
    "analyzedInstructions": [
    {
    "name": "",
    "steps": [
    {
    "number": 1,
    "step": "Heat the olive oil in a large pot over medium heat.",
    "ingredients": [
    {
    "id": 4053,
    "name": "olive oil",
    "localizedName": "olive oil",
    "image": "olive-oil.jpg"
    }
    ],
    "equipment": [
    {
    "id": 404752,
    "name": "pot",
    "localizedName": "pot",
    "image": "stock-pot.jpg"
    }
    ]
    },
    {
    "number": 2,
    "step": "Add the kale and cover.Stir occasionally until the volume of the kale is reduced by half. Uncover.",
    "ingredients": [
    {
    "id": 11233,
    "name": "kale",
    "localizedName": "kale",
    "image": "kale.jpg"
    }
    ],
    "equipment": []
    },
    {
    "number": 3,
    "step": "Add garlic and basalmic.Allow to cook for about another 30 seconds or so, mixing well so that the garlic and vinegar are well distributed.",
    "ingredients": [
    {
    "id": 2053,
    "name": "vinegar",
    "localizedName": "vinegar",
    "image": "vinegar-(white).jpg"
    },
    {
    "id": 11215,
    "name": "garlic",
    "localizedName": "garlic",
    "image": "garlic.png"
    }
    ],
    "equipment": []
    },
    {
    "number": 4,
    "step": "Serve hot.",
    "ingredients": [],
    "equipment": []
    }
    ]
    }
    ],
    "spoonacularSourceUrl": "https://spoonacular.com/garlicky-kale-644387"
    },
    {
    "vegetarian": false,
    "vegan": false,
    "glutenFree": true,
    "dairyFree": true,
    "veryHealthy": false,
    "cheap": false,
    "veryPopular": true,
    "sustainable": false,
    "weightWatcherSmartPoints": 5,
    "gaps": "no",
    "lowFodmap": false,
    "preparationMinutes": 10,
    "cookingMinutes": 360,
    "aggregateLikes": 1429,
    "spoonacularScore": 99,
    "healthScore": 26,
    "creditsText": "Jen West",
    "sourceName": "Pink When",
    "pricePerServing": 183.68,
    "id": 715392,
    "title": "Easy Slow Cooker Chicken Tortilla Soup",
    "readyInMinutes": 370,
    "servings": 8,
    "sourceUrl": "https://www.pinkwhen.com/chicken-tortilla-soup-slow-cooker/",
    "image": "https://spoonacular.com/recipeImages/715392-312x231.jpg",
    "imageType": "jpg",
    "summary": "Easy Slow Cooker Chicken Tortilla Soup is a <b>gluten free and dairy free</b> main course. This recipe serves 8 and costs $1.84 per serving. One serving contains <b>288 calories</b>, <b>32g of protein</b>, and <b>4g of fat</b>. 1429 people were impressed by this recipe. A mixture of chicken breast, chilis, tomatoes, and a handful of other ingredients are all it takes to make this recipe so delicious. It will be a hit at your <b>Autumn</b> event. From preparation to the plate, this recipe takes around <b>6 hours and 10 minutes</b>. It is brought to you by Pink When. Taking all factors into account, this recipe <b>earns a spoonacular score of 0%</b>, which is improvable. <a href=\"https://spoonacular.com/recipes/easy-slow-cooker-chicken-tortilla-soup-577486\">Easy Slow Cooker Chicken Tortilla Soup</a>, <a href=\"https://spoonacular.com/recipes/slow-cooker-chicken-tortilla-soup-1310515\">Slow Cooker Chicken Tortilla Soup</a>, and <a href=\"https://spoonacular.com/recipes/slow-cooker-chicken-tortilla-soup-527757\">Slow-Cooker Chicken Tortilla Soup</a> are very similar to this recipe.",
    "cuisines": [],
    "dishTypes": [
    "lunch",
    "soup",
    "main course",
    "main dish",
    "dinner"
    ],
    "diets": [
    "gluten free",
    "dairy free"
    ],
    "occasions": [
    "fall",
    "winter"
    ],
    "analyzedInstructions": [
    {
    "name": "",
    "steps": [
    {
    "number": 1,
    "step": "Add all of your ingredients into the slow cooker and then cook on low for 6 hours.",
    "ingredients": [],
    "equipment": [
    {
    "id": 404718,
    "name": "slow cooker",
    "localizedName": "slow cooker",
    "image": "slow-cooker.jpg"
    }
    ],
    "length": {
    "number": 360,
    "unit": "minutes"
    }
    },
    {
    "number": 2,
    "step": "Once finished cooking, scoop into serving bowls and serve with tortilla chips, sour cream, cheese, avocado, or any of your favorite toppings.",
    "ingredients": [
    {
    "id": 19056,
    "name": "tortilla chips",
    "localizedName": "tortilla chips",
    "image": "tortilla-chips.jpg"
    },
    {
    "id": 1056,
    "name": "sour cream",
    "localizedName": "sour cream",
    "image": "sour-cream.jpg"
    },
    {
    "id": 9037,
    "name": "avocado",
    "localizedName": "avocado",
    "image": "avocado.jpg"
    },
    {
    "id": 1041009,
    "name": "cheese",
    "localizedName": "cheese",
    "image": "cheddar-cheese.png"
    }
    ],
    "equipment": [
    {
    "id": 404783,
    "name": "bowl",
    "localizedName": "bowl",
    "image": "bowl.jpg"
    }
    ]
    }
    ]
    }
    ],
    "spoonacularSourceUrl": "https://spoonacular.com/easy-slow-cooker-chicken-tortilla-soup-715392"
    },
    {
    "vegetarian": false,
    "vegan": false,
    "glutenFree": true,
    "dairyFree": true,
    "veryHealthy": true,
    "cheap": false,
    "veryPopular": false,
    "sustainable": false,
    "weightWatcherSmartPoints": 32,
    "gaps": "no",
    "lowFodmap": false,
    "aggregateLikes": 124,
    "spoonacularScore": 99,
    "healthScore": 100,
    "creditsText": "Afrolems",
    "license": "CC BY 4.0",
    "sourceName": "Afrolems",
    "pricePerServing": 355.78,
    "id": 716268,
    "title": "African Chicken Peanut Stew",
    "readyInMinutes": 45,
    "servings": 1,
    "sourceUrl": "http://www.afrolems.com/2014/03/18/african-chicken-peanut-stew-recipe/",
    "image": "https://spoonacular.com/recipeImages/716268-312x231.jpg",
    "imageType": "jpg",
    "summary": "Need a <b>gluten free and dairy free main course</b>? African Chicken Peanut Stew could be a tremendous recipe to try. This recipe makes 1 servings with <b>1377 calories</b>, <b>75g of protein</b>, and <b>102g of fat</b> each. For <b>$3.87 per serving</b>, this recipe <b>covers 62%</b> of your daily requirements of vitamins and minerals. It can be enjoyed any time, but it is especially good for <b>Autumn</b>. From preparation to the plate, this recipe takes approximately <b>45 minutes</b>. 124 people have tried and liked this recipe. Head to the store and pick up bell peppers, tomato, pepper, and a few other things to make it today. To use up the tomato you could follow this main course with the <a href=\"https://spoonacular.com/recipes/pink-peony-popcorn-balls-129348\">Pink Peony Popcorn Balls</a> as a dessert. All things considered, we decided this recipe <b>deserves a spoonacular score of 99%</b>. This score is super. Try <a href=\"https://spoonacular.com/recipes/african-chicken-peanut-stew-245461\">African Chicken Peanut Stew</a>, <a href=\"https://spoonacular.com/recipes/west-african-peanut-chicken-stew-163315\">West African Peanut-Chicken Stew</a>, and <a href=\"https://spoonacular.com/recipes/one-pot-african-peanut-stew-854978\">One-Pot African Peanut Stew</a> for similar recipes.",
    "cuisines": [
    "African"
    ],
    "dishTypes": [
    "lunch",
    "main course",
    "main dish",
    "dinner"
    ],
    "diets": [
    "gluten free",
    "dairy free"
    ],
    "occasions": [
    "fall",
    "winter"
    ],
    "analyzedInstructions": [
    {
    "name": "",
    "steps": [
    {
    "number": 1,
    "step": "Season and Boil the Chicken for 10 minutes with salt, pepper, seasoning, a handful of onions.Once the chicken is ready, in the same stock, Boil the chopped sweet potatoes till its almost cooked. Save the stock in a separate Bowl and the chicken and potatoes in a separate Bowl as well.In a pot, heat up one cooking spoon of oil and fry the chicken till it Browns. Take it out and heat up the other 1.5 cooking spoons of oil and fry the onions, tomatoes Both chopped and Blended, ginger and garlic.",
    "ingredients": [
    {
    "id": 11507,
    "name": "sweet potato",
    "localizedName": "sweet potato",
    "image": "sweet-potato.png"
    },
    {
    "id": 1042027,
    "name": "seasoning",
    "localizedName": "seasoning",
    "image": "seasoning.png"
    },
    {
    "id": 11352,
    "name": "potato",
    "localizedName": "potato",
    "image": "potatoes-yukon-gold.png"
    },
    {
    "id": 11529,
    "name": "tomato",
    "localizedName": "tomato",
    "image": "tomato.png"
    },
    {
    "id": 5006,
    "name": "whole chicken",
    "localizedName": "whole chicken",
    "image": "whole-chicken.jpg"
    },
    {
    "id": 11215,
    "name": "garlic",
    "localizedName": "garlic",
    "image": "garlic.png"
    },
    {
    "id": 11216,
    "name": "ginger",
    "localizedName": "ginger",
    "image": "ginger.png"
    },
    {
    "id": 11282,
    "name": "onion",
    "localizedName": "onion",
    "image": "brown-onion.png"
    },
    {
    "id": 1002030,
    "name": "pepper",
    "localizedName": "pepper",
    "image": "pepper.jpg"
    },
    {
    "id": 1006615,
    "name": "stock",
    "localizedName": "stock",
    "image": "chicken-broth.png"
    },
    {
    "id": 2047,
    "name": "salt",
    "localizedName": "salt",
    "image": "salt.jpg"
    },
    {
    "id": 4582,
    "name": "cooking oil",
    "localizedName": "cooking oil",
    "image": "vegetable-oil.jpg"
    }
    ],
    "equipment": [
    {
    "id": 404783,
    "name": "bowl",
    "localizedName": "bowl",
    "image": "bowl.jpg"
    },
    {
    "id": 404752,
    "name": "pot",
    "localizedName": "pot",
    "image": "stock-pot.jpg"
    }
    ],
    "length": {
    "number": 10,
    "unit": "minutes"
    }
    },
    {
    "number": 2,
    "step": "Add your seasoning, curry, thyme, parsley, salt and pepper to the pot.",
    "ingredients": [
    {
    "id": 1102047,
    "name": "salt and pepper",
    "localizedName": "salt and pepper",
    "image": "salt-and-pepper.jpg"
    },
    {
    "id": 1042027,
    "name": "seasoning",
    "localizedName": "seasoning",
    "image": "seasoning.png"
    },
    {
    "id": 11297,
    "name": "parsley",
    "localizedName": "parsley",
    "image": "parsley.jpg"
    },
    {
    "id": 2015,
    "name": "curry powder",
    "localizedName": "curry powder",
    "image": "curry-powder.jpg"
    },
    {
    "id": 2049,
    "name": "thyme",
    "localizedName": "thyme",
    "image": "thyme.jpg"
    }
    ],
    "equipment": [
    {
    "id": 404752,
    "name": "pot",
    "localizedName": "pot",
    "image": "stock-pot.jpg"
    }
    ]
    },
    {
    "number": 3,
    "step": "Pour in your stock, chicken and potatoes to cook further.Stir in your peanut Butter and allow to cook for 10 minutes on low heat.If your sauce gets too thick, add a little water to it.",
    "ingredients": [
    {
    "id": 16098,
    "name": "peanut butter",
    "localizedName": "peanut butter",
    "image": "peanut-butter.png"
    },
    {
    "id": 11352,
    "name": "potato",
    "localizedName": "potato",
    "image": "potatoes-yukon-gold.png"
    },
    {
    "id": 5006,
    "name": "whole chicken",
    "localizedName": "whole chicken",
    "image": "whole-chicken.jpg"
    },
    {
    "id": 0,
    "name": "sauce",
    "localizedName": "sauce",
    "image": ""
    },
    {
    "id": 1006615,
    "name": "stock",
    "localizedName": "stock",
    "image": "chicken-broth.png"
    },
    {
    "id": 14412,
    "name": "water",
    "localizedName": "water",
    "image": "water.png"
    }
    ],
    "equipment": [],
    "length": {
    "number": 10,
    "unit": "minutes"
    }
    },
    {
    "number": 4,
    "step": "Serve with white rice or more sweet potatoes.You could also garnish the dish with Bell peppers.   ",
    "ingredients": [
    {
    "id": 11507,
    "name": "sweet potato",
    "localizedName": "sweet potato",
    "image": "sweet-potato.png"
    },
    {
    "id": 10211821,
    "name": "bell pepper",
    "localizedName": "bell pepper",
    "image": "bell-pepper-orange.png"
    },
    {
    "id": 10220444,
    "name": "white rice",
    "localizedName": "white rice",
    "image": "uncooked-white-rice.png"
    }
    ],
    "equipment": []
    }
    ]
    }
    ],
    "spoonacularSourceUrl": "https://spoonacular.com/african-chicken-peanut-stew-716268"
    },
    {
    "vegetarian": false,
    "vegan": false,
    "glutenFree": true,
    "dairyFree": true,
    "veryHealthy": true,
    "cheap": false,
    "veryPopular": true,
    "sustainable": false,
    "weightWatcherSmartPoints": 3,
    "gaps": "no",
    "lowFodmap": false,
    "aggregateLikes": 361,
    "spoonacularScore": 99,
    "healthScore": 89,
    "creditsText": "Afrolems",
    "license": "CC BY 4.0",
    "sourceName": "Afrolems",
    "pricePerServing": 908.06,
    "id": 716381,
    "title": "Nigerian Snail Stew",
    "readyInMinutes": 45,
    "servings": 1,
    "sourceUrl": "http://www.afrolems.com/2015/12/08/nigerian-snail-stew/",
    "image": "https://spoonacular.com/recipeImages/716381-312x231.jpg",
    "imageType": "jpg",
    "summary": "Nigerian Snail Stew might be just the main course you are searching for. For <b>$9.08 per serving</b>, this recipe <b>covers 45%</b> of your daily requirements of vitamins and minerals. This recipe makes 1 servings with <b>363 calories</b>, <b>23g of protein</b>, and <b>5g of fat</b> each. Plenty of people made this recipe, and 361 would say it hit the spot. If you have chili powder, snails, limes, and a few other ingredients on hand, you can make it. To use up the ice cubes you could follow this main course with the <a href=\"https://spoonacular.com/recipes/nectarine-blackberry-and-pecan-sundaes-50465\">Nectarine, Blackberry, and Pecan Sundaes</a> as a dessert. It can be enjoyed any time, but it is especially good for <b>Autumn</b>. It is a good option if you're following a <b>gluten free, dairy free, and whole 30</b> diet. All things considered, we decided this recipe <b>deserves a spoonacular score of 99%</b>. This score is spectacular. Try <a href=\"https://spoonacular.com/recipes/nigerian-kidney-bean-stew-with-a-peanut-sauce-112643\">Nigerian Kidney Bean Stew With a Peanut Sauce</a>, <a href=\"https://spoonacular.com/recipes/little-snail-rolls-369096\">Little Snail Rolls</a>, and <a href=\"https://spoonacular.com/recipes/maple-snail-cookies-76877\">Maple Snail Cookies</a> for similar recipes.",
    "cuisines": [],
    "dishTypes": [
    "lunch",
    "main course",
    "main dish",
    "dinner"
    ],
    "diets": [
    "gluten free",
    "dairy free"
    ],
    "occasions": [
    "fall",
    "winter"
    ],
    "analyzedInstructions": [
    {
    "name": "",
    "steps": [
    {
    "number": 1,
    "step": "In a bowl, wash the snails with lime and salt till all the slime is gone.",
    "ingredients": [
    {
    "id": 90560,
    "name": "escargot",
    "localizedName": "escargot",
    "image": "escargot.png"
    },
    {
    "id": 9159,
    "name": "lime",
    "localizedName": "lime",
    "image": "lime.jpg"
    },
    {
    "id": 2047,
    "name": "salt",
    "localizedName": "salt",
    "image": "salt.jpg"
    }
    ],
    "equipment": [
    {
    "id": 404783,
    "name": "bowl",
    "localizedName": "bowl",
    "image": "bowl.jpg"
    }
    ]
    },
    {
    "number": 2,
    "step": "Place the snail in a pot with the chili powder, seasoning cubes, chopped garlic, 1/2 of the onion(chopped) and a pinch of salt and bring to boil for about 15-18 minutes.In a separate pot, place the tomatoes, bell pepper, scotch bonnet peppers, crush with a wooden spoon till some of the juices come out and bring to boil till they are all soft on low heat. (This helps to dry up some of the extra water from the tomatoes)In a pot, pour in your oil, cut your onions in rings and fry in the hot oil on medium heat.",
    "ingredients": [
    {
    "id": 0,
    "name": "seasoning cube",
    "localizedName": "seasoning cube",
    "image": "stock-cube.jpg"
    },
    {
    "id": 2009,
    "name": "chili powder",
    "localizedName": "chili powder",
    "image": "chili-powder.jpg"
    },
    {
    "id": 10211821,
    "name": "bell pepper",
    "localizedName": "bell pepper",
    "image": "bell-pepper-orange.png"
    },
    {
    "id": 11529,
    "name": "tomato",
    "localizedName": "tomato",
    "image": "tomato.png"
    },
    {
    "id": 10111333,
    "name": "peppers",
    "localizedName": "peppers",
    "image": "green-pepper.jpg"
    },
    {
    "id": 11215,
    "name": "garlic",
    "localizedName": "garlic",
    "image": "garlic.png"
    },
    {
    "id": 11282,
    "name": "onion",
    "localizedName": "onion",
    "image": "brown-onion.png"
    },
    {
    "id": 10014052,
    "name": "scotch whiskey",
    "localizedName": "scotch whiskey",
    "image": "whiskey-bottle.jpg"
    },
    {
    "id": 14412,
    "name": "water",
    "localizedName": "water",
    "image": "water.png"
    },
    {
    "id": 2047,
    "name": "salt",
    "localizedName": "salt",
    "image": "salt.jpg"
    },
    {
    "id": 4582,
    "name": "cooking oil",
    "localizedName": "cooking oil",
    "image": "vegetable-oil.jpg"
    }
    ],
    "equipment": [
    {
    "id": 404732,
    "name": "wooden spoon",
    "localizedName": "wooden spoon",
    "image": "wooden-spoon.jpg"
    },
    {
    "id": 404752,
    "name": "pot",
    "localizedName": "pot",
    "image": "stock-pot.jpg"
    }
    ],
    "length": {
    "number": 18,
    "unit": "minutes"
    }
    },
    {
    "number": 3,
    "step": "Pour in your tomato-pepper mix and allow to fry for about 8-10 minutes on low heat.",
    "ingredients": [
    {
    "id": 1002030,
    "name": "pepper",
    "localizedName": "pepper",
    "image": "pepper.jpg"
    },
    {
    "id": 11529,
    "name": "tomato",
    "localizedName": "tomato",
    "image": "tomato.png"
    }
    ],
    "equipment": [],
    "length": {
    "number": 10,
    "unit": "minutes"
    }
    },
    {
    "number": 4,
    "step": "Pour in the left-over stock from the snail and allow to cook for 5 more minutes on medium heat.",
    "ingredients": [
    {
    "id": 1006615,
    "name": "stock",
    "localizedName": "stock",
    "image": "chicken-broth.png"
    }
    ],
    "equipment": [],
    "length": {
    "number": 5,
    "unit": "minutes"
    }
    },
    {
    "number": 5,
    "step": "Add your seasoning cubes and taste for salt.",
    "ingredients": [
    {
    "id": 0,
    "name": "seasoning cube",
    "localizedName": "seasoning cube",
    "image": "stock-cube.jpg"
    },
    {
    "id": 2047,
    "name": "salt",
    "localizedName": "salt",
    "image": "salt.jpg"
    }
    ],
    "equipment": []
    },
    {
    "number": 6,
    "step": "Add your snails and stir in and allow to stew for 2-4 minutes more on medium heat.",
    "ingredients": [
    {
    "id": 90560,
    "name": "escargot",
    "localizedName": "escargot",
    "image": "escargot.png"
    },
    {
    "id": 0,
    "name": "stew",
    "localizedName": "stew",
    "image": ""
    }
    ],
    "equipment": [],
    "length": {
    "number": 4,
    "unit": "minutes"
    }
    },
    {
    "number": 7,
    "step": "Serve with Rice, Pasta, Plantain, Yams or Potatoes.",
    "ingredients": [
    {
    "id": 9277,
    "name": "plantain",
    "localizedName": "plantain",
    "image": "plantains.jpg"
    },
    {
    "id": 11352,
    "name": "potato",
    "localizedName": "potato",
    "image": "potatoes-yukon-gold.png"
    },
    {
    "id": 20420,
    "name": "pasta",
    "localizedName": "pasta",
    "image": "fusilli.jpg"
    },
    {
    "id": 20444,
    "name": "rice",
    "localizedName": "rice",
    "image": "uncooked-white-rice.png"
    },
    {
    "id": 11601,
    "name": "yam",
    "localizedName": "yam",
    "image": "sweet-potato.png"
    }
    ],
    "equipment": []
    }
    ]
    }
    ],
    "spoonacularSourceUrl": "https://spoonacular.com/nigerian-snail-stew-716381"
    },
    {
    "vegetarian": true,
    "vegan": true,
    "glutenFree": true,
    "dairyFree": true,
    "veryHealthy": true,
    "cheap": false,
    "veryPopular": false,
    "sustainable": false,
    "weightWatcherSmartPoints": 13,
    "gaps": "no",
    "lowFodmap": false,
    "aggregateLikes": 53,
    "spoonacularScore": 99,
    "healthScore": 100,
    "creditsText": "Lisa's Vegetarian Kitchen",
    "license": "CC BY 2.5 CA",
    "sourceName": "Food and Spice",
    "pricePerServing": 185.77,
    "id": 782601,
    "title": "Red Kidney Bean Jambalaya",
    "readyInMinutes": 45,
    "servings": 6,
    "sourceUrl": "http://foodandspice.blogspot.com/2016/05/red-kidney-bean-jambalaya.html",
    "image": "https://spoonacular.com/recipeImages/782601-312x231.jpg",
    "imageType": "jpg",
    "summary": "Red Kidney Bean Jambalaya might be just the <b>Creole</b> recipe you are searching for. One serving contains <b>538 calories</b>, <b>21g of protein</b>, and <b>8g of fat</b>. For <b>$1.69 per serving</b>, this recipe <b>covers 34%</b> of your daily requirements of vitamins and minerals. This recipe from foodandspice.blogspot.com has 52 fans. A few people really liked this main course. Head to the store and pick up brown rice, vegetable stock, liquid smoke, and a few other things to make it today. To use up the sea salt you could follow this main course with the <a href=\"https://spoonacular.com/recipes/raspberry-sea-salt-brownies-494161\">Raspberry Sea Salt Brownies</a> as a dessert. From preparation to the plate, this recipe takes about <b>45 minutes</b>. All things considered, we decided this recipe <b>deserves a spoonacular score of 99%</b>. This score is spectacular. Try <a href=\"https://spoonacular.com/recipes/red-kidney-bean-dip-148569\">Red Kidney Bean Dip</a>, <a href=\"https://spoonacular.com/recipes/kidney-bean-dip-119992\">Kidney Bean Dip</a>, and <a href=\"https://spoonacular.com/recipes/red-kidney-bean-curry-80686\">Red Kidney Bean Curry</a> for similar recipes.",
    "cuisines": [
    "Creole",
    "Cajun"
    ],
    "dishTypes": [
    "lunch",
    "main course",
    "main dish",
    "dinner"
    ],
    "diets": [
    "gluten free",
    "dairy free",
    "lacto ovo vegetarian",
    "vegan"
    ],
    "occasions": [],
    "analyzedInstructions": [
    {
    "name": "",
    "steps": [
    {
    "number": 1,
    "step": "Rinse the kidney beans and brown rice separately. Cover the kidney beans with water and soak for 8 hours or overnight. In a separate bowl, cover the brown rice with water and soak for 8 hours or overnight.",
    "ingredients": [
    {
    "id": 16033,
    "name": "kidney beans",
    "localizedName": "kidney beans",
    "image": "kidney-beans.jpg"
    },
    {
    "id": 20040,
    "name": "brown rice",
    "localizedName": "brown rice",
    "image": "uncooked-brown-rice.png"
    },
    {
    "id": 14412,
    "name": "water",
    "localizedName": "water",
    "image": "water.png"
    }
    ],
    "equipment": [
    {
    "id": 404783,
    "name": "bowl",
    "localizedName": "bowl",
    "image": "bowl.jpg"
    }
    ],
    "length": {
    "number": 960,
    "unit": "minutes"
    }
    },
    {
    "number": 2,
    "step": "Drain and rinse the kidney beans, then transfer to a medium saucepan and cover with fresh water. Bring to a boil, reduce heat to medium-low, cover, and simmer for 1 hour or until just tender but not falling apart.",
    "ingredients": [
    {
    "id": 16033,
    "name": "kidney beans",
    "localizedName": "kidney beans",
    "image": "kidney-beans.jpg"
    },
    {
    "id": 14412,
    "name": "water",
    "localizedName": "water",
    "image": "water.png"
    }
    ],
    "equipment": [
    {
    "id": 404669,
    "name": "sauce pan",
    "localizedName": "sauce pan",
    "image": "sauce-pan.jpg"
    }
    ],
    "length": {
    "number": 60,
    "unit": "minutes"
    }
    },
    {
    "number": 3,
    "step": "Drain and set aside.",
    "ingredients": [],
    "equipment": []
    },
    {
    "number": 4,
    "step": "Heat the oil in a large saucepan over medium heat. When hot, add the onion and saut for 5 minutes. Now add the garlic, carrots, celery and green beans, and stir for another 5 minutes. Next add the tomatoes, red pepper, eggplant, sage, thyme, marjoram and celery seed, and continue to stir for another few minutes.",
    "ingredients": [
    {
    "id": 2007,
    "name": "celery seed",
    "localizedName": "celery seed",
    "image": "celery-seed.jpg"
    },
    {
    "id": 11052,
    "name": "green beans",
    "localizedName": "green beans",
    "image": "green-beans-or-string-beans.jpg"
    },
    {
    "id": 11821,
    "name": "red pepper",
    "localizedName": "red pepper",
    "image": "red-pepper.jpg"
    },
    {
    "id": 11209,
    "name": "eggplant",
    "localizedName": "eggplant",
    "image": "eggplant.png"
    },
    {
    "id": 2023,
    "name": "marjoram",
    "localizedName": "marjoram",
    "image": "marjoram.jpg"
    },
    {
    "id": 11529,
    "name": "tomato",
    "localizedName": "tomato",
    "image": "tomato.png"
    },
    {
    "id": 11124,
    "name": "carrot",
    "localizedName": "carrot",
    "image": "sliced-carrot.png"
    },
    {
    "id": 11143,
    "name": "celery",
    "localizedName": "celery",
    "image": "celery.jpg"
    },
    {
    "id": 11215,
    "name": "garlic",
    "localizedName": "garlic",
    "image": "garlic.png"
    },
    {
    "id": 11282,
    "name": "onion",
    "localizedName": "onion",
    "image": "brown-onion.png"
    },
    {
    "id": 2049,
    "name": "thyme",
    "localizedName": "thyme",
    "image": "thyme.jpg"
    },
    {
    "id": 99226,
    "name": "sage",
    "localizedName": "sage",
    "image": "fresh-sage.png"
    },
    {
    "id": 4582,
    "name": "cooking oil",
    "localizedName": "cooking oil",
    "image": "vegetable-oil.jpg"
    }
    ],
    "equipment": [
    {
    "id": 404669,
    "name": "sauce pan",
    "localizedName": "sauce pan",
    "image": "sauce-pan.jpg"
    }
    ],
    "length": {
    "number": 10,
    "unit": "minutes"
    }
    },
    {
    "number": 5,
    "step": "Pour in the vegetable stock, liquid smoke, rice and the cooked kidney beans. Bring to a boil, reduce heat to medium low, cover, and cook, stirring occasionally, for 45 minutes or until the rice is tender.",
    "ingredients": [
    {
    "id": 6615,
    "name": "vegetable stock",
    "localizedName": "vegetable stock",
    "image": "chicken-broth.png"
    },
    {
    "id": 16033,
    "name": "kidney beans",
    "localizedName": "kidney beans",
    "image": "kidney-beans.jpg"
    },
    {
    "id": 93627,
    "name": "liquid smoke",
    "localizedName": "liquid smoke",
    "image": "dark-sauce.jpg"
    },
    {
    "id": 20444,
    "name": "rice",
    "localizedName": "rice",
    "image": "uncooked-white-rice.png"
    }
    ],
    "equipment": [],
    "length": {
    "number": 45,
    "unit": "minutes"
    }
    },
    {
    "number": 6,
    "step": "Add water as necessary if the stew becomes too dry.Season with sriracha, salt and pepper, and taste for seasoning  add more liquid smoke, sriracha, salt, pepper or herbs as desired.",
    "ingredients": [
    {
    "id": 1102047,
    "name": "salt and pepper",
    "localizedName": "salt and pepper",
    "image": "salt-and-pepper.jpg"
    },
    {
    "id": 93627,
    "name": "liquid smoke",
    "localizedName": "liquid smoke",
    "image": "dark-sauce.jpg"
    },
    {
    "id": 1042027,
    "name": "seasoning",
    "localizedName": "seasoning",
    "image": "seasoning.png"
    },
    {
    "id": 1016168,
    "name": "sriracha",
    "localizedName": "sriracha",
    "image": "hot-sauce-or-tabasco.png"
    },
    {
    "id": 1002030,
    "name": "pepper",
    "localizedName": "pepper",
    "image": "pepper.jpg"
    },
    {
    "id": 1002044,
    "name": "herbs",
    "localizedName": "herbs",
    "image": "mixed-fresh-herbs.jpg"
    },
    {
    "id": 14412,
    "name": "water",
    "localizedName": "water",
    "image": "water.png"
    },
    {
    "id": 2047,
    "name": "salt",
    "localizedName": "salt",
    "image": "salt.jpg"
    },
    {
    "id": 0,
    "name": "stew",
    "localizedName": "stew",
    "image": ""
    }
    ],
    "equipment": []
    }
    ]
    }
    ],
    "spoonacularSourceUrl": "https://spoonacular.com/red-kidney-bean-jambalaya-782601"
    },
    {
    "vegetarian": true,
    "vegan": true,
    "glutenFree": true,
    "dairyFree": true,
    "veryHealthy": true,
    "cheap": false,
    "veryPopular": false,
    "sustainable": false,
    "weightWatcherSmartPoints": 14,
    "gaps": "no",
    "lowFodmap": false,
    "aggregateLikes": 44,
    "spoonacularScore": 99,
    "healthScore": 100,
    "creditsText": "Lisa's Vegetarian Kitchen",
    "license": "CC BY 2.5 CA",
    "sourceName": "Food and Spice",
    "pricePerServing": 137.57,
    "id": 794349,
    "title": "Broccoli and Chickpea Rice Salad",
    "readyInMinutes": 45,
    "servings": 6,
    "sourceUrl": "http://foodandspice.blogspot.com/2016/07/broccoli-and-chickpea-rice-salad.html",
    "image": "https://spoonacular.com/recipeImages/794349-312x231.jpg",
    "imageType": "jpg",
    "summary": "Need a <b>gluten free and vegan main course</b>? Broccoli and Chickpea Rice Salad could be a spectacular recipe to try. One serving contains <b>524 calories</b>, <b>19g of protein</b>, and <b>12g of fat</b>. For <b>$1.38 per serving</b>, this recipe <b>covers 36%</b> of your daily requirements of vitamins and minerals. Head to the store and pick up almonds, olive oil, 2 tablespoons pineapple juice (juice from canned pineapple), and a few other things to make it today. 42 people have made this recipe and would make it again. From preparation to the plate, this recipe takes approximately <b>45 minutes</b>. All things considered, we decided this recipe <b>deserves a spoonacular score of 99%</b>. This score is spectacular. Similar recipes include <a href=\"https://spoonacular.com/recipes/easy-balsamic-chickpea-brown-rice-broccoli-salad-101160\">Easy Balsamic Chickpea, Brown Rice & Broccoli Salad</a>, <a href=\"https://spoonacular.com/recipes/super-easy-chickpea-brown-rice-broccoli-crockpot-casserole-584241\">Super Easy Chickpea, Brown Rice & Broccoli Crockpot Casserole</a>, and <a href=\"https://spoonacular.com/recipes/chickpea-and-broccoli-salad-29686\">Chickpean And Broccoli Salad</a>.",
    "cuisines": [],
    "dishTypes": [
    "lunch",
    "main course",
    "main dish",
    "dinner"
    ],
    "diets": [
    "gluten free",
    "dairy free",
    "lacto ovo vegetarian",
    "vegan"
    ],
    "occasions": [],
    "analyzedInstructions": [
    {
    "name": "",
    "steps": [
    {
    "number": 1,
    "step": "In a large skillet, heat the oil over medium heat.",
    "ingredients": [
    {
    "id": 4582,
    "name": "cooking oil",
    "localizedName": "cooking oil",
    "image": "vegetable-oil.jpg"
    }
    ],
    "equipment": [
    {
    "id": 404645,
    "name": "frying pan",
    "localizedName": "frying pan",
    "image": "pan.png"
    }
    ]
    },
    {
    "number": 2,
    "step": "Add the broccoli, stir well, and cover. Cook, stirring often, until the broccoli is tender.",
    "ingredients": [
    {
    "id": 11090,
    "name": "broccoli",
    "localizedName": "broccoli",
    "image": "broccoli.jpg"
    }
    ],
    "equipment": []
    },
    {
    "number": 3,
    "step": "Add the broccoli to a large bowl, along with the remaining salad ingredients.To make the dressing, whisk together all of the dressing ingredients in a small bowl.",
    "ingredients": [
    {
    "id": 11090,
    "name": "broccoli",
    "localizedName": "broccoli",
    "image": "broccoli.jpg"
    }
    ],
    "equipment": [
    {
    "id": 404661,
    "name": "whisk",
    "localizedName": "whisk",
    "image": "whisk.png"
    },
    {
    "id": 404783,
    "name": "bowl",
    "localizedName": "bowl",
    "image": "bowl.jpg"
    }
    ]
    },
    {
    "number": 4,
    "step": "Pour the dressing over the salad and toss well to coat evenly. Taste for seasoning and serve.",
    "ingredients": [
    {
    "id": 1042027,
    "name": "seasoning",
    "localizedName": "seasoning",
    "image": "seasoning.png"
    }
    ],
    "equipment": []
    }
    ]
    }
    ],
    "spoonacularSourceUrl": "https://spoonacular.com/broccoli-and-chickpea-rice-salad-794349"
    },
    {
    "vegetarian": false,
    "vegan": false,
    "glutenFree": true,
    "dairyFree": true,
    "veryHealthy": true,
    "cheap": false,
    "veryPopular": false,
    "sustainable": false,
    "weightWatcherSmartPoints": 10,
    "gaps": "no",
    "lowFodmap": false,
    "preparationMinutes": 10,
    "cookingMinutes": 480,
    "aggregateLikes": 57,
    "spoonacularScore": 99,
    "healthScore": 100,
    "creditsText": "Jen West",
    "sourceName": "Pink When",
    "pricePerServing": 293.64,
    "id": 715446,
    "title": "Slow Cooker Beef Stew",
    "readyInMinutes": 490,
    "servings": 6,
    "sourceUrl": "http://www.pinkwhen.com/slow-cooker-beef-stew-recipe/",
    "image": "https://spoonacular.com/recipeImages/715446-312x231.jpg",
    "imageType": "jpg",
    "summary": "If you want to add more <b>gluten free and dairy free</b> recipes to your recipe box, Slow Cooker Beef Stew might be a recipe you should try. One portion of this dish contains approximately <b>52g of protein</b>, <b>16g of fat</b>, and a total of <b>528 calories</b>. This recipe serves 6. For <b>$2.94 per serving</b>, this recipe <b>covers 45%</b> of your daily requirements of vitamins and minerals. 58 people found this recipe to be scrumptious and satisfying. It works well as a reasonably priced main course for <b>Winter</b>. A mixture of canned beef broth, carrots, green onions, and a handful of other ingredients are all it takes to make this recipe so yummy. From preparation to the plate, this recipe takes around <b>8 hours and 10 minutes</b>. It is brought to you by Pink When. All things considered, we decided this recipe <b>deserves a spoonacular score of 99%</b>. This score is super. If you like this recipe, take a look at these similar recipes: <a href=\"https://spoonacular.com/recipes/butternut-squash-beef-stew-instant-pot-pressure-cooker-or-slow-cooker-840470\">Butternut Squash Beef Stew (Instant Pot, Pressure Cooker or Slow Cooker)</a>, <a href=\"https://spoonacular.com/recipes/slow-cooker-beef-stew-990111\">Slow Cooker Beef Stew</a>, and <a href=\"https://spoonacular.com/recipes/slow-cooker-beef-stew-770894\">Slow-Cooker Beef Stew</a>.",
    "cuisines": [],
    "dishTypes": [
    "lunch",
    "main course",
    "main dish",
    "dinner"
    ],
    "diets": [
    "gluten free",
    "dairy free"
    ],
    "occasions": [
    "fall",
    "winter"
    ],
    "analyzedInstructions": [
    {
    "name": "",
    "steps": [
    {
    "number": 1,
    "step": "To get started, heat your slow cooker to low.",
    "ingredients": [],
    "equipment": [
    {
    "id": 404718,
    "name": "slow cooker",
    "localizedName": "slow cooker",
    "image": "slow-cooker.jpg"
    }
    ]
    },
    {
    "number": 2,
    "step": "Pour in the cream of mushroom soup, Dale's seasoning, water, and beef broth and stir until mixed well.",
    "ingredients": [
    {
    "id": 6147,
    "name": "cream of mushroom soup",
    "localizedName": "cream of mushroom soup",
    "image": "cream-of-mushroom-soup.png"
    },
    {
    "id": 6008,
    "name": "beef broth",
    "localizedName": "beef broth",
    "image": "beef-broth.png"
    },
    {
    "id": 1042027,
    "name": "seasoning",
    "localizedName": "seasoning",
    "image": "seasoning.png"
    },
    {
    "id": 14412,
    "name": "water",
    "localizedName": "water",
    "image": "water.png"
    }
    ],
    "equipment": []
    },
    {
    "number": 3,
    "step": "Add in your stew meat, potatoes, onions, carrots, celery, and green onions. Stir well until covered and cook on low for 8 hours. You can add salt and pepper as desired, but the flavors and the Dale's marry together so well that you probably won’t need them.",
    "ingredients": [
    {
    "id": 1102047,
    "name": "salt and pepper",
    "localizedName": "salt and pepper",
    "image": "salt-and-pepper.jpg"
    },
    {
    "id": 11291,
    "name": "green onions",
    "localizedName": "green onions",
    "image": "spring-onions.jpg"
    },
    {
    "id": 10023618,
    "name": "beef stew meat",
    "localizedName": "beef stew meat",
    "image": "beef-cubes-raw.png"
    },
    {
    "id": 11352,
    "name": "potato",
    "localizedName": "potato",
    "image": "potatoes-yukon-gold.png"
    },
    {
    "id": 11124,
    "name": "carrot",
    "localizedName": "carrot",
    "image": "sliced-carrot.png"
    },
    {
    "id": 11143,
    "name": "celery",
    "localizedName": "celery",
    "image": "celery.jpg"
    },
    {
    "id": 11282,
    "name": "onion",
    "localizedName": "onion",
    "image": "brown-onion.png"
    }
    ],
    "equipment": [],
    "length": {
    "number": 480,
    "unit": "minutes"
    }
    }
    ]
    }
    ],
    "spoonacularSourceUrl": "https://spoonacular.com/slow-cooker-beef-stew-715446"
    },
    {
    "vegetarian": false,
    "vegan": false,
    "glutenFree": true,
    "dairyFree": true,
    "veryHealthy": true,
    "cheap": false,
    "veryPopular": true,
    "sustainable": false,
    "weightWatcherSmartPoints": 11,
    "gaps": "no",
    "lowFodmap": false,
    "preparationMinutes": 10,
    "cookingMinutes": 45,
    "aggregateLikes": 1866,
    "spoonacularScore": 99,
    "healthScore": 73,
    "creditsText": "Jen West",
    "sourceName": "Pink When",
    "pricePerServing": 276.67,
    "id": 715415,
    "title": "Red Lentil Soup with Chicken and Turnips",
    "readyInMinutes": 55,
    "servings": 8,
    "sourceUrl": "http://www.pinkwhen.com/red-lentil-soup-with-chicken-and-turnips/",
    "image": "https://spoonacular.com/recipeImages/715415-312x231.jpg",
    "imageType": "jpg",
    "summary": "Need a <b>gluten free and dairy free main course</b>? Red Lentil Soup with Chicken and Turnips could be an outstanding recipe to try. For <b>$2.8 per serving</b>, this recipe <b>covers 37%</b> of your daily requirements of vitamins and minerals. One serving contains <b>448 calories</b>, <b>23g of protein</b>, and <b>20g of fat</b>. Head to the store and pick up garlic, olive oil, celery stalks, and a few other things to make it today. It is perfect for <b>Autumn</b>. From preparation to the plate, this recipe takes about <b>55 minutes</b>. Plenty of people made this recipe, and 1866 would say it hit the spot. All things considered, we decided this recipe <b>deserves a spoonacular score of 99%</b>. This score is super. Try <a href=\"https://spoonacular.com/recipes/clean-eating-carrot-ginger-red-lentil-soup-921419\">Clean Eating Carrot & Ginger Red Lentil Soup</a>, <a href=\"https://spoonacular.com/recipes/one-pot-red-lentil-sweet-potato-stew-928497\">One-Pot Red Lentil Sweet Potato Stew</a>, and <a href=\"https://spoonacular.com/recipes/red-lentil-and-chicken-soup-682185\">Red Lentil and Chicken Soup</a> for similar recipes.",
    "cuisines": [],
    "dishTypes": [
    "soup"
    ],
    "diets": [
    "gluten free",
    "dairy free"
    ],
    "occasions": [
    "fall",
    "winter"
    ],
    "analyzedInstructions": [
    {
    "name": "",
    "steps": [
    {
    "number": 1,
    "step": "To a large dutch oven or soup pot, heat the olive oil over medium heat.",
    "ingredients": [
    {
    "id": 4053,
    "name": "olive oil",
    "localizedName": "olive oil",
    "image": "olive-oil.jpg"
    },
    {
    "id": 0,
    "name": "soup",
    "localizedName": "soup",
    "image": ""
    }
    ],
    "equipment": [
    {
    "id": 404667,
    "name": "dutch oven",
    "localizedName": "dutch oven",
    "image": "dutch-oven.jpg"
    }
    ]
    },
    {
    "number": 2,
    "step": "Add the onion, carrots and celery and cook for 8-10 minutes or until tender, stirring occasionally.",
    "ingredients": [
    {
    "id": 11124,
    "name": "carrot",
    "localizedName": "carrot",
    "image": "sliced-carrot.png"
    },
    {
    "id": 11143,
    "name": "celery",
    "localizedName": "celery",
    "image": "celery.jpg"
    },
    {
    "id": 11282,
    "name": "onion",
    "localizedName": "onion",
    "image": "brown-onion.png"
    }
    ],
    "equipment": [],
    "length": {
    "number": 10,
    "unit": "minutes"
    }
    },
    {
    "number": 3,
    "step": "Add the garlic and cook for an additional 2 minutes, or until fragrant. Season conservatively with a pinch of salt and black pepper.To the pot, add the tomatoes, turnip and red lentils. Stir to combine. Stir in the vegetable stock and increase the heat on the stove to high. Bring the soup to a boil and then reduce to a simmer. Simmer for 20 minutes or until the turnips are tender and the lentils are cooked through.",
    "ingredients": [
    {
    "id": 1102047,
    "name": "salt and pepper",
    "localizedName": "salt and pepper",
    "image": "salt-and-pepper.jpg"
    },
    {
    "id": 6615,
    "name": "vegetable stock",
    "localizedName": "vegetable stock",
    "image": "chicken-broth.png"
    },
    {
    "id": 10016069,
    "name": "red lentils",
    "localizedName": "red lentils",
    "image": "red-lentils.png"
    },
    {
    "id": 11529,
    "name": "tomato",
    "localizedName": "tomato",
    "image": "tomato.png"
    },
    {
    "id": 10316069,
    "name": "lentils",
    "localizedName": "lentils",
    "image": "lentils-brown.jpg"
    },
    {
    "id": 11564,
    "name": "turnip",
    "localizedName": "turnip",
    "image": "turnips.png"
    },
    {
    "id": 11215,
    "name": "garlic",
    "localizedName": "garlic",
    "image": "garlic.png"
    },
    {
    "id": 0,
    "name": "soup",
    "localizedName": "soup",
    "image": ""
    }
    ],
    "equipment": [
    {
    "id": 404794,
    "name": "stove",
    "localizedName": "stove",
    "image": "oven.jpg"
    },
    {
    "id": 404752,
    "name": "pot",
    "localizedName": "pot",
    "image": "stock-pot.jpg"
    }
    ],
    "length": {
    "number": 22,
    "unit": "minutes"
    }
    },
    {
    "number": 4,
    "step": "Add the chicken breast and parsley. Cook for an additional 5 minutes. Adjust seasoning to taste.",
    "ingredients": [
    {
    "id": 5062,
    "name": "chicken breast",
    "localizedName": "chicken breast",
    "image": "chicken-breasts.png"
    },
    {
    "id": 1042027,
    "name": "seasoning",
    "localizedName": "seasoning",
    "image": "seasoning.png"
    },
    {
    "id": 11297,
    "name": "parsley",
    "localizedName": "parsley",
    "image": "parsley.jpg"
    }
    ],
    "equipment": [],
    "length": {
    "number": 5,
    "unit": "minutes"
    }
    },
    {
    "number": 5,
    "step": "Serve the soup immediately garnished with fresh parsley and any additional toppings. Enjoy!",
    "ingredients": [
    {
    "id": 10511297,
    "name": "fresh parsley",
    "localizedName": "fresh parsley",
    "image": "parsley.jpg"
    },
    {
    "id": 0,
    "name": "soup",
    "localizedName": "soup",
    "image": ""
    }
    ],
    "equipment": []
    }
    ]
    }
    ],
    "spoonacularSourceUrl": "https://spoonacular.com/red-lentil-soup-with-chicken-and-turnips-715415"
    },
    {
    "vegetarian": true,
    "vegan": true,
    "glutenFree": true,
    "dairyFree": true,
    "veryHealthy": true,
    "cheap": false,
    "veryPopular": false,
    "sustainable": false,
    "weightWatcherSmartPoints": 23,
    "gaps": "no",
    "lowFodmap": false,
    "aggregateLikes": 35,
    "spoonacularScore": 98,
    "healthScore": 100,
    "creditsText": "Lisa's Vegetarian Kitchen",
    "license": "CC BY 2.5 CA",
    "sourceName": "Food and Spice",
    "pricePerServing": 161.03,
    "id": 766453,
    "title": "Hummus and Za'atar",
    "readyInMinutes": 45,
    "servings": 4,
    "sourceUrl": "http://foodandspice.blogspot.com/2016/03/hummus-with-zaatar.html",
    "image": "https://spoonacular.com/recipeImages/766453-312x231.jpg",
    "imageType": "jpg",
    "summary": "The recipe Hummus and Za'atar is ready <b>in around 45 minutes</b> and is definitely an outstanding <b>gluten free and vegan</b> option for lovers of middl eastern food. For <b>$1.61 per serving</b>, you get a marinade that serves 4. One serving contains <b>778 calories</b>, <b>34g of protein</b>, and <b>31g of fat</b>. This recipe from foodandspice.blogspot.com has 35 fans. If you have sea salt, garlic, juice of lemon, and a few other ingredients on hand, you can make it. All things considered, we decided this recipe <b>deserves a spoonacular score of 99%</b>. This score is excellent. Similar recipes include <a href=\"https://spoonacular.com/recipes/chopped-hummus-dip-with-zaatar-180958\">Chopped Hummus Dip with Za'atar</a>, <a href=\"https://spoonacular.com/recipes/hummus-deviled-eggs-with-zaatar-exercise-challenge-626237\">Hummus Deviled Eggs with Za’atar {Exercise Challenge}</a>, and <a href=\"https://spoonacular.com/recipes/zaatar-bread-rolls-manaiesh-bi-zaatar-132855\">Za'atar Bread Rolls (Manaiesh Bi Za'atar)</a>.",
    "cuisines": [
    "Middle Eastern"
    ],
    "dishTypes": [
    "lunch",
    "main course",
    "main dish",
    "dinner"
    ],
    "diets": [
    "gluten free",
    "dairy free",
    "lacto ovo vegetarian",
    "vegan"
    ],
    "occasions": [],
    "analyzedInstructions": [
    {
    "name": "",
    "steps": [
    {
    "number": 1,
    "step": "Rinse the chickpeas and soak for 8 hours or overnight in several inches of water.",
    "ingredients": [
    {
    "id": 16057,
    "name": "chickpeas",
    "localizedName": "chickpeas",
    "image": "chickpeas.png"
    },
    {
    "id": 14412,
    "name": "water",
    "localizedName": "water",
    "image": "water.png"
    }
    ],
    "equipment": [],
    "length": {
    "number": 480,
    "unit": "minutes"
    }
    },
    {
    "number": 2,
    "step": "Drain and rinse, then transfer to a medium saucepan and cover with fresh water. Bring to a boil, reduce heat to medium-low, cover, and simmer for 1 to 1 1/2 hours or until soft.",
    "ingredients": [
    {
    "id": 14412,
    "name": "water",
    "localizedName": "water",
    "image": "water.png"
    }
    ],
    "equipment": [
    {
    "id": 404669,
    "name": "sauce pan",
    "localizedName": "sauce pan",
    "image": "sauce-pan.jpg"
    }
    ],
    "length": {
    "number": 120,
    "unit": "minutes"
    }
    },
    {
    "number": 3,
    "step": "Drain, reserving the cooking liquid. (If using canned chickpeas, rinse thoroughly.)Meanwhile, toast the pine nuts in a dry unoiled skillet or saucepan over medium-low heat, tossing or stirring frequently, for 10 minutes or until lightly browned.",
    "ingredients": [
    {
    "id": 16058,
    "name": "canned chickpeas",
    "localizedName": "canned chickpeas",
    "image": "chickpeas.png"
    },
    {
    "id": 12147,
    "name": "pine nuts",
    "localizedName": "pine nuts",
    "image": "pine-nuts.png"
    },
    {
    "id": 18070,
    "name": "toast",
    "localizedName": "toast",
    "image": "toast"
    }
    ],
    "equipment": [
    {
    "id": 404669,
    "name": "sauce pan",
    "localizedName": "sauce pan",
    "image": "sauce-pan.jpg"
    },
    {
    "id": 404645,
    "name": "frying pan",
    "localizedName": "frying pan",
    "image": "pan.png"
    }
    ],
    "length": {
    "number": 10,
    "unit": "minutes"
    }
    },
    {
    "number": 4,
    "step": "Transfer the chickpeas to a food processor and add the pine nuts, 2 tablespoons of olive oil, 1/4 cup of the reserved chickpea cooking liquid (or water if using canned chicpeas), the tahini, garlic, lemon juice and salt. Process until smooth, adding more of the reserved chickpea cooking liquid or water as necessary to reach a light creamy consistency. Taste for seasoning and add more salt or lemon juice as desired.",
    "ingredients": [
    {
    "id": 9152,
    "name": "lemon juice",
    "localizedName": "lemon juice",
    "image": "lemon-juice.jpg"
    },
    {
    "id": 16057,
    "name": "chickpeas",
    "localizedName": "chickpeas",
    "image": "chickpeas.png"
    },
    {
    "id": 4053,
    "name": "olive oil",
    "localizedName": "olive oil",
    "image": "olive-oil.jpg"
    },
    {
    "id": 12147,
    "name": "pine nuts",
    "localizedName": "pine nuts",
    "image": "pine-nuts.png"
    },
    {
    "id": 1042027,
    "name": "seasoning",
    "localizedName": "seasoning",
    "image": "seasoning.png"
    },
    {
    "id": 11215,
    "name": "garlic",
    "localizedName": "garlic",
    "image": "garlic.png"
    },
    {
    "id": 12698,
    "name": "tahini",
    "localizedName": "tahini",
    "image": "tahini-paste.png"
    },
    {
    "id": 14412,
    "name": "water",
    "localizedName": "water",
    "image": "water.png"
    },
    {
    "id": 2047,
    "name": "salt",
    "localizedName": "salt",
    "image": "salt.jpg"
    }
    ],
    "equipment": [
    {
    "id": 404771,
    "name": "food processor",
    "localizedName": "food processor",
    "image": "food-processor.png"
    }
    ]
    },
    {
    "number": 5,
    "step": "Transfer the hummus to a shallow bowl and drizzle with olive oil.",
    "ingredients": [
    {
    "id": 4053,
    "name": "olive oil",
    "localizedName": "olive oil",
    "image": "olive-oil.jpg"
    },
    {
    "id": 16158,
    "name": "hummus",
    "localizedName": "hummus",
    "image": "hummus.jpg"
    }
    ],
    "equipment": [
    {
    "id": 404783,
    "name": "bowl",
    "localizedName": "bowl",
    "image": "bowl.jpg"
    }
    ]
    },
    {
    "number": 6,
    "step": "Sprinkle with za'atar and paprika, and serve with chopped fresh vegetables or toasted pita triangles.Refrigerate leftover hummus for a few days or freeze for up to a month.",
    "ingredients": [
    {
    "id": 11583,
    "name": "vegetable",
    "localizedName": "vegetable",
    "image": "mixed-vegetables.png"
    },
    {
    "id": 2028,
    "name": "paprika",
    "localizedName": "paprika",
    "image": "paprika.jpg"
    },
    {
    "id": 1002042,
    "name": "zaatar",
    "localizedName": "zaatar",
    "image": "zaatar.png"
    },
    {
    "id": 16158,
    "name": "hummus",
    "localizedName": "hummus",
    "image": "hummus.jpg"
    },
    {
    "id": 18413,
    "name": "pita",
    "localizedName": "pita",
    "image": "pita-bread.jpg"
    }
    ],
    "equipment": []
    }
    ]
    }
    ],
    "spoonacularSourceUrl": "https://spoonacular.com/hummus-and-zaatar-766453"
    },
    {
    "vegetarian": true,
    "vegan": true,
    "glutenFree": true,
    "dairyFree": true,
    "veryHealthy": true,
    "cheap": false,
    "veryPopular": true,
    "sustainable": false,
    "weightWatcherSmartPoints": 10,
    "gaps": "no",
    "lowFodmap": false,
    "aggregateLikes": 471,
    "spoonacularScore": 98,
    "healthScore": 61,
    "pricePerServing": 106.02,
    "id": 716627,
    "title": "Easy Homemade Rice and Beans",
    "readyInMinutes": 35,
    "servings": 2,
    "sourceUrl": "http://cooking2perfection.blogspot.com/2012/11/easy-homemade-rice-and-beans.html",
    "image": "https://spoonacular.com/recipeImages/716627-312x231.jpg",
    "imageType": "jpg",
    "summary": "Need a <b>gluten free and vegan main course</b>? Easy Homemade Rice and Beans could be a great recipe to try. One serving contains <b>446 calories</b>, <b>19g of protein</b>, and <b>4g of fat</b>. For <b>$1.06 per serving</b>, this recipe <b>covers 26%</b> of your daily requirements of vitamins and minerals. 471 person have made this recipe and would make it again. A mixture of olive oil, ground pepper, onion, and a handful of other ingredients are all it takes to make this recipe so yummy. To use up the olive oil you could follow this main course with the <a href=\"https://spoonacular.com/recipes/sauteed-banana-granola-and-yogurt-parfait-624619\">Sauteed Banana, Granolan and Yogurt Parfait</a> as a dessert. From preparation to the plate, this recipe takes approximately <b>35 minutes</b>. All things considered, we decided this recipe <b>deserves a spoonacular score of 99%</b>. This score is awesome. Try <a href=\"https://spoonacular.com/recipes/easy-homemade-refried-beans-619117\">Easy homemade refried beans</a>, <a href=\"https://spoonacular.com/recipes/homemade-southern-red-beans-and-rice-243655\">Homemade Southern Red Beans and Rice</a>, and <a href=\"https://spoonacular.com/recipes/skillet-chicken-with-homemade-rice-a-roni-and-green-beans-201454\">Skillet Chicken with Homemade Rice-A-Roni and Green Beans</a> for similar recipes.",
    "cuisines": [],
    "dishTypes": [
    "lunch",
    "main course",
    "main dish",
    "dinner"
    ],
    "diets": [
    "gluten free",
    "dairy free",
    "lacto ovo vegetarian",
    "vegan"
    ],
    "occasions": [],
    "analyzedInstructions": [
    {
    "name": "",
    "steps": [
    {
    "number": 1,
    "step": "Heat the olive oil in a large pot over medium heat.",
    "ingredients": [
    {
    "id": 4053,
    "name": "olive oil",
    "localizedName": "olive oil",
    "image": "olive-oil.jpg"
    }
    ],
    "equipment": [
    {
    "id": 404752,
    "name": "pot",
    "localizedName": "pot",
    "image": "stock-pot.jpg"
    }
    ]
    },
    {
    "number": 2,
    "step": "Add onions and saute until soft, or for about 5 minutes.",
    "ingredients": [
    {
    "id": 11282,
    "name": "onion",
    "localizedName": "onion",
    "image": "brown-onion.png"
    }
    ],
    "equipment": [],
    "length": {
    "number": 5,
    "unit": "minutes"
    }
    },
    {
    "number": 3,
    "step": "Add all other remaining ingredients and stir together. Increase the heat to medium high and bring to a boil. Cover and reduce heat to medium low so that the mixture simmers. Cook for 15-20 minutes, or until rice is fluffy and liquid is absorbed.*",
    "ingredients": [
    {
    "id": 20444,
    "name": "rice",
    "localizedName": "rice",
    "image": "uncooked-white-rice.png"
    }
    ],
    "equipment": [],
    "length": {
    "number": 20,
    "unit": "minutes"
    }
    },
    {
    "number": 4,
    "step": "Serve with salsa, cheese, and sour cream.",
    "ingredients": [
    {
    "id": 1056,
    "name": "sour cream",
    "localizedName": "sour cream",
    "image": "sour-cream.jpg"
    },
    {
    "id": 1041009,
    "name": "cheese",
    "localizedName": "cheese",
    "image": "cheddar-cheese.png"
    },
    {
    "id": 6164,
    "name": "salsa",
    "localizedName": "salsa",
    "image": "salsa.png"
    }
    ],
    "equipment": []
    }
    ]
    }
    ],
    "sourceName": null,
    "creditsText": null,
    "spoonacularSourceUrl": "https://spoonacular.com/easy-homemade-rice-and-beans-716627"
    },
    {
    "vegetarian": false,
    "vegan": false,
    "glutenFree": true,
    "dairyFree": false,
    "veryHealthy": true,
    "cheap": false,
    "veryPopular": true,
    "sustainable": false,
    "weightWatcherSmartPoints": 8,
    "gaps": "no",
    "lowFodmap": false,
    "aggregateLikes": 396,
    "spoonacularScore": 98,
    "healthScore": 66,
    "creditsText": "Full Belly Sisters",
    "license": "CC BY-SA 3.0",
    "sourceName": "Full Belly Sisters",
    "pricePerServing": 340.71,
    "id": 716408,
    "title": "Greek-Style Baked Fish: Fresh, Simple, and Delicious",
    "readyInMinutes": 30,
    "servings": 4,
    "sourceUrl": "http://fullbellysisters.blogspot.com/2012/04/greek-style-baked-fish-fresh-simple-and.html",
    "image": "https://spoonacular.com/recipeImages/716408-312x231.jpg",
    "imageType": "jpg",
    "summary": "You can never have too many main course recipes, so give Greek-Style Baked Fish: Fresh, Simple, and Delicious a try. For <b>$3.04 per serving</b>, this recipe <b>covers 21%</b> of your daily requirements of vitamins and minerals. This recipe makes 4 servings with <b>345 calories</b>, <b>28g of protein</b>, and <b>12g of fat</b> each. This recipe is liked by 396 foodies and cooks. Head to the store and pick up salt & pepper, pepper, wine, and a few other things to make it today. To use up the cooked rice you could follow this main course with the <a href=\"https://spoonacular.com/recipes/breakfast-rice-pudding-547155\">Breakfast Rice Pudding</a> as a dessert. From preparation to the plate, this recipe takes about <b>30 minutes</b>. It is a good option if you're following a <b>gluten free and pescatarian</b> diet. All things considered, we decided this recipe <b>deserves a spoonacular score of 96%</b>. This score is awesome. Similar recipes include <a href=\"https://spoonacular.com/recipes/simple-greek-style-baked-fish-557560\">Simple Greek Style Baked Fish</a>, <a href=\"https://spoonacular.com/recipes/greek-style-baked-fish-526858\">Greek Style Baked Fish</a>, and <a href=\"https://spoonacular.com/recipes/delicious-greek-pastitsio-casserole-style-569500\">Delicious Greek Pastitsio {Casserole-Style}</a>.",
    "cuisines": [],
    "dishTypes": [
    "lunch",
    "main course",
    "main dish",
    "dinner"
    ],
    "diets": [
    "gluten free",
    "pescatarian"
    ],
    "occasions": [],
    "analyzedInstructions": [
    {
    "name": "",
    "steps": [
    {
    "number": 1,
    "step": "Preheat the oven to 450 degrees F. Choose an oven-proof baking dish that your fish will fit in without overlapping and spray it with cooking spray.",
    "ingredients": [
    {
    "id": 4679,
    "name": "cooking spray",
    "localizedName": "cooking spray",
    "image": "cooking-spray.png"
    },
    {
    "id": 10115261,
    "name": "fish",
    "localizedName": "fish",
    "image": "fish-fillet.jpg"
    }
    ],
    "equipment": [
    {
    "id": 404646,
    "name": "baking pan",
    "localizedName": "baking pan",
    "image": "roasting-pan.jpg"
    },
    {
    "id": 404784,
    "name": "oven",
    "localizedName": "oven",
    "image": "oven.jpg",
    "temperature": {
    "number": 450,
    "unit": "Fahrenheit"
    }
    }
    ]
    },
    {
    "number": 2,
    "step": "Lay the fish fillets in the baking pan in a single layer, season with salt and pepper, then top the fish with red onion and bell pepper.",
    "ingredients": [
    {
    "id": 1102047,
    "name": "salt and pepper",
    "localizedName": "salt and pepper",
    "image": "salt-and-pepper.jpg"
    },
    {
    "id": 10115261,
    "name": "fish fillets",
    "localizedName": "fish fillets",
    "image": "fish-fillet.jpg"
    },
    {
    "id": 10211821,
    "name": "bell pepper",
    "localizedName": "bell pepper",
    "image": "bell-pepper-orange.png"
    },
    {
    "id": 10011282,
    "name": "red onion",
    "localizedName": "red onion",
    "image": "red-onion.png"
    },
    {
    "id": 10115261,
    "name": "fish",
    "localizedName": "fish",
    "image": "fish-fillet.jpg"
    }
    ],
    "equipment": [
    {
    "id": 404646,
    "name": "baking pan",
    "localizedName": "baking pan",
    "image": "roasting-pan.jpg"
    }
    ]
    },
    {
    "number": 3,
    "step": "Sprinkle with dried basil and oregano, the tomato, and the feta cheese, then drizzle the white wine and olive oil over top. Grind some fresh pepper over the top.",
    "ingredients": [
    {
    "id": 2003,
    "name": "dried basil",
    "localizedName": "dried basil",
    "image": "basil.jpg"
    },
    {
    "id": 1019,
    "name": "feta cheese",
    "localizedName": "feta cheese",
    "image": "feta.png"
    },
    {
    "id": 14106,
    "name": "white wine",
    "localizedName": "white wine",
    "image": "white-wine.jpg"
    },
    {
    "id": 4053,
    "name": "olive oil",
    "localizedName": "olive oil",
    "image": "olive-oil.jpg"
    },
    {
    "id": 2027,
    "name": "oregano",
    "localizedName": "oregano",
    "image": "oregano.jpg"
    },
    {
    "id": 1002030,
    "name": "pepper",
    "localizedName": "pepper",
    "image": "pepper.jpg"
    },
    {
    "id": 11529,
    "name": "tomato",
    "localizedName": "tomato",
    "image": "tomato.png"
    }
    ],
    "equipment": []
    },
    {
    "number": 4,
    "step": "Bake uncovered for about 12 – 15 minutes or until the fish flakes easily with a fork. Squeeze the lemon wedges over the cooked fish, garnish with the fresh basil and/or oregano and serve with hot cooked rice.",
    "ingredients": [
    {
    "id": 1029150,
    "name": "lemon wedge",
    "localizedName": "lemon wedge",
    "image": "lemon-wedge.png"
    },
    {
    "id": 10220445,
    "name": "cooked rice",
    "localizedName": "cooked rice",
    "image": "uncooked-white-rice.png"
    },
    {
    "id": 2044,
    "name": "fresh basil",
    "localizedName": "fresh basil",
    "image": "fresh-basil.jpg"
    },
    {
    "id": 2027,
    "name": "oregano",
    "localizedName": "oregano",
    "image": "oregano.jpg"
    },
    {
    "id": 10115261,
    "name": "fish",
    "localizedName": "fish",
    "image": "fish-fillet.jpg"
    }
    ],
    "equipment": [
    {
    "id": 404784,
    "name": "oven",
    "localizedName": "oven",
    "image": "oven.jpg"
    }
    ],
    "length": {
    "number": 15,
    "unit": "minutes"
    }
    }
    ]
    }
    ],
    "spoonacularSourceUrl": "https://spoonacular.com/greek-style-baked-fish-fresh-simple-and-delicious-716408"
    },
    {
    "vegetarian": false,
    "vegan": false,
    "glutenFree": true,
    "dairyFree": false,
    "veryHealthy": true,
    "cheap": false,
    "veryPopular": false,
    "sustainable": false,
    "weightWatcherSmartPoints": 15,
    "gaps": "no",
    "lowFodmap": false,
    "aggregateLikes": 159,
    "spoonacularScore": 98,
    "healthScore": 75,
    "creditsText": "Jen West",
    "sourceName": "Pink When",
    "pricePerServing": 362.46,
    "id": 795751,
    "title": "Chicken Fajita Stuffed Bell Pepper",
    "readyInMinutes": 45,
    "servings": 3,
    "sourceUrl": "http://www.pinkwhen.com/chicken-fajita-stuffed-bell-pepper/",
    "image": "https://spoonacular.com/recipeImages/795751-312x231.jpg",
    "imageType": "jpg",
    "summary": "Chicken Fajita Stuffed Bell Pepper might be just the <b>Mexican</b> recipe you are searching for. One serving contains <b>561 calories</b>, <b>36g of protein</b>, and <b>24g of fat</b>. For <b>$2.96 per serving</b>, this recipe <b>covers 41%</b> of your daily requirements of vitamins and minerals. 159 people have tried and liked this recipe. It works best as a main course, and is done in approximately <b>45 minutes</b>. Head to the store and pick up medium/large avocado, cheese, chili powder, and a few other things to make it today. To use up the quinoa you could follow this main course with the <a href=\"https://spoonacular.com/recipes/quinoa-pudding-129583\">Quinoa Pudding</a> as a dessert. It is a good option if you're following a <b>gluten free</b> diet. All things considered, we decided this recipe <b>deserves a spoonacular score of 98%</b>. This score is tremendous. Try <a href=\"https://spoonacular.com/recipes/stuffed-bell-peppers-or-meatloaf-in-a-bell-pepper-551310\">Stuffed Bell Peppers [or meatloaf in a bell pepper]</a>, <a href=\"https://spoonacular.com/recipes/stuffed-bell-pepper-526845\">Stuffed Bell Pepper</a>, and <a href=\"https://spoonacular.com/recipes/stuffed-red-bell-pepper-rellenos-772739\">Stuffed Red Bell Pepper Rellenos</a> for similar recipes.",
    "cuisines": [
    "Mexican"
    ],
    "dishTypes": [
    "lunch",
    "main course",
    "main dish",
    "dinner"
    ],
    "diets": [
    "gluten free"
    ],
    "occasions": [],
    "analyzedInstructions": [
    {
    "name": "",
    "steps": [
    {
    "number": 1,
    "step": "To get started heat oven to 35",
    "ingredients": [],
    "equipment": [
    {
    "id": 404784,
    "name": "oven",
    "localizedName": "oven",
    "image": "oven.jpg"
    }
    ]
    },
    {
    "number": 2,
    "step": "Mix salt, pepper, cilantro, cumin, chili powder, and quinoa together and place to the side.",
    "ingredients": [
    {
    "id": 2009,
    "name": "chili powder",
    "localizedName": "chili powder",
    "image": "chili-powder.jpg"
    },
    {
    "id": 11165,
    "name": "cilantro",
    "localizedName": "cilantro",
    "image": "cilantro.png"
    },
    {
    "id": 1002030,
    "name": "pepper",
    "localizedName": "pepper",
    "image": "pepper.jpg"
    },
    {
    "id": 20035,
    "name": "quinoa",
    "localizedName": "quinoa",
    "image": "uncooked-quinoa.png"
    },
    {
    "id": 1002014,
    "name": "cumin",
    "localizedName": "cumin",
    "image": "ground-cumin.jpg"
    },
    {
    "id": 2047,
    "name": "salt",
    "localizedName": "salt",
    "image": "salt.jpg"
    }
    ],
    "equipment": []
    },
    {
    "number": 3,
    "step": "Cut the bell pepper in half (if you havent already) and clean out the seeds.",
    "ingredients": [
    {
    "id": 10211821,
    "name": "bell pepper",
    "localizedName": "bell pepper",
    "image": "bell-pepper-orange.png"
    },
    {
    "id": 93818,
    "name": "seeds",
    "localizedName": "seeds",
    "image": "sunflower-seeds.jpg"
    }
    ],
    "equipment": []
    },
    {
    "number": 4,
    "step": "Layer quinoa and then grilled chicken into the pepper, and then top each with cheese.",
    "ingredients": [
    {
    "id": 1015114,
    "name": "grilled chicken",
    "localizedName": "grilled chicken",
    "image": "rotisserie-chicken.png"
    },
    {
    "id": 1041009,
    "name": "cheese",
    "localizedName": "cheese",
    "image": "cheddar-cheese.png"
    },
    {
    "id": 1002030,
    "name": "pepper",
    "localizedName": "pepper",
    "image": "pepper.jpg"
    },
    {
    "id": 20035,
    "name": "quinoa",
    "localizedName": "quinoa",
    "image": "uncooked-quinoa.png"
    }
    ],
    "equipment": []
    },
    {
    "number": 5,
    "step": "Place in the oven for about 10 minutes until the bell pepper has softened.Chicken Fajita Stuffed Bell Pepper",
    "ingredients": [
    {
    "id": 10211821,
    "name": "bell pepper",
    "localizedName": "bell pepper",
    "image": "bell-pepper-orange.png"
    },
    {
    "id": 5006,
    "name": "whole chicken",
    "localizedName": "whole chicken",
    "image": "whole-chicken.jpg"
    }
    ],
    "equipment": [
    {
    "id": 404784,
    "name": "oven",
    "localizedName": "oven",
    "image": "oven.jpg"
    }
    ],
    "length": {
    "number": 10,
    "unit": "minutes"
    }
    },
    {
    "number": 6,
    "step": "Top with avocado and serve with shredded lettuce and salsa for a complete meal.This is SO GOOD! I love bell peppers, and I love all of these flavors that are married together that make this chicken fajita stuffed bell pepper so amazing. I could seriously just eat the flavored quinoa all by itself.If you are looking for even more delicious and healthy recipes, make sure you head over to the Simple Fit Forty tab under the cooking section of this blog. We have all of our favorite healthy recipes listed for you right there in one spot. You can also drool over out latest on the Simple Fit Forty Instagram page.If you are looking to get healthy and fit, come and join the super secret and awesome Simple Fit Forty Lifestyle community over on Facebook. We would love to have you join!",
    "ingredients": [
    {
    "id": 10211821,
    "name": "bell pepper",
    "localizedName": "bell pepper",
    "image": "bell-pepper-orange.png"
    },
    {
    "id": 9037,
    "name": "avocado",
    "localizedName": "avocado",
    "image": "avocado.jpg"
    },
    {
    "id": 5006,
    "name": "whole chicken",
    "localizedName": "whole chicken",
    "image": "whole-chicken.jpg"
    },
    {
    "id": 11252,
    "name": "lettuce",
    "localizedName": "lettuce",
    "image": "iceberg-lettuce.jpg"
    },
    {
    "id": 20035,
    "name": "quinoa",
    "localizedName": "quinoa",
    "image": "uncooked-quinoa.png"
    },
    {
    "id": 6164,
    "name": "salsa",
    "localizedName": "salsa",
    "image": "salsa.png"
    }
    ],
    "equipment": []
    }
    ]
    }
    ],
    "spoonacularSourceUrl": "https://spoonacular.com/chicken-fajita-stuffed-bell-pepper-795751"
    },
    {
    "vegetarian": true,
    "vegan": false,
    "glutenFree": true,
    "dairyFree": true,
    "veryHealthy": true,
    "cheap": false,
    "veryPopular": false,
    "sustainable": false,
    "weightWatcherSmartPoints": 4,
    "gaps": "no",
    "lowFodmap": false,
    "aggregateLikes": 26,
    "spoonacularScore": 98,
    "healthScore": 100,
    "creditsText": "Foodista.com – The Cooking Encyclopedia Everyone Can Edit",
    "license": "CC BY 3.0",
    "sourceName": "Foodista",
    "pricePerServing": 169.38,
    "id": 640941,
    "title": "Crunchy Brussels Sprouts Side Dish",
    "readyInMinutes": 30,
    "servings": 4,
    "sourceUrl": "http://www.foodista.com/recipe/LKJMG5RP/crunchy-brussels-sprouts",
    "image": "https://spoonacular.com/recipeImages/640941-312x231.jpg",
    "imageType": "jpg",
    "summary": "Crunchy Brussels Sprouts Side Dish might be just the side dish you are searching for. This recipe makes 4 servings with <b>232 calories</b>, <b>8g of protein</b>, and <b>16g of fat</b> each. For <b>$1.69 per serving</b>, this recipe <b>covers 22%</b> of your daily requirements of vitamins and minerals. 26 people have tried and liked this recipe. If you have pepper, wine vinegar, dijon mustard, and a few other ingredients on hand, you can make it. From preparation to the plate, this recipe takes around <b>30 minutes</b>. It is a good option if you're following a <b>caveman, gluten free, dairy free, and primal</b> diet. All things considered, we decided this recipe <b>deserves a spoonacular score of 99%</b>. This score is spectacular. Try <a href=\"https://spoonacular.com/recipes/easy-side-dish-roasted-brussels-sprouts-and-grapes-474168\">Easy Side Dish – Roasted Brussels Sprouts and Grapes</a>, <a href=\"https://spoonacular.com/recipes/csa-day-with-a-side-of-sauteed-brussels-sprouts-with-lemon-vinaigrette-534559\">CSA Day with a Side of Sauteed Brussels Sprouts with Lemon Vinaigrette</a>, and <a href=\"https://spoonacular.com/recipes/thanksgiving-side-shredded-brussels-sprouts-with-persimmons-apricots-and-walnuts-574577\">Thanksgiving Side : Shredded Brussels Sprouts with Persimmons, Apricots, and Walnuts</a> for similar recipes.",
    "cuisines": [],
    "dishTypes": [
    "side dish"
    ],
    "diets": [
    "gluten free",
    "dairy free",
    "paleolithic",
    "lacto ovo vegetarian",
    "primal"
    ],
    "occasions": [],
    "analyzedInstructions": [
    {
    "name": "",
    "steps": [
    {
    "number": 1,
    "step": "Blanch the Brussels sprouts in boiling water for 6-8 minutes or in a microwave oven in a little water for about 4 minutes.",
    "ingredients": [
    {
    "id": 11098,
    "name": "brussels sprouts",
    "localizedName": "brussels sprouts",
    "image": "brussels-sprouts.jpg"
    },
    {
    "id": 14412,
    "name": "water",
    "localizedName": "water",
    "image": "water.png"
    }
    ],
    "equipment": [
    {
    "id": 404762,
    "name": "microwave",
    "localizedName": "microwave",
    "image": "microwave.jpg"
    },
    {
    "id": 404784,
    "name": "oven",
    "localizedName": "oven",
    "image": "oven.jpg"
    }
    ],
    "length": {
    "number": 12,
    "unit": "minutes"
    }
    },
    {
    "number": 2,
    "step": "Drain.",
    "ingredients": [],
    "equipment": []
    },
    {
    "number": 3,
    "step": "Saute the Brussels sprouts, stirring constantly, until they become golden-brown in color.Meanwhile mix the vinegar, mustard, honey and olive oil.",
    "ingredients": [
    {
    "id": 11098,
    "name": "brussels sprouts",
    "localizedName": "brussels sprouts",
    "image": "brussels-sprouts.jpg"
    },
    {
    "id": 4053,
    "name": "olive oil",
    "localizedName": "olive oil",
    "image": "olive-oil.jpg"
    },
    {
    "id": 2046,
    "name": "mustard",
    "localizedName": "mustard",
    "image": "regular-mustard.jpg"
    },
    {
    "id": 2053,
    "name": "vinegar",
    "localizedName": "vinegar",
    "image": "vinegar-(white).jpg"
    },
    {
    "id": 19296,
    "name": "honey",
    "localizedName": "honey",
    "image": "honey.png"
    }
    ],
    "equipment": []
    },
    {
    "number": 4,
    "step": "Add walnuts to the sprouts, stir and combine.",
    "ingredients": [
    {
    "id": 11001,
    "name": "sprouts",
    "localizedName": "sprouts",
    "image": "alfalfa-sprouts.png"
    },
    {
    "id": 12155,
    "name": "walnuts",
    "localizedName": "walnuts",
    "image": "walnuts.jpg"
    }
    ],
    "equipment": []
    },
    {
    "number": 5,
    "step": "Pour the vinegar dressing over the sprouts, season with pepper.",
    "ingredients": [
    {
    "id": 11001,
    "name": "sprouts",
    "localizedName": "sprouts",
    "image": "alfalfa-sprouts.png"
    },
    {
    "id": 2053,
    "name": "vinegar",
    "localizedName": "vinegar",
    "image": "vinegar-(white).jpg"
    },
    {
    "id": 1002030,
    "name": "pepper",
    "localizedName": "pepper",
    "image": "pepper.jpg"
    }
    ],
    "equipment": []
    },
    {
    "number": 6,
    "step": "Mix and combine so that each sprout is covered with the dressing.",
    "ingredients": [],
    "equipment": []
    },
    {
    "number": 7,
    "step": "Serve warm or cold as a side dish.",
    "ingredients": [],
    "equipment": []
    }
    ]
    }
    ],
    "spoonacularSourceUrl": "https://spoonacular.com/crunchy-brussels-sprouts-side-dish-640941"
    },
    {
    "vegetarian": true,
    "vegan": true,
    "glutenFree": true,
    "dairyFree": true,
    "veryHealthy": true,
    "cheap": false,
    "veryPopular": false,
    "sustainable": false,
    "weightWatcherSmartPoints": 2,
    "gaps": "no",
    "lowFodmap": false,
    "aggregateLikes": 32,
    "spoonacularScore": 98,
    "healthScore": 87,
    "creditsText": "Lisa's Vegetarian Kitchen",
    "license": "CC BY 2.5 CA",
    "sourceName": "Food and Spice",
    "pricePerServing": 100.72,
    "id": 798400,
    "title": "Spicy Black-Eyed Pea Curry with Swiss Chard and Roasted Eggplant",
    "readyInMinutes": 45,
    "servings": 6,
    "sourceUrl": "http://foodandspice.blogspot.com/2016/08/spicy-black-eyed-pea-curry-with-swiss.html",
    "image": "https://spoonacular.com/recipeImages/798400-312x231.jpg",
    "imageType": "jpg",
    "summary": "The recipe Spicy Black-Eyed Pea Curry with Swiss Chard and Roasted Eggplant is ready <b>in roughly 45 minutes</b> and is definitely a spectacular <b>gluten free and vegan</b> option for lovers of Indian food. This recipe makes 6 servings with <b>130 calories</b>, <b>7g of protein</b>, and <b>2g of fat</b> each. For <b>99 cents per serving</b>, this recipe <b>covers 21%</b> of your daily requirements of vitamins and minerals. A few people made this recipe, and 32 would say it hit the spot. A mixture of chilies, olive oil, garam masala, and a handful of other ingredients are all it takes to make this recipe so delicious. All things considered, we decided this recipe <b>deserves a spoonacular score of 98%</b>. This score is amazing. Try <a href=\"https://spoonacular.com/recipes/black-eyed-peas-in-a-spicy-goan-curry-31050\">Black-eyed Peas In A Spicy Goan Curry</a>, <a href=\"https://spoonacular.com/recipes/black-eyed-peas-in-a-spicy-goan-curry-31057\">Black-eyed Peas In A Spicy Goan Curry</a>, and <a href=\"https://spoonacular.com/recipes/roasted-butternut-squash-black-bean-and-swiss-chard-quinoa-bibimbap-247604\">Roasted Butternut Squash, Black Bean and Swiss Chard Quinoa Bibimbap</a> for similar recipes.",
    "cuisines": [
    "Indian",
    "Asian"
    ],
    "dishTypes": [
    "side dish"
    ],
    "diets": [
    "gluten free",
    "dairy free",
    "lacto ovo vegetarian",
    "vegan"
    ],
    "occasions": [],
    "analyzedInstructions": [
    {
    "name": "",
    "steps": [
    {
    "number": 1,
    "step": "Rinse the black-eyed peas and soak in several inches of water for 6 hours or overnight.",
    "ingredients": [
    {
    "id": 14412,
    "name": "water",
    "localizedName": "water",
    "image": "water.png"
    },
    {
    "id": 11304,
    "name": "peas",
    "localizedName": "peas",
    "image": "peas.jpg"
    }
    ],
    "equipment": [],
    "length": {
    "number": 360,
    "unit": "minutes"
    }
    },
    {
    "number": 2,
    "step": "Drain and rinse, then transfer to a large saucepan and cover with fresh water. Bring to a boil, reduce heat to medium-low, cover, and simmer for 40 to 60 minutes. Take care not to overcook  the beans should be tender but not be falling apart.",
    "ingredients": [
    {
    "id": 0,
    "name": "beans",
    "localizedName": "beans",
    "image": "kidney-beans.jpg"
    },
    {
    "id": 14412,
    "name": "water",
    "localizedName": "water",
    "image": "water.png"
    }
    ],
    "equipment": [
    {
    "id": 404669,
    "name": "sauce pan",
    "localizedName": "sauce pan",
    "image": "sauce-pan.jpg"
    }
    ],
    "length": {
    "number": 40,
    "unit": "minutes"
    }
    },
    {
    "number": 3,
    "step": "Drain and set aside.To prepare the eggplant, cut of the stem and bottom edge and then cut in half lengthwise. Score the flesh into diagonal 1-inch lines, then turn and score again until you have a diagonal pattern. Take care not to cut through the skin.",
    "ingredients": [
    {
    "id": 11209,
    "name": "eggplant",
    "localizedName": "eggplant",
    "image": "eggplant.png"
    }
    ],
    "equipment": []
    },
    {
    "number": 4,
    "step": "Sprinkle with some salt and let sit for 40 minutes. Rinse and squeeze out any excess water.",
    "ingredients": [
    {
    "id": 14412,
    "name": "water",
    "localizedName": "water",
    "image": "water.png"
    },
    {
    "id": 2047,
    "name": "salt",
    "localizedName": "salt",
    "image": "salt.jpg"
    }
    ],
    "equipment": [],
    "length": {
    "number": 40,
    "unit": "minutes"
    }
    },
    {
    "number": 5,
    "step": "Brush the eggplant with some oil and transfer to a roasting pan.",
    "ingredients": [
    {
    "id": 11209,
    "name": "eggplant",
    "localizedName": "eggplant",
    "image": "eggplant.png"
    },
    {
    "id": 4582,
    "name": "cooking oil",
    "localizedName": "cooking oil",
    "image": "vegetable-oil.jpg"
    }
    ],
    "equipment": [
    {
    "id": 404629,
    "name": "roasting pan",
    "localizedName": "roasting pan",
    "image": "roasting-pan.jpg"
    }
    ]
    },
    {
    "number": 6,
    "step": "Bake in a preheated 400 oven until the flesh appears collapsed and is wrinkly.",
    "ingredients": [],
    "equipment": [
    {
    "id": 404784,
    "name": "oven",
    "localizedName": "oven",
    "image": "oven.jpg"
    }
    ]
    },
    {
    "number": 7,
    "step": "Remove from heat and let cool for about 10 minutes, season with a bit of salt, and remove the flesh from the eggplant. If there is too much water, drain in a strainer. Set aside.",
    "ingredients": [
    {
    "id": 11209,
    "name": "eggplant",
    "localizedName": "eggplant",
    "image": "eggplant.png"
    },
    {
    "id": 14412,
    "name": "water",
    "localizedName": "water",
    "image": "water.png"
    },
    {
    "id": 2047,
    "name": "salt",
    "localizedName": "salt",
    "image": "salt.jpg"
    }
    ],
    "equipment": [
    {
    "id": 405600,
    "name": "sieve",
    "localizedName": "sieve",
    "image": "strainer.png"
    }
    ],
    "length": {
    "number": 10,
    "unit": "minutes"
    }
    },
    {
    "number": 8,
    "step": "Heat the oil over medium heat in the same saucepan used to cook the black-eyed peas. When hot, toss in the shallots and chilies and saut for 2 to 3 minutes. Now add the spices and stir for another minute, until fragrant.",
    "ingredients": [
    {
    "id": 11677,
    "name": "shallot",
    "localizedName": "shallot",
    "image": "shallots.jpg"
    },
    {
    "id": 11819,
    "name": "chili pepper",
    "localizedName": "chili pepper",
    "image": "red-chili.jpg"
    },
    {
    "id": 2035,
    "name": "spices",
    "localizedName": "spices",
    "image": "spices.png"
    },
    {
    "id": 11304,
    "name": "peas",
    "localizedName": "peas",
    "image": "peas.jpg"
    },
    {
    "id": 4582,
    "name": "cooking oil",
    "localizedName": "cooking oil",
    "image": "vegetable-oil.jpg"
    }
    ],
    "equipment": [
    {
    "id": 404669,
    "name": "sauce pan",
    "localizedName": "sauce pan",
    "image": "sauce-pan.jpg"
    }
    ],
    "length": {
    "number": 2,
    "unit": "minutes"
    }
    },
    {
    "number": 9,
    "step": "Add the tomato, cook for another few minutes, and then add the eggplant and black-eyed peas, and cook for another few minutes, stirring often.",
    "ingredients": [
    {
    "id": 11209,
    "name": "eggplant",
    "localizedName": "eggplant",
    "image": "eggplant.png"
    },
    {
    "id": 11529,
    "name": "tomato",
    "localizedName": "tomato",
    "image": "tomato.png"
    },
    {
    "id": 11304,
    "name": "peas",
    "localizedName": "peas",
    "image": "peas.jpg"
    }
    ],
    "equipment": []
    },
    {
    "number": 10,
    "step": "Pour a few tablespoons of water into the pan and add handfuls of chard at a time until wilted.",
    "ingredients": [
    {
    "id": 11147,
    "name": "swiss chard",
    "localizedName": "swiss chard",
    "image": "swiss-chard.jpg"
    },
    {
    "id": 14412,
    "name": "water",
    "localizedName": "water",
    "image": "water.png"
    }
    ],
    "equipment": [
    {
    "id": 404645,
    "name": "frying pan",
    "localizedName": "frying pan",
    "image": "pan.png"
    }
    ]
    },
    {
    "number": 11,
    "step": "Add more water as necessary.",
    "ingredients": [
    {
    "id": 14412,
    "name": "water",
    "localizedName": "water",
    "image": "water.png"
    }
    ],
    "equipment": []
    },
    {
    "number": 12,
    "step": "Add the lemon juice and salt to taste near the end of the cooking time.",
    "ingredients": [
    {
    "id": 9152,
    "name": "lemon juice",
    "localizedName": "lemon juice",
    "image": "lemon-juice.jpg"
    },
    {
    "id": 2047,
    "name": "salt",
    "localizedName": "salt",
    "image": "salt.jpg"
    }
    ],
    "equipment": []
    },
    {
    "number": 13,
    "step": "Remove from heat, cover, and let sit for a few minutes before serving.",
    "ingredients": [],
    "equipment": []
    }
    ]
    }
    ],
    "spoonacularSourceUrl": "https://spoonacular.com/spicy-black-eyed-pea-curry-with-swiss-chard-and-roasted-eggplant-798400"
    },
    {
    "vegetarian": false,
    "vegan": false,
    "glutenFree": true,
    "dairyFree": true,
    "veryHealthy": true,
    "cheap": false,
    "veryPopular": false,
    "sustainable": false,
    "weightWatcherSmartPoints": 4,
    "gaps": "no",
    "lowFodmap": false,
    "aggregateLikes": 80,
    "spoonacularScore": 98,
    "healthScore": 55,
    "creditsText": "Foodista.com – The Cooking Encyclopedia Everyone Can Edit",
    "license": "CC BY 3.0",
    "sourceName": "Foodista",
    "pricePerServing": 259.09,
    "id": 756814,
    "title": "Powerhouse Almond Matcha Superfood Smoothie",
    "readyInMinutes": 10,
    "servings": 2,
    "sourceUrl": "http://www.foodista.com/blog/2015/05/17/powehouse-almond-matcha-superfood-smoothie",
    "image": "https://spoonacular.com/recipeImages/756814-312x231.jpg",
    "imageType": "jpg",
    "summary": "Powerhouse Almond Matcha Superfood Smoothie might be just the morn meal you are searching for. This recipe makes 2 servings with <b>294 calories</b>, <b>11g of protein</b>, and <b>13g of fat</b> each. For <b>$2.59 per serving</b>, this recipe <b>covers 27%</b> of your daily requirements of vitamins and minerals. If you have pineapple, almond milk, banana, and a few other ingredients on hand, you can make it. 80 people were impressed by this recipe. It is a good option if you're following a <b>gluten free, dairy free, and whole 30</b> diet. From preparation to the plate, this recipe takes around <b>10 minutes</b>. All things considered, we decided this recipe <b>deserves a spoonacular score of 98%</b>. This score is tremendous. Try <a href=\"https://spoonacular.com/recipes/powerhouse-golden-turmeric-smoothie-882363\">Powerhouse Golden Turmeric Smoothie</a>, <a href=\"https://spoonacular.com/recipes/matcha-almond-layer-cake-with-matcha-frosting-523362\">Matchan Almond Layer Cake with Matcha Frosting</a>, and <a href=\"https://spoonacular.com/recipes/minty-matcha-nanaimo-bars-a-decadent-superfood-treat-704047\">Minty Matcha Nanaimo Bars: A Decadent Superfood Treat</a> for similar recipes.",
    "cuisines": [],
    "dishTypes": [
    "side dish"
    ],
    "diets": [
    "gluten free",
    "dairy free"
    ],
    "occasions": [],
    "analyzedInstructions": [
    {
    "name": "",
    "steps": [
    {
    "number": 1,
    "step": "Combine all of the ingredients in a blender. Blend on high until smooth.",
    "ingredients": [],
    "equipment": [
    {
    "id": 404726,
    "name": "blender",
    "localizedName": "blender",
    "image": "blender.png"
    }
    ]
    },
    {
    "number": 2,
    "step": "Serve immediately.",
    "ingredients": [],
    "equipment": []
    }
    ]
    }
    ],
    "spoonacularSourceUrl": "https://spoonacular.com/powerhouse-almond-matcha-superfood-smoothie-756814"
    },
    {
    "vegetarian": false,
    "vegan": false,
    "glutenFree": true,
    "dairyFree": false,
    "veryHealthy": true,
    "cheap": false,
    "veryPopular": false,
    "sustainable": false,
    "weightWatcherSmartPoints": 8,
    "gaps": "no",
    "lowFodmap": false,
    "aggregateLikes": 126,
    "spoonacularScore": 98,
    "healthScore": 73,
    "creditsText": "Afrolems",
    "license": "CC BY 4.0",
    "sourceName": "Afrolems",
    "pricePerServing": 494.53,
    "id": 729366,
    "title": "Plantain Salad",
    "readyInMinutes": 45,
    "servings": 1,
    "sourceUrl": "http://www.afrolems.com/2016/04/07/plantain-salad/",
    "image": "https://spoonacular.com/recipeImages/729366-312x231.jpg",
    "imageType": "jpg",
    "summary": "Plantain Salad might be just the main course you are searching for. This gluten free and pescatarian recipe serves 1 and costs <b>$5.6 per serving</b>. One serving contains <b>639 calories</b>, <b>20g of protein</b>, and <b>18g of fat</b>. Several people made this recipe, and 126 would say it hit the spot. A mixture of vegetable oil, finger of plantain, tomatoes, and a handful of other ingredients are all it takes to make this recipe so delicious. To use up the vegetable oil you could follow this main course with the <a href=\"https://spoonacular.com/recipes/blueberry-coffee-cake-sundaysupper-511062\">Blueberry Coffee Cake #SundaySupper</a> as a dessert. From preparation to the plate, this recipe takes roughly <b>45 minutes</b>. All things considered, we decided this recipe <b>deserves a spoonacular score of 99%</b>. This score is excellent. Try <a href=\"https://spoonacular.com/recipes/how-to-spiralize-a-plantain-plantain-rice-and-beans-563745\">How to Spiralize a Plantain & Plantain “Rice” and Beans</a>, <a href=\"https://spoonacular.com/recipes/honey-mustard-crunchy-chicken-plantain-salad-509763\">Honey Mustard Crunchy Chicken Plantain Salad</a>, and <a href=\"https://spoonacular.com/recipes/plantain-and-coconut-pork-patties-with-a-tropical-mango-and-cucumber-salad-550923\">Plantain and Coconut Pork Patties with a Tropical Mango and Cucumber Salad</a> for similar recipes.",
    "cuisines": [],
    "dishTypes": [
    "salad"
    ],
    "diets": [
    "gluten free",
    "primal",
    "pescatarian"
    ],
    "occasions": [],
    "analyzedInstructions": [
    {
    "name": "",
    "steps": [
    {
    "number": 1,
    "step": "Cube your plantain, fry and set aside.Chop your vegetables into your salad bowl and toss",
    "ingredients": [
    {
    "id": 11583,
    "name": "vegetable",
    "localizedName": "vegetable",
    "image": "mixed-vegetables.png"
    },
    {
    "id": 9277,
    "name": "plantain",
    "localizedName": "plantain",
    "image": "plantains.jpg"
    }
    ],
    "equipment": [
    {
    "id": 404783,
    "name": "bowl",
    "localizedName": "bowl",
    "image": "bowl.jpg"
    }
    ]
    },
    {
    "number": 2,
    "step": "In a pan, heat up vegetable oil and stir fry your shrimps and season. Allow to cool",
    "ingredients": [
    {
    "id": 4669,
    "name": "vegetable oil",
    "localizedName": "vegetable oil",
    "image": "vegetable-oil.jpg"
    },
    {
    "id": 15270,
    "name": "shrimp",
    "localizedName": "shrimp",
    "image": "shrimp.png"
    }
    ],
    "equipment": [
    {
    "id": 404645,
    "name": "frying pan",
    "localizedName": "frying pan",
    "image": "pan.png"
    }
    ]
    },
    {
    "number": 3,
    "step": "Toss in your plantain and shrimps once cool into your bowl of vegetables.",
    "ingredients": [
    {
    "id": 11583,
    "name": "vegetable",
    "localizedName": "vegetable",
    "image": "mixed-vegetables.png"
    },
    {
    "id": 9277,
    "name": "plantain",
    "localizedName": "plantain",
    "image": "plantains.jpg"
    },
    {
    "id": 15270,
    "name": "shrimp",
    "localizedName": "shrimp",
    "image": "shrimp.png"
    }
    ],
    "equipment": [
    {
    "id": 404783,
    "name": "bowl",
    "localizedName": "bowl",
    "image": "bowl.jpg"
    }
    ]
    },
    {
    "number": 4,
    "step": "Sprinkle the parmesan cheese over the salad",
    "ingredients": [
    {
    "id": 1033,
    "name": "parmesan",
    "localizedName": "parmesan",
    "image": "parmesan.jpg"
    }
    ],
    "equipment": []
    },
    {
    "number": 5,
    "step": "Drizzle your dressing over and serve cool.   ",
    "ingredients": [],
    "equipment": []
    }
    ]
    }
    ],
    "spoonacularSourceUrl": "https://spoonacular.com/plantain-salad-729366"
    },
    {
    "vegetarian": true,
    "vegan": true,
    "glutenFree": true,
    "dairyFree": true,
    "veryHealthy": true,
    "cheap": false,
    "veryPopular": false,
    "sustainable": false,
    "weightWatcherSmartPoints": 17,
    "gaps": "no",
    "lowFodmap": false,
    "aggregateLikes": 94,
    "spoonacularScore": 98,
    "healthScore": 75,
    "creditsText": "Pick Fresh Foods",
    "license": "CC BY 3.0",
    "sourceName": "Pick Fresh Foods",
    "pricePerServing": 414.24,
    "id": 715769,
    "title": "Broccolini Quinoa Pilaf",
    "readyInMinutes": 30,
    "servings": 2,
    "sourceUrl": "http://pickfreshfoods.com/broccolini-quinoa-pilaf/",
    "image": "https://spoonacular.com/recipeImages/715769-312x231.jpg",
    "imageType": "jpg",
    "summary": "If you want to add more <b>Mediterranean</b> recipes to your recipe box, Broccolini Quinoa Pilaf might be a recipe you should try. One portion of this dish contains around <b>20g of protein</b>, <b>31g of fat</b>, and a total of <b>625 calories</b>. This recipe serves 2 and costs $4.14 per serving. A few people really liked this main course. 95 people have made this recipe and would make it again. Head to the store and pick up quinoa, garlic clove, olive oil, and a few other things to make it today. From preparation to the plate, this recipe takes roughly <b>30 minutes</b>. It is a good option if you're following a <b>gluten free, dairy free, lacto ovo vegetarian, and vegan</b> diet. It is brought to you by Pick Fresh Foods. All things considered, we decided this recipe <b>deserves a spoonacular score of 98%</b>. This score is awesome. Similar recipes include <a href=\"https://spoonacular.com/recipes/spring-broccolini-kale-quinoa-bowls-734866\">Spring Broccolini & Kale Quinoa Bowls</a>, <a href=\"https://spoonacular.com/recipes/orange-sesame-salmon-with-quinoa-broccolini-839832\">Orange-Sesame Salmon with Quinoa & Broccolini</a>, and <a href=\"https://spoonacular.com/recipes/black-pepper-goat-cheese-and-chard-quinoa-with-roasted-broccolini-625829\">Black Pepper Goat Cheese and Chard Quinoa with Roasted Broccolini</a>.",
    "cuisines": [
    "Mediterranean",
    "Italian",
    "European"
    ],
    "dishTypes": [
    "lunch",
    "main course",
    "main dish",
    "dinner"
    ],
    "diets": [
    "gluten free",
    "dairy free",
    "lacto ovo vegetarian",
    "vegan"
    ],
    "occasions": [],
    "analyzedInstructions": [
    {
    "name": "",
    "steps": [
    {
    "number": 1,
    "step": "In a large pan with lid heat olive oil over medium high heat.",
    "ingredients": [
    {
    "id": 4053,
    "name": "olive oil",
    "localizedName": "olive oil",
    "image": "olive-oil.jpg"
    }
    ],
    "equipment": [
    {
    "id": 404645,
    "name": "frying pan",
    "localizedName": "frying pan",
    "image": "pan.png"
    }
    ]
    },
    {
    "number": 2,
    "step": "Add onions and cook for 1 minute.",
    "ingredients": [
    {
    "id": 11282,
    "name": "onion",
    "localizedName": "onion",
    "image": "brown-onion.png"
    }
    ],
    "equipment": [],
    "length": {
    "number": 1,
    "unit": "minutes"
    }
    },
    {
    "number": 3,
    "step": "Add garlic and cook until onions are translucent and garlic is fragrant.",
    "ingredients": [
    {
    "id": 11215,
    "name": "garlic",
    "localizedName": "garlic",
    "image": "garlic.png"
    },
    {
    "id": 11282,
    "name": "onion",
    "localizedName": "onion",
    "image": "brown-onion.png"
    }
    ],
    "equipment": []
    },
    {
    "number": 4,
    "step": "Add quinoa to pan, stir to combine. Slowly add in broth and bring to a boil.Cover and reduce heat to low, cook for 15 minutes.In the last 2-3 minutes of cooking add in broccolini on top of the quinoa (do not stir) and cover.Uncover and toss broccolini and quinoa together.Season to taste with salt and pepper.",
    "ingredients": [
    {
    "id": 1102047,
    "name": "salt and pepper",
    "localizedName": "salt and pepper",
    "image": "salt-and-pepper.jpg"
    },
    {
    "id": 98840,
    "name": "broccolini",
    "localizedName": "broccolini",
    "image": "broccolini.jpg"
    },
    {
    "id": 20035,
    "name": "quinoa",
    "localizedName": "quinoa",
    "image": "uncooked-quinoa.png"
    },
    {
    "id": 1006615,
    "name": "broth",
    "localizedName": "broth",
    "image": "chicken-broth.png"
    }
    ],
    "equipment": [
    {
    "id": 404645,
    "name": "frying pan",
    "localizedName": "frying pan",
    "image": "pan.png"
    }
    ],
    "length": {
    "number": 18,
    "unit": "minutes"
    }
    },
    {
    "number": 5,
    "step": "Add walnuts and serve hot.",
    "ingredients": [
    {
    "id": 12155,
    "name": "walnuts",
    "localizedName": "walnuts",
    "image": "walnuts.jpg"
    }
    ],
    "equipment": []
    }
    ]
    }
    ],
    "spoonacularSourceUrl": "https://spoonacular.com/broccolini-quinoa-pilaf-715769"
    }
    ]




