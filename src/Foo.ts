import { Sex } from "./Sex.js"
import { ActivityLevel } from "./ActivityLevel.js"
import { MainGoal } from "./MainGoal.js"

export function calculateMacronutrients(gender: string, weight: number, activityLevel: string, mainGoal: string) {
  let proteins = 0.0
  let carbs = 0.0
  let fats = 0.0
  if (activityLevel === ActivityLevel.SEDENTARY) {
    switch (mainGoal) {
      case MainGoal.GAIN:
        proteins = 1.2 * weight
        carbs = 3 * weight
        fats = gender === Sex.MALE ? 0.7 * weight : 0.8 * weight
        break
      case MainGoal.LOST:
        proteins = 1.2 * weight
        carbs = 2 * weight
        fats = gender === Sex.MALE ? 0.6 * weight : 0.8 * weight
        break
      case MainGoal.MAINTAIN:
        proteins = 1.2 * weight
        carbs = 2.5 * weight
        fats = gender === Sex.MALE ? 0.8 * weight : 1 * weight
        break
    }
  } else if (activityLevel === ActivityLevel.LIGHT) {
    switch (mainGoal) {
      case MainGoal.GAIN:
        proteins = 1.4 * weight
        carbs = 3.5 * weight
        fats = gender === Sex.MALE ? 0.7 * weight : 0.8 * weight
        break
      case MainGoal.LOST:
        proteins = 1.6 * weight
        carbs = 2.5 * weight
        fats = gender === Sex.MALE ? 0.6 * weight : 0.8 * weight
        break
      case MainGoal.MAINTAIN:
        proteins = 1.2 * weight
        carbs = 2.5 * weight
        fats = gender === Sex.MALE ? 0.8 * weight : 1 * weight
        break
    }
  } else if (activityLevel === ActivityLevel.MODERATE) {
    switch (mainGoal) {
      case MainGoal.GAIN:
        proteins = 1.6 * weight
        carbs = 3.9 * weight
        fats = gender === Sex.MALE ? 0.8 * weight : 1 * weight
        break
      case MainGoal.LOST:
        proteins = 2 * weight
        carbs = 2.8 * weight
        fats = gender === Sex.MALE ? 0.6 * weight : 0.8 * weight
        break
      case MainGoal.MAINTAIN:
        proteins = 1.2 * weight
        carbs = 3 * weight
        fats = gender === Sex.MALE ? 0.8 * weight : 1 * weight
        break
    }
  } else if (activityLevel === ActivityLevel.INTENSE) {
    switch (mainGoal) {
      case MainGoal.GAIN:
        proteins = 2 * weight
        carbs = 4.2 * weight
        fats = gender === Sex.MALE ? 0.8 * weight : 1 * weight
        break
      case MainGoal.LOST:
        proteins = 2.2 * weight
        carbs = 3.2 * weight
        fats = gender === Sex.MALE ? 0.7 * weight : 0.9 * weight
        break
      case MainGoal.MAINTAIN:
        proteins = 1.4 * weight
        carbs = 3.5 * weight
        fats = gender === Sex.MALE ? 1 * weight : 1.1 * weight
        break
    }
  } else {
    switch (mainGoal) {
      case MainGoal.GAIN:
        proteins = 2.2 * weight
        carbs = 4.5 * weight
        fats = gender === Sex.MALE ? 1 * weight : 1.2 * weight
        break
      case MainGoal.LOST:
        proteins = 2.5 * weight
        carbs = 3.5 * weight
        fats = gender === Sex.MALE ? 0.7 * weight : 0.9 * weight
        break
      case MainGoal.MAINTAIN:
        proteins = 1.6 * weight
        carbs = 4 * weight
        fats = gender === Sex.MALE ? 1 * weight : 1.1 * weight
        break
    }
  }

  return {
    proteins: proteins,
    carbs: carbs,
    fats: fats,
  }
}
