import { Sex } from "./Sex.js"
import { ActivityLevel } from "./ActivityLevel.js"
import { Weight } from "./Weight.js"
import { Length } from "./Length.js"

export class CaloriesCalculator {
  private static rateMap: Record<ActivityLevel, number> = {
    [ActivityLevel.SEDENTARY]: 1.2,
    [ActivityLevel.LIGHT]: 1.375,
    [ActivityLevel.MODERATE]: 1.55,
    [ActivityLevel.INTENSE]: 1.725,
    [ActivityLevel.VERY_INTENSE]: 1.9,
  }

  static calculate(sex: Sex, weight: Weight, height: Length, age: number, activityLevel: ActivityLevel) {
    const basalMetabolicRate = this.getBasalMetabolicRate(height, age, weight)
    const basalMetabolicRateWithSex = this.applySexDifferences(sex, basalMetabolicRate)

    return basalMetabolicRateWithSex * this.rateMap[activityLevel]
  }

  private static applySexDifferences(sex: Sex, basalMetabolicRate: number) {
    return sex === Sex.MALE ? basalMetabolicRate + 5 : basalMetabolicRate - 161
  }

  private static getBasalMetabolicRate(height: Length, age: number, weight: Weight) {
    return 10 * weight.toNumberInKg() + 6.25 * height.toNumberInCm() - 5 * age
  }
}
