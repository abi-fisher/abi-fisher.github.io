import React from "react"

const unselected = "btn btn-primary";
const selected = "btn btn-primary btn-selected";

export class InfectionSurgical extends React.Component{
  constructor(props){
    super(props);

    this.state={
        question: "infectionSurgical",
        answer: null,
        identified:null,

        showDate: false,
        date:""
    };
  }

  handleAnswer(answer){
    this.setState({
      answer: answer,
      identified: answer === "N/A" ? false : true,
      showDate:false,
      date: ""
    })
  }

  handleShowDate =()=>{
    this.setState({
      answer: true,
      identified: true,
      showDate: true
    })
  }

  handleSubmit(){
    
    var questionModel = {name: this.state.question, value: this.state.answer};
    var doneModel = {name:"infectionSurgicalDone", value:true};

    var updateModels = [questionModel, doneModel];
    if(this.state.showDate){
      var dateModel = {name:"infectionSurgicalDate", value:this.state.date};
     updateModels.push(dateModel);
    }

    this.props.onUpdateMany(updateModels, this.state.identified, true);
  }

  render(){

    return(

      <div style={{textAlign: 'center', marginTop: '3em'}}>
        <p>Are they symptomatic of infection?</p>
        <h3>Surgical wound(s)</h3>     
        <p>
          <button 
            className={this.state.showDate === true ? selected : unselected}
            onClick={()=>this.handleShowDate()} >
              Yes
          </button>
          <button 
            className={this.state.answer === "A/T" ? selected : unselected}
            onClick={()=>this.handleAnswer("A/T")} >
              Already Treating
          </button>
          <button className={this.state.answer === "N/A" ? selected : unselected}
          onClick={()=>this.handleAnswer("N/A")}>
            N/A
            </button>
        </p>

        {this.state.showDate === true &&
          <>
            <h4>Date of Sample</h4>
            <p>
              <input 
              className="assessment-input"
              type="date"
              value={this.state.date}
              onChange={(e)=>this.setState({date: e.target.value})}
              />
            </p>
          </>
        }
       
        <p style={{marginTop: '4em'}}>
          { (this.state.showDate === false && this.state.answer !== null) || (this.state.showDate === true && this.state.date.length > 0) ? <button
         className={unselected}
         onClick={()=>this.handleSubmit()}
        >Next</button> : <></> }</p>
      </div>
  );
  }

}

export default InfectionSurgical
