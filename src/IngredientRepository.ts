import { Ingredient } from "./Ingredient.js"
import { IngredientId } from "./IngredientId.js"

export interface IngredientRepository {
  findBy(id: IngredientId): Promise<Ingredient | undefined>
}
