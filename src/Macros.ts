import { Weight } from "./Weight.js"

export class Macros {
  constructor(
    private readonly proteins: Weight,
    private readonly carbs: Weight,
    private readonly fats: Weight,
  ) {}

  public static fromGrams({ proteins, carbs, fats }: { proteins: number; carbs: number; fats: number }) {
    return new Macros(Weight.g(proteins), Weight.g(carbs), Weight.g(fats))
  }
}
