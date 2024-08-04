import { Nutrible, totalCarbohydrates, totalEnergy, totalFats, totalProteins } from "./Nutrible.js"
import { Meal } from "./Meal.js"
import { Energy } from "./Energy.js"
import { MealTime, toSpanish } from "./MealTime.js"
import { Weight } from "./Weight.js"

export class DayPlan implements Nutrible {
  private readonly meals: Map<MealTime, Meal>

  constructor(meals: Array<[MealTime, Meal]>) {
    this.meals = new Map(meals)
  }

  energy() {
    return totalEnergy([...this.meals.values()])
  }

  proteins() {
    return totalProteins([...this.meals.values()])
  }

  carbohydrates() {
    return totalCarbohydrates([...this.meals.values()])
  }

  fats() {
    return totalFats([...this.meals.values()])
  }

  optimizeFor(energy: Energy, proteins: Weight): DayPlan {
    const mealTimes = Array.from(this.meals.keys())
    const energyPerMeal = energy.divideBy(mealTimes.length)
    const proteinsPerMeal = proteins.divideBy(mealTimes.length)

    const meals = [...this.meals.entries()].map(
      ([time, meal]) => [time, meal.optimizeFor(energyPerMeal, proteinsPerMeal)] as [MealTime, Meal],
    )

    return new DayPlan(meals)
  }

  toCsv() {
    const csv = []
    for (const [time, meal] of this.meals.entries()) {
      csv.push(toSpanish(time))
      csv.push(meal.toCsv())
    }
    return csv.join("\n")
  }
}
