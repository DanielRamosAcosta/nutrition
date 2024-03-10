export class Energy {
  private static kcal(amount: number) {
    return new Energy(amount)
  }

  constructor(private amount: number) {}
}
