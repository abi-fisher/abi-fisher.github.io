import React from "react"

const unselected = "btn btn-primary";

export class HydrationIntake extends React.Component{
  constructor(props){
    super(props);

    this.state={
        question: "hydrationIntake",
        answer: null,
        identified:null,
    };
  }

  handleAnswer(answer){
    this.setState({
      answer: answer,
    })
  }

  handleSubmit(){
    
    var questionModel = {name: this.state.question, value: this.state.answer};
    var doneModel = {name:"hydrationIntakeDone", value:true};

    var updateModels = [questionModel, doneModel];

    this.props.onUpdateMany(updateModels, this.state.identified);
  }


  render(){

    return(

      <div style={{textAlign: 'center', marginTop: '3em'}}>
        <h3>Oral intake for shift</h3>     

        <p>
              <input 
              placeholder="intake in ml"
              type="number"
              className="assessment-input"
              value={this.state.date}
              onChange={(e)=>this.setState({answer: e.target.value})}
              />
            </p>
        <p style={{marginTop: '4em'}}>
          { !isNaN(this.state.answer) && this.state.answer!== "" ? <button
         className={unselected}
         onClick={()=>this.handleSubmit()}
        >Next</button> : <></> }</p>
      </div>
  );
  }

}

export default HydrationIntake
