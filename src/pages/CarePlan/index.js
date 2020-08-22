import React from "react"
import { Link } from "gatsby"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import downloadFile from "../../static/DeliriumCarePlan.pdf"

export class CarePlan extends React.Component {

  constructor(props){
    super(props);

    this.state = {

    }

  }

 render(){

  return (
    <Layout
    breadCrumb={
      <><Link className="custom-link" to="/">Home</Link> \ Care Plan</>   
    }
  >
    <SEO title="Care Plan" />  
    <div className="info-section-container" style={{textAlign:'center'}}>

      <div className="info-section">
        <h3>Delirium Care Plan</h3>
        <p>
          The delirium care plan is available as a PDF and must be printed out. 
          Please fill in patient identifiable information once printed
        </p>
        <a 
          className="btn btn-primary" 
          href={downloadFile}
          download
        >
            Download
        </a>
        <p/>
      </div>
    </div>
    </Layout>
  )
}
}



export default CarePlan
