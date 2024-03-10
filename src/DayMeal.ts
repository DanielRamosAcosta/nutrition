import { Recipe } from "./Recipe.js"
import { Weight } from "./Weight.js"
import { Matrix } from "./Matrix.js"

export class DayMeal {
  constructor(
    private readonly breakfast: Recipe,
    private readonly lunch: Recipe,
    private readonly dinner: Recipe,
  ) {}

  toTableFormat(details = false) {
    const headers = ["Name", "Proteínas", "Carbohidratos", "Grasas"]

    const data = [
      [this.breakfast.getName(), this.breakfast.proteins(), this.breakfast.carbohydrates(), this.breakfast.fats()],
      [this.lunch.getName(), this.lunch.proteins(), this.lunch.carbohydrates(), this.lunch.fats()],
      [this.dinner.getName(), this.dinner.proteins(), this.dinner.carbohydrates(), this.dinner.fats()],
    ]

    const footer = ["Total", this.proteins(), this.carbohydrates(), this.fats()]

    return Matrix.toTable([headers, ...data, footer])
  }

  proteins() {
    return this.breakfast.proteins().add(this.lunch.proteins()).add(this.dinner.proteins())
  }

  carbohydrates() {
    return this.breakfast.carbohydrates().add(this.lunch.carbohydrates()).add(this.dinner.carbohydrates())
  }

  fats() {
    return this.breakfast.fats().add(this.lunch.fats()).add(this.dinner.fats())
  }
}

export class DayMealBuilder {
  private _breakfast = Recipe.empty()
  private _lunch = Recipe.empty()
  private _dinner = Recipe.empty()

  static with() {
    return new DayMealBuilder()
  }

  constructor() {}

  breakfast(recipe: Recipe) {
    this._breakfast = recipe
    return this
  }

  lunch(recipe: Recipe) {
    this._lunch = recipe
    return this
  }

  dinner(recipe: Recipe) {
    this._dinner = recipe
    return this
  }

  build() {
    return new DayMeal(this._breakfast, this._lunch, this._dinner)
  }
}
