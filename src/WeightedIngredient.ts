import { Ingredient } from "./Ingredient.js"
import { Weight } from "./Weight.js"

export class WeightedIngredient {
  private readonly ingredient: Ingredient
  private readonly weight: Weight

  constructor(ingredient: Ingredient, weight: Weight) {
    this.ingredient = ingredient
    this.weight = weight
  }

  nameFormatted() {
    return this.ingredient.format()
  }

  proteinsFormatted() {
    return this.proteins().format()
  }

  carbohydratesFormatted() {
    return this.carbohydrates().format()
  }

  fatsFormatted() {
    return this.fats().format()
  }

  proteins() {
    return this.ingredient.proteinsRelativeTo(this.weight)
  }

  carbohydrates() {
    return this.ingredient.carbohydratesRelativeTo(this.weight)
  }

  fats() {
    return this.ingredient.fatsRelativeTo(this.weight)
  }
}
