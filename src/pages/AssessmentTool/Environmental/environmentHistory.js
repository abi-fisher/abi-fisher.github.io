import React from "react"

const unselected = "btn btn-primary";
const selected = "btn btn-primary btn-selected";

export class EnvironmentHistory extends React.Component{
  constructor(props){
    super(props);

    this.state={
        question: "environmentHistory",
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
    var doneModel = {name:"environmentHistoryDone", value:true};

    var updateModels = [questionModel, doneModel];

    this.props.onUpdateMany(updateModels, this.state.identified, true);
  }


  render(){

    return(

      <div style={{textAlign: 'center', marginTop: '3em'}}>
        
        <h3>Is there a history of?</h3>
        <p className="assessment-list">
          <ul >
            <li>Long term confusion with no diagnosis</li>
            <li>Poor 4AT score</li>
            <li>Previous excessive alcohol use</li>
            <li>Previous drug use</li>
          </ul>  
        </p>
 
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

export default EnvironmentHistory
