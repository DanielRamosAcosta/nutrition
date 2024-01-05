export class Length {
  private constructor(private readonly amount: number) {}

  public static cm(amount: number) {
    return new Length(amount)
  }

  public toNumberInCm() {
    return this.amount
  }
}
