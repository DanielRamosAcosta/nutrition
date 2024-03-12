import { IngredientId } from "./IngredientId.js"
import { Ingredient } from "./Ingredient.js"
import { IngredientRepository } from "./IngredientRepository.js"
import { Root } from "./schema.js"
import { Nutriments } from "./Nutriments.js"
import { Weight } from "./Weight.js"
import { Macros } from "./Macros.js"
import { Energy } from "./Energy.js"

export class IngredientRepositoryOpenFoodFacts implements IngredientRepository {
  async findBy(id: IngredientId): Promise<Ingredient | undefined> {
    const response = await fetch(`https://world.openfoodfacts.org/api/v2/product/${id}.json`)

    const data: Root = await response.json()

    if (data.status_verbose === "no code or invalid code") {
      return
    }

    if (data.status === 0) {
      throw new Error("OFF Error: " + data.status_verbose)
    }

    const nutriments = Nutriments.create(
      Energy.kcal(data.product.nutriments["energy-kcal"]),
      new Macros(
        Weight.g(data.product.nutriments.proteins),
        Weight.g(data.product.nutriments.carbohydrates),
        Weight.g(data.product.nutriments.fat),
      ),
    )

    return new Ingredient(id, data.product.product_name_es, nutriments)
  }
}
