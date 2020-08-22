import React from "react"

export function PainScore(props){

  const model = props.model ? props.model : {};
  const unselected = "btn btn-primary";
  const selected = "btn btn-primary btn-selected";

  const handleUpdate = (name, value, identified) => {
      props.onUpdate({name,value}, identified);
  }

  return(

      <div style={{textAlign: 'center', marginTop: '3em'}}>
        <p style={{marginBottom: '.5em'}}>what is the patient's</p>
        <h3>Average Abbey Pain Scale Score</h3>     
        <p>
          <button 
            className={model.painScore === 0 ? selected : unselected}
            onClick={()=>handleUpdate("painScore", 0)} >
              None
          </button>
          <button className={model.painScore === 1 ? selected : unselected}
          onClick={()=>handleUpdate("painScore", 1)}>
            Mild
            </button>
        </p>
        <p>
          <button className={model.painScore === 2 ? selected : unselected}
          onClick={()=>handleUpdate("painScore", 2, true)}>
            Moderate
          </button>
          <button className={model.painScore === 3 ? selected : unselected}
          onClick={()=>handleUpdate("painScore", 3, true)}
          >
            Severe
          </button>
        </p>
        <p style={{marginTop: '6em'}}>
          { model.painScore !== undefined ? <button
         className={unselected}
         onClick={()=>handleUpdate("painScoreDone", true)}
        >Next</button> : <></> }</p>
      </div>
  );
}


export default PainScore
