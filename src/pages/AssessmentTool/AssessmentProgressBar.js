import React from "react"

export function AssessmentProgressBar(props){
  
  const {
    painModel, 
    infectionModel, 
    nutritionModel, 
    constipationModel,
    hydrationModel, 
    medicationModel, 
    environmentModel,
    complete
  } = props;

  const painClass = !painModel ? "undefined" : painModel.isComplete ? 
    painModel.identified ? "identified" : "complete"
     : "inprogress";

  const infectionClass = !infectionModel ? "undefined" :infectionModel.isComplete ?
    infectionModel.identified ? "identified" : "complete" 
      : painModel.isComplete ? "inprogress" : "notstarted";

  const nutritionClass = !nutritionModel ? "undefined" :nutritionModel.isComplete ? 
    nutritionModel.identified ? "identified" : "complete" 
      : infectionModel.isComplete ? "inprogress" : "notstarted";

  const constipationClass = !constipationModel ? "undefined" : constipationModel.isComplete ?
    constipationModel.identified ? "identified" : "complete" 
      : nutritionModel.isComplete ? "inprogress" : "notstarted";

  const hydrationClass = !hydrationModel ? "undefined" : hydrationModel.isComplete ? 
    hydrationModel.identified ? "identified" : "complete" 
      : constipationModel.isComplete ? "inprogress" : "notstarted";

  const medicationClass = !medicationModel ? "undefined" : medicationModel.isComplete ?
    medicationModel.identified ? "identified" : "complete" 
      : hydrationModel.isComplete ? "inprogress" : "notstarted";

  const environmentClass = !environmentModel ? "undefined" :environmentModel.isComplete ?
    environmentModel.identified ? "identified" : "complete" 
      : medicationModel.isComplete ? "inprogress" : "notstarted";

      const progressBarClass = complete ? "progress-bar complete" : "progress-bar"

  return(

    <div className={progressBarClass}>
      <div className={painClass}>
        {(painClass === "inprogress" || complete) ? "Pain":"P"}
      </div>
      <div className={infectionClass}>
        {(infectionClass === "inprogress" || complete) ? "Infection":"I"}
      </div>
      <div className={nutritionClass}>
        {(nutritionClass === "inprogress" || complete) ? "Nutrition":"N"}
      </div>
      <div className={constipationClass}>
        {(constipationClass === "inprogress" || complete) ? "Constipation":"C"}
      </div>
      <div className={hydrationClass}>
        {(hydrationClass === "inprogress" || complete) ? "Hydration":"H"}
      </div>
      <div className={medicationClass}>
        {(medicationClass === "inprogress" || complete) ? "Medication":"M"}
      </div>
      <div className={environmentClass}>
        {(environmentClass === "inprogress" || complete) ? "Environment":"E"}
      </div>
    </div>
    
  );
}

export default AssessmentProgressBar;
