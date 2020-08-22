import React from "react"
import NutritionIntake from "./nutritionIntake";
import NutritionSymptom from "./nutritionSymptom";

export function Nutrition(props){

  const model = props.model ? props.model : {};

  return(   
    !model.nutritionIntakeDone ? <NutritionIntake {...props} />
      : !model.nutritionSymptomDone ? <NutritionSymptom {...props}/>
            :<p>there are no further questions for this section.</p>    
  );
}

export default Nutrition
