import { Recipe } from "./Recipe.js"
import { Nutrible, totalCarbohydrates, totalEnergy, totalFats, totalProteins } from "./Nutrible.js"
import { Energy } from "./Energy.js"
import { Weight } from "./Weight.js"

export class Meal implements Nutrible {
  static with(...recipes: Recipe[]) {
    return new Meal(recipes)
  }

  constructor(private readonly recipes: Recipe[]) {}

  private getName() {
    return this.recipes.map((r) => r.getName()).join(" y ")
  }

  energy() {
    return totalEnergy(this.recipes)
  }

  proteins() {
    return totalProteins(this.recipes)
  }

  carbohydrates() {
    return totalCarbohydrates(this.recipes)
  }

  fats() {
    return totalFats(this.recipes)
  }

  optimizeFor(energy: Energy, proteins: Weight) {
    const mostCaloricRecipe = this.recipes.reduce((a, b) => (a.hasMoreEnergyThan(b) ? a : b))

    const restOfTheRecipes = this.recipes.filter((r) => r !== mostCaloricRecipe)

    return new Meal([mostCaloricRecipe.optimizeFor(energy, proteins), ...restOfTheRecipes])
  }

  toCsv() {
    const csv = []
    csv.push(this.getName())
    for (const recipie of this.recipes) {
      csv.push(recipie.toCsv())
    }
    return csv.join("\n")
  }
}
