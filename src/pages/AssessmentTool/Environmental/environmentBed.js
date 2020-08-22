import React from "react"

const unselected = "btn btn-primary";
const selected = "btn btn-primary btn-selected";

export class EnvironmentBed extends React.Component{
  constructor(props){
    super(props);

    this.state={
        question: "environmentBed",
        answer: null,
        identified:null,
    };
  }

  handleAnswer(answer){
    this.setState({
      answer: answer,
      identified: answer,
    })
  }

  handleSubmit(){
    
    var questionModel = {name: this.state.question, value: this.state.answer};
    var doneModel = {name:"environmentBedDone", value:true};

    var updateModels = [questionModel, doneModel];

    this.props.onUpdateMany(updateModels, this.state.identified);
  }


  render(){

    return(

      <div style={{textAlign: 'center', marginTop: '3em'}}>
        <h3>Has there been a change in bed space within the last 48 hours?</h3>     
        <p>       
          <button 
            className={this.state.answer === true ? selected : unselected}
            onClick={()=>this.handleAnswer(true)} >
              Yes
          </button>
          <button className={this.state.answer === false ? selected : unselected}
          onClick={()=>this.handleAnswer(false)}>
            No
            </button>
        </p>
       
        <p style={{marginTop: '4em'}}>
          { this.state.answer !== null ? <button
         className={unselected}
         onClick={()=>this.handleSubmit()}
        >Next</button> : <></> }</p>
      </div>
  );
  }

}

export default EnvironmentBed
