import { WeightedIngredient } from "./WeightedIngredient.js"
import { Weight } from "./Weight.js"

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

  toTable(): string {
    const map = this.ingredients.map((ingredient) => [
      ingredient.nameFormatted(),
      ingredient.proteinsFormatted(),
      ingredient.carbohydratesFormatted(),
      ingredient.fatsFormatted(),
    ])

    const matrix = [
      ["Nombre", "Proteínas", "Carbohidratos", "Grasas"],
      ...map,
      ["Total.....", this.proteins(), this.carbohydrates(), this.fats()],
    ]

    const column1MaxLength = Math.max(
      ...matrix
        .map((el) => el[0])
        .map((el) => el.toString())
        .map((el) => el.length),
    )

    const column2MaxLength = Math.max(
      ...matrix
        .map((el) => el[1])
        .map((el) => el.toString())
        .map((el) => el.length),
    )

    const column3MaxLength = Math.max(
      ...matrix
        .map((el) => el[2])
        .map((el) => el.toString())
        .map((el) => el.length),
    )

    const column4MaxLength = Math.max(
      ...matrix
        .map((el) => el[3])
        .map((el) => el.toString())
        .map((el) => el.length),
    )

    const pads = [column1MaxLength, column2MaxLength, column3MaxLength, column4MaxLength]

    const res = matrix.map((el) => el.map((k, i) => k.toString().padEnd(pads[i], " ")).join(" | "))

    return res.join("\n")
  }

  proteins() {
    return this.ingredients.map((i) => i.proteins()).reduce((t, c) => t.add(c), Weight.zero())
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
