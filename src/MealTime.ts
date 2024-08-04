import { Meal } from "./Meal.js"

export enum MealTime {
  BREAKFAST = "breakfast",
  MORNING_SNACK = "morningSnack",
  LUNCH = "lunch",
  AFTERNOON_SNACK = "afternoonSnack",
  DINNER = "dinner",
}

const toSpanishMap: Record<MealTime, string> = {
  [MealTime.BREAKFAST]: "Desayuno",
  [MealTime.MORNING_SNACK]: "Merienda de la mañana",
  [MealTime.LUNCH]: "Almuerzo",
  [MealTime.AFTERNOON_SNACK]: "Merienda de la tarde",
  [MealTime.DINNER]: "Cena",
}

export function toSpanish(mealTime: MealTime) {
  return toSpanishMap[mealTime]
}
