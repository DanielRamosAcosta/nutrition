import { Weight } from "./Weight.js"

export class Nutriments {
  constructor(
    private proteins: Weight,
    private carbohydrates: Weight,
    private fat: Weight,
  ) {}

  proteinsRelativeTo(weight: Weight): Weight {
    return this.proteins.proportionFor(weight)
  }

  carbohydratesRelativeTo(weight: Weight) {
    return this.carbohydrates.proportionFor(weight)
  }

  fatsRelativeTo(weight: Weight) {
    return this.fat.proportionFor(weight)
  }
}
