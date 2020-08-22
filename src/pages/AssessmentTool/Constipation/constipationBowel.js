import React from "react"

const unselected = "btn btn-primary";
const selected = "btn btn-primary btn-selected";

export class ConstipationBowel extends React.Component{
  constructor(props){
    super(props);

    this.state={
        question: "constipationBowel",
        answer: null,
        identified:null,
        pr:false
    };
  }

  handleAnswer(answer){
    this.setState({
      answer: answer,
      identified: !answer,
      pr: false
    })
  }

  handleSubmit(){
    
    var questionModel = {name: this.state.question, value: this.state.answer};
    var prModel = {name:"constipationBowelPR",value:this.state.pr};
    var doneModel = {name:"constipationBowelDone", value:true};

    var updateModels = [questionModel,prModel, doneModel];

    this.props.onUpdateMany(updateModels, this.state.identified);
  }


  render(){

    return(

      <div style={{textAlign: 'center', marginTop: '3em'}}>
        <h3>Has the patient had a bowel movement in 3 days?</h3>     
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

        {this.state.answer === false &&
        <p>
          <span className="assessment-checkbox-label">PR </span>
          <input type="checkbox"
          className="assessment-checkbox"
          checked={this.state.pr}
          onClick={(e)=>this.setState({pr: e.target.checked})}
          />


        </p>
        }
       
        <p style={{marginTop: '4em'}}>
          { this.state.answer !== null ? <button
         className={unselected}
         onClick={()=>this.handleSubmit()}
        >Next</button> : <></> }</p>
      </div>
  );
  }

}

export default ConstipationBowel
