import React from "react"
import MedicationDementia from './medicationDementia';
import MedictionParkinsons from './medicationParkinsons';
import MedicationAnalgesia from './medicationAnalgesia';
import MedicationMedications from './medicationMedications';

export function Medication(props){

  const model = props.model ? props.model : {};

  return(   
    !model.medicationDementiaDone ? <MedicationDementia {...props} />
      : !model.medicationParkinsonsDone ? <MedictionParkinsons {...props} />
        : !model.medicationAnalgesiaDone ? <MedicationAnalgesia {...props} />
          : !model.medicationMedicationsDone ? <MedicationMedications {...props} />
            :<p>there are no further questions for this section.</p>    
  );
}

export default Medication
