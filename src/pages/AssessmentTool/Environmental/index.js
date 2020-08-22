import React from "react"

import EnvironmentBed from './environmentBed';
import EnvironmentHistory from './environmentHistory';

export function Environment(props){

  const model = props.model ? props.model : {};

  return(   
    !model.environmentBedDone ? <EnvironmentBed {...props} />
      : !model.environmentHistoryDone ? <EnvironmentHistory {...props} />
            :<p>there are no further questions for this section.</p>    
  );
}

export default Environment
