import { Sex } from "./Sex.js"
import { ActivityLevel } from "./ActivityLevel.js"

export class CaloriesCalculator {
  private static rateMap: Record<ActivityLevel, number> = {
    [ActivityLevel.SEDENTARY]: 1.2,
    [ActivityLevel.LIGHT]: 1.375,
    [ActivityLevel.MODERATE]: 1.55,
    [ActivityLevel.INTENSE]: 1.725,
    [ActivityLevel.VERY_INTENSE]: 1.9,
  }

  static calculate(sex: Sex, weight: number, height: number, age: number, activityLevel: ActivityLevel) {
    const basalMetabolicRate = this.getBasalMetabolicRate(weight, height, age)
    const basalMetabolicRateWithSex = this.applySexDifferences(sex, basalMetabolicRate)

    return basalMetabolicRateWithSex * this.rateMap[activityLevel]
  }

  private static applySexDifferences(sex: Sex, basalMetabolicRate: number) {
    return sex === Sex.MALE ? basalMetabolicRate + 5 : basalMetabolicRate - 161
  }

  private static getBasalMetabolicRate(weight: number, height: number, age: number) {
    return 10 * weight + 6.25 * height - 5 * age
  }
}
