import { WeightedIngredient } from "./WeightedIngredient.js"
import { Ingredient } from "./Ingredient.js"

export class Weight {
  constructor(private readonly amount: number) {}

  static kg(amount: number) {
    return new Weight(amount * 1000)
  }

  static g(amount: number) {
    return new Weight(amount)
  }

  static mg(amount: number) {
    return Weight.g(amount / 1000)
  }

  static parse(amount: number, unit: string) {
    if (unit === "g") return Weight.g(amount)
    if (unit === "mg") return Weight.mg(amount)

    throw new Error(`Unknown unit '${unit}'`)
  }

  static zero() {
    return new Weight(0)
  }

  static oz(amount: number) {
    return Weight.g(amount * 28.3495)
  }

  toNumberInKg() {
    return this.amount
  }

  of(ingredient: Ingredient) {
    return new WeightedIngredient(ingredient, this)
  }

  add(otherWeight: Weight) {
    return new Weight(this.amount + otherWeight.amount)
  }

  format() {
    if (this.amount < 1) {
      return Math.round(this.amount * 1_000) + " mg"
    }

    if (this.amount < 1000) {
      return this.amount.toFixed(2) + " g"
    }

    return this.amount / 1000 + " kg"
  }

  proportionFor(weight: Weight): Weight {
    return new Weight((this.amount * weight.amount) / 100)
  }

  toString() {
    return this.format()
  }
}
