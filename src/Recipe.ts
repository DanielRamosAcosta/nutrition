import { WeightedIngredient } from "./WeightedIngredient.js"
import { Weight } from "./Weight.js"
import { Energy } from "./Energy.js"

export class Recipe {
  public static empty() {
    return new NoRecipe()
  }

  private readonly ingredients: Array<WeightedIngredient> = []

  constructor(
    private readonly name: string,
    ingredients: Array<WeightedIngredient>,
  ) {
    this.ingredients = ingredients
  }

  getName() {
    return this.name
  }

  energy() {
    return this.ingredients.map((i) => i.energy()).reduce((t, c) => t.add(c), Energy.zero())
  }

  proteins() {
    return this.ingredients
      .map((i) => i.proteins())
      .reduce((t, c) => {
        return t.add(c)
      }, Weight.zero())
  }

  carbohydrates() {
    return this.ingredients.map((i) => i.carbohydrates()).reduce((t, c) => t.add(c), Weight.zero())
  }

  fats() {
    return this.ingredients.map((i) => i.fats()).reduce((t, c) => t.add(c), Weight.zero())
  }
}

class NoRecipe extends Recipe {
  constructor() {
    super("", [])
  }
}
