import { describe, expect, it } from "vitest"
import { IngredientId } from "./IngredientId.js"
import { IngredientRepositoryBedca } from "./IngredientRepositoryBedca.js"
import { Ingredient } from "./Ingredient.js"
import { Nutriments } from "./Nutriments.js"
import { Weight } from "./Weight.js"
import { Macros } from "./Macros.js"
import { Energy } from "./Energy.js"

describe("IngredientRepositoryBedca", () => {
  const ingredientRepository = new IngredientRepositoryBedca()

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

  it("works with pumpkin", async () => {
    const pumpkinId = new IngredientId("2378")

    const ingredient = await ingredientRepository.findBy(pumpkinId)

    expect(ingredient).toEqual(
      new Ingredient(
        pumpkinId,
        "Calabaza, cruda",
        Nutriments.create(Energy.kcal(32), new Macros(Weight.g(1.2), Weight.g(5.6), Weight.g(0.33))),
      ),
    )
  })

  it("returns undefined if not found", async () => {
    const nonExistentId = new IngredientId("999999999")

    const ingredient = await ingredientRepository.findBy(nonExistentId)

    expect(ingredient).toBeUndefined()
  })
})
