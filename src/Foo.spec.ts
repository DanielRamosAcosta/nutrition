import { describe, expect, it } from "vitest"
import { calculateMacronutrients } from "./Foo.js"

describe("calculateMacronutrients", () => {
  it.each(
    verifyAllCombinations(
      ["h", "m"],
      [70, 80, 90, 100],
      ["sedentario", "ligera", "moderada", "intensa", "muy intensa"],
      ["gain", "lost", "maintain"],
    ),
  )("macros(%s %d %s %s)", (gender, weight, activityLevel, mainGoal) => {
    const result = calculateMacronutrients(gender, weight, activityLevel, mainGoal)

    expect(result).toMatchSnapshot()
  })
})

function verifyAllCombinations(
  genders: string[],
  weights: number[],
  activityLevels: string[],
  mainGoals: string[],
): Array<[string, number, string, string]> {
  const combinations: Array<[string, number, string, string]> = []

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
