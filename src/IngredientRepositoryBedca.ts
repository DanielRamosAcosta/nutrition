import { XMLParser } from "fast-xml-parser"
import { Ingredient } from "./Ingredient.js"
import { IngredientId } from "./IngredientId.js"
import { IngredientRepository } from "./IngredientRepository.js"
import { Nutriments } from "./Nutriments.js"
import { Weight } from "./Weight.js"
import { Foodvalue, Root } from "./bedca-schema.js"
import { Macros } from "./Macros.js"
import { Energy } from "./Energy.js"

export class IngredientRepositoryBedca implements IngredientRepository {
  private parser = new XMLParser()

  async findBy(id: IngredientId): Promise<Ingredient | undefined> {
    const response = await fetch("https://www.bedca.net/bdpub/procquery.php", {
      method: "POST",
      body: `<?xml version="1.0" encoding="utf-8"?>
        <foodquery>
            <type level="2"/>
            <selection>
                <atribute name="f_ori_name"/>
                <atribute name="sci_name"/>
                <atribute name="c_id"/>
                <atribute name="componentgroup_id"/>
                <atribute name="best_location"/>
                <atribute name="v_unit"/>
                <atribute name="citation"/>
            </selection>
            <condition>
                <cond1>
                    <atribute1 name="f_id"/>
                </cond1>
                <relation type="EQUAL"/>
                <cond3>${id}</cond3>
            </condition>
      </foodquery>`,
    })

    const data = await response.text()

    const { foodresponse } = this.parser.parse(data) as { foodresponse: Root }

    const foodValues = foodresponse.food.foodvalue

    if (!foodValues) {
      return
    }

    const energy = this.getEnergy(foodValues)
    const proteins = this.getProteins(foodValues)
    const fats = this.getFats(foodValues)
    const carbohydrates = this.getCarbohydrates(foodValues)

    return new Ingredient(
      id,
      foodresponse.food.f_ori_name,
      Nutriments.create(energy, new Macros(proteins, carbohydrates, fats)),
    )
  }

  private getEnergy(components: Foodvalue[]): Energy {
    const component = components.find((component) => component.c_id === 409)

    if (!component) throw new Error("Could not found energy")
    if (typeof component.best_location === "string") return new Energy(0)

    return Energy.parse(component.best_location, component.v_unit)
  }

  private getCarbohydrates(components: Foodvalue[]) {
    const component = components.find((component) => component.c_id === 53)

    if (!component) throw new Error("Could not found carbohydrates")

    return this.parse(component)
  }

  private getProteins(components: Foodvalue[]) {
    const component = components.find((component) => component.c_id === 416)

    if (!component) throw new Error("Could not found proteins")

    return this.parse(component)
  }

  private getFats(components: Foodvalue[]): Weight {
    return components
      .filter((component) => component.componentgroup_id === 3)
      .map((component) => this.parse(component))
      .reduce((totalWeight, currentWeight) => totalWeight.add(currentWeight), Weight.zero())
  }

  private parse(component: Foodvalue) {
    if (typeof component.best_location === "string") {
      return Weight.zero()
    }

    return Weight.parse(component.best_location, component.v_unit)
  }
}
