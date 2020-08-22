import React from "react"
import ConstipationBowel from './constipationBowel';
import ConstipationLaxatives from './constipationLaxatives';

export function Constipation(props){

  const model = props.model ? props.model : {};

  return(   
    !model.constipationBowelDone ? <ConstipationBowel {...props} />
      : !model.constipationLaxativesDone ? <ConstipationLaxatives {...props}/>
            :<p>there are no further questions for this section.</p>    
  );
}

export default Constipation
