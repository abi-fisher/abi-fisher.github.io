import React from "react"
import HydrationOverloaded from './hydrationOverloaded';
import HydrationIntake from "./hydrationIntake";
import HydrationOutput from "./hydrationOutput";

export function Hydration(props){

  const model = props.model ? props.model : {};

  return(   
    !model.hydrationOverloadedDone ? <HydrationOverloaded {...props} />
      : !model.hydrationIntakeDone ? <HydrationIntake {...props} />
        : !model.hydrationOutputDone ? <HydrationOutput {...props} />
          :<p>there are no further questions for this section.</p>    
  );
}

export default Hydration
