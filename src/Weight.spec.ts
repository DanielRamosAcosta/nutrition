import { describe, it, expect } from "vitest"
import { Weight } from "./Weight.js"

describe("Weight", () => {
  describe("format", () => {
    it("formats in kg", () => {
      const weight = Weight.kg(1)

      const result = weight.format()

      expect(result).toEqual("1 kg")
    })

    it("formats in g", () => {
      const weight = Weight.g(999)

      const result = weight.format()

      expect(result).toEqual("999.00 g")
    })

    it("formats in mg", () => {
      const weight = Weight.mg(999)

      const result = weight.format()

      expect(result).toEqual("999 mg")
    })
  })

  it("proportionTo", () => {
    const proteinsFor100g = Weight.g(12.5)

    const proportion = proteinsFor100g.proportionFor(Weight.g(200))

    expect(proportion).toEqual(Weight.g(25))
  })

  it("to kg in number", () => {
    const oneKilo = Weight.kg(1)

    const number = oneKilo.toNumberInKg()

    expect(number).toEqual(1)
  })
})
