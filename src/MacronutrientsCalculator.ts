import { Sex } from "./Sex.js"
import { ActivityLevel } from "./ActivityLevel.js"
import { MainGoal } from "./MainGoal.js"
import { Macros } from "./Macros.js"
import { Weight } from "./Weight.js"

export class MacronutrientsCalculator {
  private static activityLevelToCalculate: Record<
    ActivityLevel,
    (sex: Sex, weight: Weight, mainGoal: MainGoal) => Macros
  > = {
    [ActivityLevel.SEDENTARY]: this.macrosSedentary.bind(MacronutrientsCalculator),
    [ActivityLevel.LIGHT]: this.macrosLight.bind(MacronutrientsCalculator),
    [ActivityLevel.MODERATE]: this.macrosModerate.bind(MacronutrientsCalculator),
    [ActivityLevel.INTENSE]: this.macrosIntense.bind(MacronutrientsCalculator),
    [ActivityLevel.VERY_INTENSE]: this.macrosVeryIntense.bind(MacronutrientsCalculator),
  }

  static calculate(sex: Sex, weight: Weight, activityLevel: ActivityLevel, mainGoal: MainGoal) {
    return this.activityLevelToCalculate[activityLevel](sex, weight, mainGoal)
  }

  private static macrosSedentary(sex: Sex, weight: Weight, mainGoal: MainGoal) {
    switch (mainGoal) {
      case MainGoal.GAIN:
        return Macros.fromGrams({
          proteins: 1.2 * weight.toNumberInKg(),
          carbs: 3 * weight.toNumberInKg(),
          fats: sex === Sex.MALE ? 0.7 * weight.toNumberInKg() : 0.8 * weight.toNumberInKg(),
        })
      case MainGoal.LOST:
        return Macros.fromGrams({
          proteins: 1.2 * weight.toNumberInKg(),
          carbs: 2 * weight.toNumberInKg(),
          fats: sex === Sex.MALE ? 0.6 * weight.toNumberInKg() : 0.8 * weight.toNumberInKg(),
        })
      case MainGoal.MAINTAIN:
        return Macros.fromGrams({
          proteins: 1.2 * weight.toNumberInKg(),
          carbs: 2.5 * weight.toNumberInKg(),
          fats: sex === Sex.MALE ? 0.8 * weight.toNumberInKg() : weight.toNumberInKg(),
        })
    }
  }

  private static macrosLight(sex: Sex, weight: Weight, mainGoal: MainGoal) {
    switch (mainGoal) {
      case MainGoal.GAIN:
        return Macros.fromGrams({
          proteins: 1.4 * weight.toNumberInKg(),
          carbs: 3.5 * weight.toNumberInKg(),
          fats: sex === Sex.MALE ? 0.7 * weight.toNumberInKg() : 0.8 * weight.toNumberInKg(),
        })
      case MainGoal.LOST:
        return Macros.fromGrams({
          proteins: 1.6 * weight.toNumberInKg(),
          carbs: 2.5 * weight.toNumberInKg(),
          fats: sex === Sex.MALE ? 0.6 * weight.toNumberInKg() : 0.8 * weight.toNumberInKg(),
        })
      case MainGoal.MAINTAIN:
        return Macros.fromGrams({
          proteins: 1.2 * weight.toNumberInKg(),
          carbs: 2.5 * weight.toNumberInKg(),
          fats: sex === Sex.MALE ? 0.8 * weight.toNumberInKg() : weight.toNumberInKg(),
        })
    }
  }

  private static macrosModerate(sex: Sex, weight: Weight, mainGoal: MainGoal) {
    switch (mainGoal) {
      case MainGoal.GAIN:
        return Macros.fromGrams({
          proteins: 1.6 * weight.toNumberInKg(),
          carbs: 3.9 * weight.toNumberInKg(),
          fats: sex === Sex.MALE ? 0.8 * weight.toNumberInKg() : weight.toNumberInKg(),
        })
      case MainGoal.LOST:
        return Macros.fromGrams({
          proteins: 2 * weight.toNumberInKg(),
          carbs: 2.8 * weight.toNumberInKg(),
          fats: sex === Sex.MALE ? 0.6 * weight.toNumberInKg() : 0.8 * weight.toNumberInKg(),
        })
      case MainGoal.MAINTAIN:
        return Macros.fromGrams({
          proteins: 1.2 * weight.toNumberInKg(),
          carbs: 3 * weight.toNumberInKg(),
          fats: sex === Sex.MALE ? 0.8 * weight.toNumberInKg() : weight.toNumberInKg(),
        })
    }
  }

  private static macrosIntense(sex: Sex, weight: Weight, mainGoal: MainGoal) {
    switch (mainGoal) {
      case MainGoal.GAIN:
        return Macros.fromGrams({
          proteins: 2 * weight.toNumberInKg(),
          carbs: 4.2 * weight.toNumberInKg(),
          fats: sex === Sex.MALE ? 0.8 * weight.toNumberInKg() : weight.toNumberInKg(),
        })
      case MainGoal.LOST:
        return Macros.fromGrams({
          proteins: 2.2 * weight.toNumberInKg(),
          carbs: 3.2 * weight.toNumberInKg(),
          fats: sex === Sex.MALE ? 0.7 * weight.toNumberInKg() : 0.9 * weight.toNumberInKg(),
        })
      case MainGoal.MAINTAIN:
        return Macros.fromGrams({
          proteins: 1.4 * weight.toNumberInKg(),
          carbs: 3.5 * weight.toNumberInKg(),
          fats: sex === Sex.MALE ? weight.toNumberInKg() : 1.1 * weight.toNumberInKg(),
        })
    }
  }

  private static macrosVeryIntense(sex: Sex, weight: Weight, mainGoal: MainGoal) {
    switch (mainGoal) {
      case MainGoal.GAIN:
        return Macros.fromGrams({
          proteins: 2.2 * weight.toNumberInKg(),
          carbs: 4.5 * weight.toNumberInKg(),
          fats: sex === Sex.MALE ? weight.toNumberInKg() : 1.2 * weight.toNumberInKg(),
        })
      case MainGoal.LOST:
        return Macros.fromGrams({
          proteins: 2.5 * weight.toNumberInKg(),
          carbs: 3.5 * weight.toNumberInKg(),
          fats: sex === Sex.MALE ? 0.7 * weight.toNumberInKg() : 0.9 * weight.toNumberInKg(),
        })
      case MainGoal.MAINTAIN:
        return Macros.fromGrams({
          proteins: 1.6 * weight.toNumberInKg(),
          carbs: 4 * weight.toNumberInKg(),
          fats: sex === Sex.MALE ? weight.toNumberInKg() : 1.1 * weight.toNumberInKg(),
        })
    }
  }
}
