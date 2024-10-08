import { Sexes } from "./Sex.js"
import { ActivityLevels } from "./ActivityLevel.js"
import { describe, expect, it } from "vitest"
import { CaloriesCalculator } from "./CaloriesCalculator.js"
import { Weight } from "./Weight.js"
import { Length } from "./Length.js"

describe("CaloriesCalculator", () => {
  it.each(verifyAllCombinations(Sexes, [70, 80, 90, 100], [160, 170, 180, 190], [20, 25, 30, 35], ActivityLevels))(
    "macros(%s %d %d %d %s)",
    (sex, weight, height, age, activityLevel) => {
      const result = CaloriesCalculator.calculate(sex, Weight.kg(weight), Length.cm(height), age, activityLevel)

      expect(result).toMatchSnapshot()
    },
  )
})

function verifyAllCombinations<A, B, C, D, E>(
  arg0: A[],
  arg1: B[],
  arg2: C[],
  arg3: D[],
  arg4: E[],
): Array<[A, B, C, D, E]> {
  const combinations: Array<[A, B, C, D, E]> = []

  for (const arg0element of arg0) {
    for (const arg1element of arg1) {
      for (const arg2element of arg2) {
        for (const arg3element of arg3) {
          for (const arg4element of arg4) {
            combinations.push([arg0element, arg1element, arg2element, arg3element, arg4element])
          }
        }
      }
    }
  }

  return combinations
}
