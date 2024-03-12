import { describe, it } from "vitest"
import { IngredientId } from "./IngredientId.js"
import { Recipe } from "./Recipe.js"
import { Weight } from "./Weight.js"
import { IngredientRepositoryMultiplexer } from "./IngredientRepositoryMultiplexer.js"
import { DayMealBuilder } from "./DayMeal.js"

describe("example", () => {
  it("example", async () => {
    const ingredients = new IngredientRepositoryMultiplexer()

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
    const fresas = await ingredients.findOrFail(new IngredientId("2225"))

    // añadir yogur con fruta de postre en el almuerzo

    const hakeWithVegetables = new Recipe("Merluza con verduras", [
      Weight.g(500).of(hake),
      Weight.g(200).of(pumpkin),
      Weight.g(200).of(tomato),
      Weight.g(100).of(pepper),
      Weight.g(500).of(potato),
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
    ])
    const porridge = new Recipe("Porridge", [
      Weight.g(100).of(oats),
      Weight.g(200).of(soyMilk),
      Weight.g(30).of(protein),
      Weight.oz(1).of(chocolate),
      Weight.g(20).of(peanutButter),
      Weight.g(100).of(banana),
    ])
    const scrambledEggs = new Recipe("Revuelto con verduras", [
      Weight.g(63 * 3).of(egg),
      Weight.g(100).of(mushroom),
      Weight.g(100).of(tomato),
    ])

    const dayMeal = DayMealBuilder.with().breakfast(porridge).lunch(hakeWithVegetables).dinner(scrambledEggs).build()

    const formatted = dayMeal.toTableFormat()

    console.log(formatted)
  })
})
