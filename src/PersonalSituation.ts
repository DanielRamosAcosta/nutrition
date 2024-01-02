import { Sex } from "./Sex.js"
import { ActivityLevel } from "./ActivityLevel.js"
import { MainGoal } from "./MainGoal.js"

export class PersonalSituation {
  constructor(
    public readonly sex: Sex,
    public readonly weight: number,
    public readonly height: number,
    public readonly age: number,
    public readonly activityLevel: ActivityLevel,
    public readonly mainGoal: MainGoal,
  ) {}
}
