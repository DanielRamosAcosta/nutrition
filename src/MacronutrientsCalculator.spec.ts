import { describe, expect, it } from "vitest"
import { MacronutrientsCalculator } from "./MacronutrientsCalculator.js"
import { Sexes } from "./Sex.js"
import { ActivityLevels } from "./ActivityLevel.js"
import { MainGoals } from "./MainGoal.js"

describe("MacronutrientsCalculator", () => {
  it.each(verifyAllCombinations(Sexes, [70, 80, 90, 100], ActivityLevels, MainGoals))(
    "macros(%s %d %s %s)",
    (gender, weight, activityLevel, mainGoal) => {
      const result = MacronutrientsCalculator.calculate(gender, weight, activityLevel, mainGoal)

      expect(result).toMatchSnapshot()
    },
  )
})

function verifyAllCombinations<A, B, C, D>(arg0: A[], arg1: B[], arg2: C[], arg3: D[]): Array<[A, B, C, D]> {
  const combinations: Array<[A, B, C, D]> = []

  for (const arg0element of arg0) {
    for (const arg1element of arg1) {
      for (const arg2element of arg2) {
        for (const arg3element of arg3) {
          combinations.push([arg0element, arg1element, arg2element, arg3element])
        }
      }
    }
  }

  return combinations
}
