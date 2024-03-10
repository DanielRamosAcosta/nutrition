import { describe, expect, it } from "vitest"
import { IngredientId } from "./IngredientId.js"
import { Ingredient } from "./Ingredient.js"
import { Nutriments } from "./Nutriments.js"
import { Weight } from "./Weight.js"
import { IngredientRepositoryOpenFoodFacts } from "./IngredientRepositoryOpenFoodFacts.js"

describe("IngredientRepositoryOpenFoodFacts", () => {
  const ingredientRepository = new IngredientRepositoryOpenFoodFacts()

  it("works with oats", async () => {
    const oatsId = new IngredientId("4008713756661")

    const ingredient = await ingredientRepository.findBy(oatsId)

    expect(ingredient).toEqual(
      new Ingredient(oatsId, "Copos de avena", new Nutriments(Weight.g(14), Weight.g(59), Weight.g(7))),
    )
  })

  it("returns undefined if not found", async () => {
    const nonExistentId = new IngredientId("99999999999999999999999999")

    const ingredient = await ingredientRepository.findBy(nonExistentId)

    expect(ingredient).toBeUndefined()
  })
})
