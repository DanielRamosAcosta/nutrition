import { Ingredient } from "./Ingredient.js"
import { Weight } from "./Weight.js"
import { Nutrible } from "./Nutrible.js"
import { formatNumber, roundToTwoDigits } from "./Utils.js"

export class WeightedIngredient implements Nutrible {
  private readonly ingredient: Ingredient
  private readonly weight: Weight

  constructor(ingredient: Ingredient, weight: Weight) {
    this.ingredient = ingredient
    this.weight = weight
  }

  energy() {
    return this.ingredient.energyRelativeTo(this.weight)
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

  toCsv() {
    const name = this.ingredient.getName()
    const energy = formatNumber(Math.round(this.energy().toKcalInNumber()))
    const proteins = formatNumber(roundToTwoDigits(this.proteins().toNumberInGrams()))
    const carbohydrates = formatNumber(roundToTwoDigits(this.carbohydrates().toNumberInGrams()))
    const fats = formatNumber(roundToTwoDigits(this.fats().toNumberInGrams()))
    return `${name};${energy};${proteins};${carbohydrates};${fats}`
  }

  divideBy(number: number) {
    return new WeightedIngredient(this.ingredient, this.weight.divideBy(number))
  }

  hasMoreProteinThan(other: WeightedIngredient) {
    return this.proteins().greaterThan(other.proteins())
  }

  increaseToMatch(proteins: Weight) {
    // TODO: Implement this
  }
}
