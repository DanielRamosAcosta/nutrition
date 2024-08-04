import { WeightedIngredient } from "./WeightedIngredient.js"
import { Weight } from "./Weight.js"
import { Energy } from "./Energy.js"
import { Nutrible, totalCarbohydrates, totalEnergy, totalFats, totalProteins } from "./Nutrible.js"

export class Recipe implements Nutrible {
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
    return totalEnergy(this.ingredients)
  }

  proteins() {
    return totalProteins(this.ingredients)
  }

  carbohydrates() {
    return totalCarbohydrates(this.ingredients)
  }

  fats() {
    return totalFats(this.ingredients)
  }

  toCsv() {
    const csv = []
    for (const ingredient of this.ingredients) {
      csv.push(ingredient.toCsv())
    }
    return csv.join("\n")
  }

  divideBy(number: number) {
    return new Recipe(
      this.name,
      this.ingredients.map((i) => i.divideBy(number)),
    )
  }

  hasMoreEnergyThan(recipe: Recipe) {
    return this.energy().greaterThan(recipe.energy())
  }

  optimizeFor(energy: Energy, proteins: Weight) {
    const currentProteins = this.proteins()
    const highestProteinIngredient = this.ingredients.reduce((a, b) => (a.hasMoreProteinThan(b) ? a : b))
    const restOfTheIngredients = this.ingredients.filter((i) => i !== highestProteinIngredient)

    highestProteinIngredient.increaseToMatch(proteins)

    return this
  }
}

class NoRecipe extends Recipe {
  constructor() {
    super("", [])
  }
}
