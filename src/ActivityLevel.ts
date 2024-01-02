export enum ActivityLevel {
  /**
   * low or no exercise
   */
  SEDENTARY = "SEDENTARY",
  /**
   * light exercise/sports 1-3 days/week
   */
  LIGHT = "LIGHT",
  /**
   * moderate exercise/sports 3-5 days/week
   */
  MODERATE = "MODERATE",
  /**
   * hard exercise/sports 6-7 days a week
   */
  INTENSE = "INTENSE",
  /**
   * very hard exercise/sports & physical job or 2x training
   */
  VERY_INTENSE = "VERY_INTENSE",
}

export const ActivityLevels = Object.values(ActivityLevel)
