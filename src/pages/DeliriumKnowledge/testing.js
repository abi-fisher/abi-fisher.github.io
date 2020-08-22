import React from "react"
import { Link } from "gatsby"

import Layout from "../../components/layout"
import SEO from "../../components/seo"

const Testing = () => (
  <Layout
  breadCrumb={
    <><Link className="custom-link" to="/">Home</Link> \ <Link className="custom-link" to="/DeliriumKnowledge">Delirium Knowledge</Link>\ Testing</>   
  }
  >
    <SEO title="4AT / AMT Testing" />
<div className="info-section-wrapper">
  <div className="info-section">
    <h3>4AT / AMT Testing</h3>
      <p>
        The ‘Abbreviated Mental Test – 4’ (4AT) and the ‘Abbreviated Mental Test’ (AMT) are both frequently used in geriatric care.
      </p>
      <p>
        The AMT is used on admission into hospital and tests for mental impairment (both dementia or delirium). 
        It is comprised of ten questions used by the medical team to gain a cognition baseline of each patient.
      </p>
      <div style={{marginBottom: '1.5em'}}>
        <a 
            className="btn btn-primary btn-sm" 
            href="https://www.bgs.org.uk/sites/default/files/content/attachment/2018-07-05/abbreviated_mental_test_score.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
              AMT
          </a>
          <small>(British Geriatrics Society)</small>
      </div>
      <p>
        The 4AT is used on Day 3 for our post-operative patients by our Trauma Sisters. 
        It is comprised of four questions to test for delirium.
      </p>
      <div style={{marginBottom: '1.5em'}}> 
        <a 
            className="btn btn-primary btn-sm" 
            href="https://www.the4at.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
              4AT
          </a>
          <small>(The 4AT)</small>
      </div>
      <p>
        Both of these tests are filed in the medical notes.
        Please visit the references above for more information.
      </p>

  </div>

  </div>
  </Layout>
)

export default Testing
