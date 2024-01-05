export class Weight {
  constructor(private readonly amount: number) {}

  static kg(amount: number) {
    return new Weight(amount)
  }

  toNumberInKg() {
    return this.amount
  }
}
