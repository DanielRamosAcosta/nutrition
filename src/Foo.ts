export function calculateMacronutrients(gender: string, weight: number, activityLevel: string, mainGoal: string) {
  let proteins = 0.0
  let carbs = 0.0
  let fats = 0.0
  if (activityLevel === "sedentario") {
    switch (mainGoal) {
      case "gain":
        proteins = 1.2 * weight
        carbs = 3 * weight
        fats = gender === "h" ? 0.7 * weight : 0.8 * weight
        break
      case "lost":
        proteins = 1.2 * weight
        carbs = 2 * weight
        fats = gender === "h" ? 0.6 * weight : 0.8 * weight
        break
      case "maintain":
        proteins = 1.2 * weight
        carbs = 2.5 * weight
        fats = gender === "h" ? 0.8 * weight : 1 * weight
        break
    }
  } else if (activityLevel === "ligera") {
    switch (mainGoal) {
      case "gain":
        proteins = 1.4 * weight
        carbs = 3.5 * weight
        fats = gender === "h" ? 0.7 * weight : 0.8 * weight
        break
      case "lost":
        proteins = 1.6 * weight
        carbs = 2.5 * weight
        fats = gender === "h" ? 0.6 * weight : 0.8 * weight
        break
      case "maintain":
        proteins = 1.2 * weight
        carbs = 2.5 * weight
        fats = gender === "h" ? 0.8 * weight : 1 * weight
        break
    }
  } else if (activityLevel === "moderada") {
    switch (mainGoal) {
      case "gain":
        proteins = 1.6 * weight
        carbs = 3.9 * weight
        fats = gender === "h" ? 0.8 * weight : 1 * weight
        break
      case "lost":
        proteins = 2 * weight
        carbs = 2.8 * weight
        fats = gender === "h" ? 0.6 * weight : 0.8 * weight
        break
      case "maintain":
        proteins = 1.2 * weight
        carbs = 3 * weight
        fats = gender === "h" ? 0.8 * weight : 1 * weight
        break
    }
  } else if (activityLevel === "intensa") {
    switch (mainGoal) {
      case "gain":
        proteins = 2 * weight
        carbs = 4.2 * weight
        fats = gender === "h" ? 0.8 * weight : 1 * weight
        break
      case "lost":
        proteins = 2.2 * weight
        carbs = 3.2 * weight
        fats = gender === "h" ? 0.7 * weight : 0.9 * weight
        break
      case "maintain":
        proteins = 1.4 * weight
        carbs = 3.5 * weight
        fats = gender === "h" ? 1 * weight : 1.1 * weight
        break
    }
  } else {
    switch (mainGoal) {
      case "gain":
        proteins = 2.2 * weight
        carbs = 4.5 * weight
        fats = gender === "h" ? 1 * weight : 1.2 * weight
        break
      case "lost":
        proteins = 2.5 * weight
        carbs = 3.5 * weight
        fats = gender === "h" ? 0.7 * weight : 0.9 * weight
        break
      case "maintain":
        proteins = 1.6 * weight
        carbs = 4 * weight
        fats = gender === "h" ? 1 * weight : 1.1 * weight
        break
    }
  }

  return {
    proteins: proteins,
    carbs: carbs,
    fats: fats,
  }
}
