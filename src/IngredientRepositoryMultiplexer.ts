import { IngredientRepository } from "./IngredientRepository.js"
import { IngredientId } from "./IngredientId.js"
import { IngredientRepositoryBedca } from "./IngredientRepositoryBedca.js"
import { IngredientRepositoryOpenFoodFacts } from "./IngredientRepositoryOpenFoodFacts.js"
import { Ingredient } from "./Ingredient.js"
import { IngredientRepositoryFileSystem } from "./IngredientRepositoryFileSystem.js"

export class IngredientRepositoryMultiplexer implements IngredientRepository {
  private readonly ingredientRepositoryBedca = new IngredientRepositoryBedca()

  private readonly ingredientRepositoryOpenFoodFacts = new IngredientRepositoryOpenFoodFacts()

  private readonly ingredientRepositoryFileSystem = new IngredientRepositoryFileSystem()

  constructor() {}

  async findOrFail(id: IngredientId): Promise<Ingredient> {
    const ingredient = await this.findBy(id)

    if (!ingredient) {
      throw new Error(`Could not find ingredient with id ${id}`)
    }

    return ingredient
  }

  async findBy(id: IngredientId): Promise<Ingredient | undefined> {
    const cached = await this.ingredientRepositoryFileSystem.findBy(id)

    if (cached) {
      return cached
    }

    const ingredient = await this.findInExternalServices(id)

    if (!ingredient) {
      return
    }

    await this.ingredientRepositoryFileSystem.save(ingredient)

    return ingredient
  }

  private async findInExternalServices(id: IngredientId) {
    if (id.toString().length === 4) {
      return this.ingredientRepositoryBedca.findBy(id)
    }

    return this.ingredientRepositoryOpenFoodFacts.findBy(id)
  }
}
