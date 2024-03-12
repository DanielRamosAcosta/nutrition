import { Weight } from "./Weight.js"

export class Energy {
  public static parse(amount: number, unit: string) {
    if (unit === "kcal") return Energy.kcal(amount)
    if (unit === "kJ") return Energy.kj(amount)

    throw new Error("Unknown unit " + unit)
  }

  static zero() {
    return Energy.kcal(0)
  }

  public static kcal(amount: number) {
    return new Energy(Math.round(amount))
  }

  public static kj(amount: number) {
    return Energy.kcal(amount * 0.239006)
  }

  constructor(private amount: number) {}

  proportionFor(weight: Weight) {
    return new Energy((this.amount * weight.toNumberInGrams()) / 100)
  }

  add(other: Energy) {
    return new Energy(this.amount + other.amount)
  }

  toString() {
    return `${Math.round(this.amount)} kcal`
  }
}
