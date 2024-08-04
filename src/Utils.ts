export function roundToTwoDigits(n: number) {
  return Math.round(n * 100) / 100
}

export function formatNumber(n: number): string {
  return n.toString().replace(".", ",")
}
