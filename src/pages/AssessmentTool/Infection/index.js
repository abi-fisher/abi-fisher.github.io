import React from "react"
import InfectionChest from "./infectionChest";
import InfectionUrine from "./infectionUrine";
import InfectionSurgical from "./infectionSurgical";

export function Infection(props){

  const model = props.model ? props.model : {};

  return(   
    !model.infectionChestDone ? <InfectionChest {...props} />
      : !model.infectionUrineDone ? <InfectionUrine {...props}/>
        : !model.infectionSurgicalDone ? <InfectionSurgical {...props}/>
            :<p>there are no further questions for this section.</p>    
  );
}

export default Infection
