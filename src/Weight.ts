export class Weight {
  constructor(private readonly amount: number) {}

  static kg(amount: number) {
    return new Weight(amount)
  }

  static g(amount: number) {
    return new Weight(amount / 1000)
  }

  toNumberInKg() {
    return this.amount
  }
}
