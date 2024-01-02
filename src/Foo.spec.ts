import { describe, expect, it } from "vitest"
import { calculateMacronutrients } from "./Foo.js"
import { Sex, Sexes } from "./Sex.js"
import { ActivityLevel, ActivityLevels } from "./ActivityLevel.js"
import { MainGoal, MainGoals } from "./MainGoal.js"

describe("calculateMacronutrients", () => {
  it.each(verifyAllCombinations(Sexes, [70, 80, 90, 100], ActivityLevels, MainGoals))(
    "macros(%s %d %s %s)",
    (gender, weight, activityLevel, mainGoal) => {
      const result = calculateMacronutrients(gender, weight, activityLevel, mainGoal)

      expect(result).toMatchSnapshot()
    },
  )
})

function verifyAllCombinations(
  genders: Sex[],
  weights: number[],
  activityLevels: ActivityLevel[],
  mainGoals: MainGoal[],
): Array<[Sex, number, ActivityLevel, MainGoal]> {
  const combinations: Array<[Sex, number, ActivityLevel, MainGoal]> = []

  for (const gender of genders) {
    for (const weight of weights) {
      for (const activityLevel of activityLevels) {
        for (const mainGoal of mainGoals) {
          combinations.push([gender, weight, activityLevel, mainGoal])
        }
      }
    }
  }

  return combinations
}
