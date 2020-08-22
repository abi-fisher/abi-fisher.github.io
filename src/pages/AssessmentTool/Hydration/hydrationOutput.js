import React from "react"

const unselected = "btn btn-primary";

export class HydrationOutput extends React.Component{
  constructor(props){
    super(props);

    this.state={
        question: "hydrationOutput",
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
    var doneModel = {name:"hydrationOutputDone", value:true};

    var updateModels = [questionModel, doneModel];

    this.props.onUpdateMany(updateModels, this.state.identified, true);
  }


  render(){

    return(

      <div style={{textAlign: 'center', marginTop: '3em'}}>
        <h3>Urine output for shift</h3>     

        <p>
              <input 
              placeholder="output in ml"
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

export default HydrationOutput
