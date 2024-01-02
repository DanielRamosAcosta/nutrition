import { Sex } from "./Sex.js"
import { ActivityLevel } from "./ActivityLevel.js"

export class CaloriesCalculator {
  static calculate(gender: Sex, weight: number, height: number, age: number, activityLevel: ActivityLevel) {
    let result
    let basalMetabolicRate = 10 * weight + 6.25 * height - 5 * age
    basalMetabolicRate = gender === Sex.MALE ? basalMetabolicRate + 5 : basalMetabolicRate - 161
    switch (activityLevel) {
      case ActivityLevel.LIGHT:
        result = basalMetabolicRate * 1.375
        break
      case ActivityLevel.MODERATE:
        result = basalMetabolicRate * 1.55
        break
      case ActivityLevel.INTENSE:
        result = basalMetabolicRate * 1.725
        break
      case ActivityLevel.VERY_INTENSE:
        result = basalMetabolicRate * 1.9
        break
      default:
        result = basalMetabolicRate * 1.2
        break
    }
    return result
  }
}
