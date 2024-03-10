import { Weight } from "./Weight.js"

export class Matrix {
  public static toTable(matrix: Array<Array<String | Weight>>) {
    const column1MaxLength = Math.max(
      ...matrix
        .map((el) => el[0])
        .map((el) => el.toString())
        .map((el) => el.length),
    )

    const column2MaxLength = Math.max(
      ...matrix
        .map((el) => el[1])
        .map((el) => el.toString())
        .map((el) => el.length),
    )

    const column3MaxLength = Math.max(
      ...matrix
        .map((el) => el[2])
        .map((el) => el.toString())
        .map((el) => el.length),
    )

    const column4MaxLength = Math.max(
      ...matrix
        .map((el) => el[3])
        .map((el) => el.toString())
        .map((el) => el.length),
    )

    const pads = [column1MaxLength, column2MaxLength, column3MaxLength, column4MaxLength]

    const res = matrix.map((el) => el.map((k, i) => k.toString().padEnd(pads[i], " ")).join(" | "))

    return res.join("\n")
  }
}
