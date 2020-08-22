import React from "react"
import downloadFile from "../../static/DeliriumAssessmentTool.pdf"

export class Introduction extends React.Component {

  constructor(props){
    super(props);

    this.state = {

    }
  }

 render(){

  return (
    <div className="info-section-container" style={{textAlign:'center'}}>
      <div className="info-section">
        <h3>Online Delirium Assessment</h3>
        <p>
          The delirium assessment tool can be used on this site without patient identifiable information. 
          This can be filled out after printing to stay in line with Information Governance protocols.
        </p>
        <button 
          className="btn btn-primary" 
          style={{marginBottom:'1.5em'}}
          onClick={()=>{this.props.start()}}>
            Start Assessment
        </button>
        <p>
        <small>
          Select each answer and a printable version will be available to you via PDF at the end.
        </small>
        </p>
      </div>
      <div className="info-section">
        <h4>Assessment Tool Template</h4>
        <a 
          className="btn btn-primary btn-sm" 
          href={downloadFile}
          download
        >
            Download
        </a>
        <p/>
      </div>
    </div>
  )
}
}



export default Introduction
