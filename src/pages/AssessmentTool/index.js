import React from "react"
import { Link } from "gatsby"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import Introduction from "./introduction"
import AssessmentProgressBar from "./AssessmentProgressBar"
import Pain from "./Pain"
import Infection from "./Infection"
import Nutrition from "./Nutrition"
import Constipation from "./Constipation"
import Hydration from "./Hydration"
import Medication from "./Medication"
import Environment from "./Environmental"
import Output from "./Output"

export class DeliriumKnowledge extends React.Component {

  constructor(props){
    super(props);

    this.state = {

      started: false,

      painModel: { isComplete: false },
      infectionModel: { isComplete: false },
      nutritionModel:{ isComplete: false },
      constipationModel: { isComplete: false },
      hydrationModel:{ isComplete: false },
      medicationModel:{ isComplete: false },
      environmentModel:{ isComplete: false }


    /* DEBUG OUTPUT
      painModel: { isComplete: true },
      infectionModel: { isComplete: true },
      nutritionModel:{ isComplete: true },
      constipationModel: { isComplete: true },
      hydrationModel:{ isComplete: true },
      medicationModel:{ isComplete: true },
      environmentModel:{ isComplete: true }

      */
    }

  }

  handleStart(){
    this.setState({started:true})
  }
  handleUpdate(targetModel, e, identified){


    let model = Object.assign({}, this.state[targetModel]);

    console.log(model);

    model[e.name] = e.value;

    if(identified === true)model.identified = true;
    
    this.setState({[targetModel]: model }, ()=>{
    });
  }

  handleUpdateMany(targetModel, eArray, identified, done){
    let model = Object.assign({}, this.state[targetModel]);

    eArray.forEach(e => {
      model[e.name] = e.value;
    });

    if(identified === true)model.identified = true;

    this.setState({[targetModel]: model }, ()=>{
      if(done) this.handleCompleteSection(targetModel);
    });
  }

  handleCompleteSection(targetModel){
    let model = Object.assign({}, this.state[targetModel]);
    model.isComplete = true;

    this.setState({[targetModel]: model }, ()=>{
      console.log(this.state);
    });
  }

  anyIdentified(){  
    if(this.state.painModel.identified) return true;
    if(this.state.infectionModel.identified) return true;
    if(this.state.nutritionModel.identified) return true;
    if(this.state.constipationModel.identified) return true;
    if(this.state.hydrationModel.identified) return true;
    if(this.state.medicationModel.identified) return true;
    if(this.state.environmentModel.identified) return true;
    return false;
  }

  generateDateStamp(){
      Number.prototype.padLeft = function(base,chr){
        var  len = (String(base || 10).length - String(this).length)+1;
        return len > 0? new Array(len).join(chr || '0')+this : this;
    }
       
    var d = new Date();
    var dformat = [ 
      d.getDate().padLeft(),
      (d.getMonth()+1).padLeft(),                  
      d.getFullYear()
    ].join('/') + ' ' + [ 
        d.getHours().padLeft(),
        d.getMinutes().padLeft()
      ].join(':');

      this.setState({completed: dformat});

  }

render(){

  return (
    <Layout
      breadCrumb={
        <><Link className="custom-link" to="/">Home</Link> \ Assessment Tool</>   
      }
    >
      <SEO title="Delirium Assessment Tool" />  
      {!this.state.started ? <Introduction start={()=>this.handleStart()}/> 
        :
         this.state.environmentModel.isComplete ?      
      <>
        <h2 className="assessment-complete">Assessment Complete</h2> 
        <div style={{textAlign: 'center', marginTop: '1em'}}>
        {this.anyIdentified() ?
          <p>The following areas have been identified:</p>
            : <p>No areas were identified.</p>
        }
        </div>
      </>
      
      : <AssessmentProgressBar {...this.state}/>}
  

{
  this.state.started && (!this.state.painModel.isComplete ?
    <Pain
      model={this.state.painModel}
      onUpdate={(e, identified)=>this.handleUpdate("painModel", e, identified)}
      onUpdateMany={(eArray, identified, done)=>this.handleUpdateMany("painModel", eArray, identified, done)}
      onComplete={()=>this.handleCompleteSection("painModel")}
    />
    : !this.state.infectionModel.isComplete ?
      <Infection
        model={this.state.infectionModel}
        onUpdateMany={(eArray, identified, done)=>this.handleUpdateMany("infectionModel", eArray, identified, done)}
        onComplete={()=>this.handleCompleteSection("infectionModel")}
      />
      : !this.state.nutritionModel.isComplete ?
        <Nutrition
        model={this.state.nutritionModel}
        onUpdateMany={(eArray, identified, done)=>this.handleUpdateMany("nutritionModel", eArray, identified, done)}
        onComplete={()=>this.handleCompleteSection("nutritionModel")}
        />
        : !this.state.constipationModel.isComplete ?
          <Constipation
          model={this.state.constipationModel}
          onUpdateMany={(eArray, identified, done)=>this.handleUpdateMany("constipationModel", eArray, identified, done)}
          onComplete={()=>this.handleCompleteSection("constipationModel")}
          />
          : !this.state.hydrationModel.isComplete ?
            <Hydration
            model={this.state.hydrationModel}
            onUpdateMany={(eArray, identified, done)=>this.handleUpdateMany("hydrationModel", eArray, identified, done)}
            onComplete={()=>this.handleCompleteSection("hydrationModel")}
            />
            : !this.state.medicationModel.isComplete ?
              <Medication
              model={this.state.medicationModel}
              onUpdateMany={(eArray, identified, done)=>this.handleUpdateMany("medicationModel", eArray, identified, done)}
              onComplete={()=>this.handleCompleteSection("medicationModel")}
              />
              : !this.state.environmentModel.isComplete ?
                <Environment
                model={this.state.environmentModel}
                onUpdateMany={(eArray, identified, done)=>this.handleUpdateMany("environmentModel", eArray, identified, done)}
                onComplete={()=>this.handleCompleteSection("environmentModel")}
                />
                :      
                <div>
                  <AssessmentProgressBar complete {...this.state}/>
                  <Output {...this.state}/>
                </div> )      
}

      
    </Layout>
  )
}
}



export default DeliriumKnowledge
