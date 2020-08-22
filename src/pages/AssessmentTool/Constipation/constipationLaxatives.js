import React from "react"

const unselected = "btn btn-primary";
const selected = "btn btn-primary btn-selected";

export class ConstipationLaxatives extends React.Component{
  constructor(props){
    super(props);

    this.state={
        question: "constipationLaxatives",
        answer: null,
        identified:null,
    };
  }

  shouldComponentUpdate(nextProps, nextState){
    if(this.props.model === nextProps.model){
      console.log("UPDATING!!");
      return true;
    }

    return false;
  }

  handleAnswer(answer){
    this.setState({
      answer: answer,
      identified: !answer,
    })
  }

  handleSubmit(){
    
    var questionModel = {name: this.state.question, value: this.state.answer};
    var doneModel = {name:"constipationLaxativesDone", value:true};

    var updateModels = [questionModel, doneModel];

    this.props.onUpdateMany(updateModels, this.state.identified, true);
  }


  render(){

    return(

      <div style={{textAlign: 'center', marginTop: '3em'}}>
        <h3>Has the patient been prescribed and given sufficient laxatives?</h3>     
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

export default ConstipationLaxatives
