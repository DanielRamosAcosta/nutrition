import { describe, it } from "vitest"
import { IngredientId } from "./IngredientId.js"
import { Recipe } from "./Recipe.js"
import { Weight } from "./Weight.js"
import { IngredientRepositoryMultiplexer } from "./IngredientRepositoryMultiplexer.js"
import { DayPlan } from "./DayPlan.js"
import { Meal } from "./Meal.js"
import { MealTime } from "./MealTime.js"
import { MacronutrientsCalculator } from "./MacronutrientsCalculator.js"
import { Sex } from "./Sex.js"
import { ActivityLevel } from "./ActivityLevel.js"
import { MainGoal } from "./MainGoal.js"
import { Ingredient } from "./Ingredient.js"
import { Nutriments } from "./Nutriments.js"
import { Energy } from "./Energy.js"
import { Macros } from "./Macros.js"

describe("example", () => {
  it("example", async () => {
    const ingredients = new IngredientRepositoryMultiplexer()

    const whiteBeans = await ingredients.findOrFail(new IngredientId("8480000260192"))
    const oats = await ingredients.findOrFail(new IngredientId("4008713756661"))
    const soyMilk = await ingredients.findOrFail(new IngredientId("8480000293220"))
    const chocolate = await ingredients.findOrFail(new IngredientId("8480000607225"))
    const peanutButter = await ingredients.findOrFail(new IngredientId("8480000228369"))
    const protein = await ingredients.findOrFail(new IngredientId("5055534368107"))
    const banana = await ingredients.findOrFail(new IngredientId("2245"))
    const hake = await ingredients.findOrFail(new IngredientId("8480000611628"))
    const pumpkin = await ingredients.findOrFail(new IngredientId("2378"))
    const tomato = await ingredients.findOrFail(new IngredientId("2421"))
    const pepper = await ingredients.findOrFail(new IngredientId("2409"))
    const egg = await ingredients.findOrFail(new IngredientId("2127"))
    const mushroom = await ingredients.findOrFail(new IngredientId("2384"))
    const tortillas = await ingredients.findOrFail(new IngredientId("7480025809421"))
    const lettuce = await ingredients.findOrFail(new IngredientId("2399"))
    const onion = await ingredients.findOrFail(new IngredientId("2381"))
    const tomatoPaste = await ingredients.findOrFail(new IngredientId("8480000160744"))
    const beans = await ingredients.findOrFail(new IngredientId("8480000260000"))
    const texturedSoy = await ingredients.findOrFail(new IngredientId("8480000073297"))
    const oil = await ingredients.findOrFail(new IngredientId("8480000046406"))
    const yogurt = await ingredients.findOrFail(new IngredientId("8480000212566"))
    const potato = await ingredients.findOrFail(new IngredientId("2403"))
    const strawberries = await ingredients.findOrFail(new IngredientId("2225"))
    const speltBread = await ingredients.findOrFail(new IngredientId("8480000826466"))
    const chickpeas = await ingredients.findOrFail(new IngredientId("8410505272017"))
    const guacamole = await ingredients.findOrFail(new IngredientId("8480000038524"))
    const asparagus = await ingredients.findOrFail(new IngredientId("1179"))
    const tofu = await ingredients.findOrFail(new IngredientId("8410789140118"))
    const quinoa = await ingredients.findOrFail(new IngredientId("8480000094308"))
    const beet = await ingredients.findOrFail(new IngredientId("2416"))
    const tuna = await ingredients.findOrFail(new IngredientId("8480000180186"))
    const harinaDeEspelta = await ingredients.findOrFail(new IngredientId("14308307"))
    const butter = await ingredients.findOrFail(new IngredientId("8480000207258"))
    const peanut = await ingredients.findOrFail(new IngredientId("2185"))
    const wallnut = await ingredients.findOrFail(new IngredientId("2201"))
    const panela = await ingredients.findOrFail(new IngredientId("8480000198594"))
    const chickpeaFlour = await ingredients.findOrFail(new IngredientId("8480000290663"))

    const macros = MacronutrientsCalculator.calculate(Sex.MALE, Weight.kg(89), ActivityLevel.LIGHT, MainGoal.LOST)

    const porridge = new Recipe("Porridge", [
      Weight.g(39).of(oats),
      Weight.g(113).of(soyMilk),
      Weight.g(30).of(protein),
      Weight.g(125)
        .times(1 / 10)
        .of(chocolate),
      Weight.g(20).of(peanutButter),
      Weight.g(150).of(banana),
    ])

    const hakeWithVegetables = new Recipe("Merluza con verduras", [
      Weight.g(10).of(oil),
      Weight.g(400).of(hake),
      Weight.g(200).of(pumpkin),
      Weight.g(200).of(tomato),
      Weight.g(100).of(pepper),
      Weight.g(500).of(potato),
    ]).divideBy(2)

    const yogurtWithFruit = new Recipe("Yogur con frutas", [Weight.g(125).of(yogurt), Weight.g(100).of(strawberries)])

    const scrambledEggs = new Recipe("Revuelto con verduras", [
      Weight.g(10).of(oil),
      Weight.oneEgg().times(2).of(egg),
      Weight.g(100).of(mushroom),
      Weight.g(100).of(tomato),
      Weight.g(100).of(speltBread),
    ])

    const toastsWithChickpeas = new Recipe("Tostadas con Garbanzos", [
      Weight.g(10).of(guacamole),
      Weight.g(570)
        .times(1 / 2)
        .of(chickpeas),
      Weight.g(100).of(tomato),
      Weight.g(100).of(onion),
    ])

    const burritos = new Recipe("Burritos", [
      Weight.g(20).of(oil),
      Weight.g(100).of(onion),
      Weight.g(100).of(pepper),
      Weight.g(10).of(tomatoPaste),
      Weight.g(50).of(tortillas),
      Weight.g(50).of(lettuce),
      Weight.g(400).of(beans),
      Weight.g(100).of(texturedSoy),
    ]).divideBy(2)

    const yogurtWithFruitAndProtein = new Recipe("Yogur con frutas y proteína", [
      Weight.g(125).of(yogurt),
      Weight.g(100).of(strawberries),
      Weight.g(20).of(protein),
    ])

    const omelette = new Recipe("Tortilla", [
      Weight.g(20).of(oil),
      Weight.g(100).of(onion),
      Weight.g(650).of(potato),
      Weight.oneEgg().times(5).of(egg),
    ]).divideBy(2)

    const pseudoSalmon = new Recipe("Salmón Vegano con Patatas", [
      Weight.g(10).of(oil),
      Weight.g(400).of(tofu),
      Weight.g(100).of(beet),
      Weight.g(400).of(potato),
      Weight.g(100).of(tomato),
    ]).divideBy(2)

    const toastsWithTuna = new Recipe("Tostadas con atún", [
      Weight.g(80).times(2).of(tuna),
      Weight.g(200).of(speltBread),
      Weight.g(100).of(tomato),
      Weight.g(50).of(lettuce),
    ]).divideBy(2)

    const pancakes = new Recipe("Tortitas", [
      Weight.oneEgg().times(1).of(egg),
      Weight.g(200).of(banana),
      Weight.g(40).of(protein),
      Weight.g(10).of(oil),
      Weight.g(120).of(oats),
      Weight.g(50).of(peanutButter),
      Weight.g(100).of(soyMilk),
    ]).divideBy(2)

    const wednesday = new DayPlan([
      [MealTime.BREAKFAST, Meal.with(porridge)],
      [MealTime.LUNCH, Meal.with(pseudoSalmon, yogurtWithFruitAndProtein)],
      [MealTime.DINNER, Meal.with(toastsWithTuna)],
    ])

    const quinoaWithChickpeas = new Recipe("Ensalada de Quinoa y Garbanzos", [
      Weight.oneEgg().of(egg),
      Weight.g(400).of(quinoa),
      Weight.g(400).of(chickpeas),
      Weight.g(100).of(pepper),
    ]).divideBy(2)

    const hummus = new Recipe("Hummus con Tostadas de Espelta", [
      Weight.oneEgg().of(egg),
      Weight.g(20).of(oil),
      Weight.g(400).of(chickpeas),
    ]).divideBy(2)

    const hagridRocks = new Recipe("Rocas de Hagrid", [
      Weight.g(220).of(harinaDeEspelta),
      Weight.g(50).of(butter),
      Weight.g(25).of(wallnut),
      Weight.g(25).of(peanut),
      Weight.g(50).of(panela),
      Weight.g(60).of(protein),
      Weight.oneEgg().of(egg),
      Weight.g(20).of(soyMilk),
    ])

    const fries = new Recipe("Papas fritas", [Weight.g(10).of(oil), Weight.g(500).of(potato)]).divideBy(2)

    const soyYogurtProtein = new Recipe("Yogur de soja con proteína", [
      Weight.g(125).times(2).of(yogurt),
      Weight.g(40).of(protein),
    ])

    // https://www.directoalpaladar.com/recetas-vegetarianas/como-hacer-falafel-casero-receta-facil-y-deliciosa
    const falafels = new Recipe("Falafels", [
      Weight.g(500).of(chickpeas),
      Weight.g(120).of(onion),
      Weight.g(25).of(chickpeaFlour),
      Weight.g(10).of(oil),
    ]).divideBy(4)

    const monday = new DayPlan([
      [MealTime.LUNCH, Meal.with(hakeWithVegetables, fries, soyYogurtProtein)],
      [MealTime.DINNER, Meal.with(falafels, soyYogurtProtein)],
    ])

    const whiteBeansSalad = new Recipe("Alubias blancas", [
      Weight.g(500).of(whiteBeans),
      Weight.g(100).of(onion),
      Weight.g(100).of(pepper),
      Weight.g(10).of(oil),
    ]).divideBy(2)

    const tunaCreps = new Recipe("Creps de atún", [
      Weight.oneEgg().times(1).of(egg),
      Weight.g(100).of(harinaDeEspelta),
      Weight.g(200).of(tuna),
      Weight.g(100).of(tomato),
      Weight.g(100).of(lettuce),
      Weight.g(100).of(onion),
    ]).divideBy(2)

    const soyYogurt = new Ingredient(
      new IngredientId("1"),
      "Yogur de Soja",
      new Nutriments(
        Energy.kcal(43),
        new Macros(
          Weight.g(4.6), // proteins
          Weight.g(0), // carbs
          Weight.g(2.7), // fats
        ),
      ),
    )

    const tuesday = new DayPlan([
      [MealTime.LUNCH, Meal.with(whiteBeansSalad, soyYogurtProtein)],
      [MealTime.DINNER, Meal.with(tunaCreps, soyYogurtProtein)],
    ])

    const day = monday
    const weight = Weight.g(230)
    console.log("Carbos", soyYogurt.carbohydratesRelativeTo(weight).format())
    console.log("Grasas", soyYogurt.fatsRelativeTo(weight).format())
    console.log("Proteínas", soyYogurt.proteinsRelativeTo(weight).format())
    console.log("Energía", soyYogurt.energyRelativeTo(weight).toKcalInNumber())
  }, 1000000)
})
