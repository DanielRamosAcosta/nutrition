import { Sex } from "./Sex.js"
import { ActivityLevel } from "./ActivityLevel.js"
import { MainGoal } from "./MainGoal.js"
import { Macros } from "./Macros.js"

export class MacronutrientsCalculator {
  static calculate(sex: Sex, weight: number, activityLevel: ActivityLevel, mainGoal: MainGoal) {
    if (activityLevel === ActivityLevel.SEDENTARY) {
      switch (mainGoal) {
        case MainGoal.GAIN:
          return Macros.fromGrams({
            proteins: 1.2 * weight,
            carbs: 3 * weight,
            fats: sex === Sex.MALE ? 0.7 * weight : 0.8 * weight,
          })
        case MainGoal.LOST:
          return Macros.fromGrams({
            proteins: 1.2 * weight,
            carbs: 2 * weight,
            fats: sex === Sex.MALE ? 0.6 * weight : 0.8 * weight,
          })
        case MainGoal.MAINTAIN:
          return Macros.fromGrams({
            proteins: 1.2 * weight,
            carbs: 2.5 * weight,
            fats: sex === Sex.MALE ? 0.8 * weight : 1 * weight,
          })
      }
    } else if (activityLevel === ActivityLevel.LIGHT) {
      switch (mainGoal) {
        case MainGoal.GAIN:
          return Macros.fromGrams({
            proteins: 1.4 * weight,
            carbs: 3.5 * weight,
            fats: sex === Sex.MALE ? 0.7 * weight : 0.8 * weight,
          })
        case MainGoal.LOST:
          return Macros.fromGrams({
            proteins: 1.6 * weight,
            carbs: 2.5 * weight,
            fats: sex === Sex.MALE ? 0.6 * weight : 0.8 * weight,
          })
        case MainGoal.MAINTAIN:
          return Macros.fromGrams({
            proteins: 1.2 * weight,
            carbs: 2.5 * weight,
            fats: sex === Sex.MALE ? 0.8 * weight : 1 * weight,
          })
      }
    } else if (activityLevel === ActivityLevel.MODERATE) {
      switch (mainGoal) {
        case MainGoal.GAIN:
          return Macros.fromGrams({
            proteins: 1.6 * weight,
            carbs: 3.9 * weight,
            fats: sex === Sex.MALE ? 0.8 * weight : 1 * weight,
          })
        case MainGoal.LOST:
          return Macros.fromGrams({
            proteins: 2 * weight,
            carbs: 2.8 * weight,
            fats: sex === Sex.MALE ? 0.6 * weight : 0.8 * weight,
          })
        case MainGoal.MAINTAIN:
          return Macros.fromGrams({
            proteins: 1.2 * weight,
            carbs: 3 * weight,
            fats: sex === Sex.MALE ? 0.8 * weight : 1 * weight,
          })
      }
    } else if (activityLevel === ActivityLevel.INTENSE) {
      switch (mainGoal) {
        case MainGoal.GAIN:
          return Macros.fromGrams({
            proteins: 2 * weight,
            carbs: 4.2 * weight,
            fats: sex === Sex.MALE ? 0.8 * weight : 1 * weight,
          })
        case MainGoal.LOST:
          return Macros.fromGrams({
            proteins: 2.2 * weight,
            carbs: 3.2 * weight,
            fats: sex === Sex.MALE ? 0.7 * weight : 0.9 * weight,
          })
        case MainGoal.MAINTAIN:
          return Macros.fromGrams({
            proteins: 1.4 * weight,
            carbs: 3.5 * weight,
            fats: sex === Sex.MALE ? 1 * weight : 1.1 * weight,
          })
      }
    } else {
      switch (mainGoal) {
        case MainGoal.GAIN:
          return Macros.fromGrams({
            proteins: 2.2 * weight,
            carbs: 4.5 * weight,
            fats: sex === Sex.MALE ? 1 * weight : 1.2 * weight,
          })
        case MainGoal.LOST:
          return Macros.fromGrams({
            proteins: 2.5 * weight,
            carbs: 3.5 * weight,
            fats: sex === Sex.MALE ? 0.7 * weight : 0.9 * weight,
          })
        case MainGoal.MAINTAIN:
          return Macros.fromGrams({
            proteins: 1.6 * weight,
            carbs: 4 * weight,
            fats: sex === Sex.MALE ? 1 * weight : 1.1 * weight,
          })
      }
    }
  }
}
