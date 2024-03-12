import { Weight } from "./Weight.js"
import { Energy } from "./Energy.js"
import { Macros } from "./Macros.js"

export class Nutriments {
  static create(energy: Energy, macros: Macros) {
    return new Nutriments(energy, macros)
  }

  constructor(
    private energy: Energy,
    private macros: Macros,
  ) {}

  energyRelativeTo(weight: Weight) {
    return this.energy.proportionFor(weight)
  }

  proteinsRelativeTo(weight: Weight): Weight {
    return this.macros.proteinsRelativeTo(weight)
  }

  carbohydratesRelativeTo(weight: Weight) {
    return this.macros.carbohydratesRelativeTo(weight)
  }

  fatsRelativeTo(weight: Weight) {
    return this.macros.fatsRelativeTo(weight)
  }
}
