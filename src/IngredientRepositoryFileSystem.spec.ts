import { describe, expect, it } from "vitest"
import { IngredientId } from "./IngredientId.js"
import { Ingredient } from "./Ingredient.js"
import { Nutriments } from "./Nutriments.js"
import { Weight } from "./Weight.js"
import { IngredientRepositoryFileSystem } from "./IngredientRepositoryFileSystem.js"
import { Energy } from "./Energy.js"
import { Macros } from "./Macros.js"

describe("IngredientRepositoryFileSystem", () => {
  const ingredientRepository = new IngredientRepositoryFileSystem()

  it("works with banana", async () => {
    const bananaId = new IngredientId("2245")

    const ingredient = await ingredientRepository.findBy(bananaId)

    expect(ingredient).toEqual(
      new Ingredient(
        bananaId,
        "Plátano",
        Nutriments.create(Energy.kcal(89), new Macros(Weight.g(1.2), Weight.g(20), Weight.g(0.24))),
      ),
    )
  })

  it("returns undefined if not found", async () => {
    const nonExistentId = new IngredientId("99999999999999999999999999")

    const ingredient = await ingredientRepository.findBy(nonExistentId)

    expect(ingredient).toBeUndefined()
  })
})
