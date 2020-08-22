import React from "react"
import PainScore from "./painScore";
import PainHistory from "./painHistory";
import PainAnalgesia from "./painAnalgesia";
import PainAdvise from "./painAdvise";

export function Pain(props){

  const model = props.model ? props.model : {};

  return(   
    !model.painScoreDone ? <PainScore {...props} />
      : !model.painHistoryDone ? <PainHistory {...props}/>
        : !model.painAnalgesiaDone ? <PainAnalgesia {...props}/>
          : !model.painAdviseDone ? <PainAdvise {...props}/>
            :<p>there are no further questions for this section.</p>    
  );
}

export default Pain
