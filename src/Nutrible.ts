import { Energy } from "./Energy.js"
import { Weight } from "./Weight.js"

export interface Nutrible {
  energy(): Energy
  proteins(): Weight
  carbohydrates(): Weight
  fats(): Weight
}

export function totalEnergy(nutribles: Nutrible[]) {
  return nutribles.map((n) => n.energy()).reduce(Energy.add, Energy.zero())
}

export function totalProteins(nutribles: Nutrible[]) {
  return nutribles.map((n) => n.proteins()).reduce(Weight.add, Weight.zero())
}

export function totalCarbohydrates(nutribles: Nutrible[]) {
  return nutribles.map((n) => n.carbohydrates()).reduce(Weight.add, Weight.zero())
}

export function totalFats(nutribles: Nutrible[]) {
  return nutribles.map((n) => n.fats()).reduce(Weight.add, Weight.zero())
}
