import fs from "node:fs"
import { IngredientRepository } from "./IngredientRepository.js"
import { IngredientId } from "./IngredientId.js"
import { Ingredient } from "./Ingredient.js"
import { Nutriments } from "./Nutriments.js"
import { Weight } from "./Weight.js"

export class IngredientRepositoryFileSystem implements IngredientRepository {
  private readonly cacheDirectory = "/Users/danielramos/Documents/repos/mines/nutrition/src/cache"

  async findBy(id: IngredientId): Promise<Ingredient | undefined> {
    const path = this.getPath(id)

    if (!fs.existsSync(path)) {
      return
    }

    const s = JSON.parse(fs.readFileSync(path, "utf-8"))

    return new Ingredient(
      id,
      s.name,
      new Nutriments(
        new Weight(s.nutriments.proteins.amount),
        new Weight(s.nutriments.carbohydrates.amount),
        new Weight(s.nutriments.fat.amount),
      ),
    )
  }

  private getPath(id: IngredientId) {
    return this.cacheDirectory + "/" + id + ".json"
  }

  async save(ingredient: Ingredient) {
    fs.writeFileSync(this.getPath(ingredient.getId()), JSON.stringify(ingredient, null, 2))
  }
}
