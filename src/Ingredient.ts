import { IngredientId } from "./IngredientId.js"
import { Nutriments } from "./Nutriments.js"
import { Weight } from "./Weight.js"

export class Ingredient {
  constructor(
    private id: IngredientId,
    private name: string,
    private nutriments: Nutriments,
  ) {}

  nameLength() {
    return this.name.length
  }

  format() {
    return this.name
  }

  energyRelativeTo(weight: Weight) {
    return this.nutriments.energyRelativeTo(weight)
  }

  proteinsRelativeTo(weight: Weight) {
    return this.nutriments.proteinsRelativeTo(weight)
  }

  carbohydratesRelativeTo(weight: Weight) {
    return this.nutriments.carbohydratesRelativeTo(weight)
  }

  fatsRelativeTo(weight: Weight) {
    return this.nutriments.fatsRelativeTo(weight)
  }

  getId() {
    return this.id
  }
}
