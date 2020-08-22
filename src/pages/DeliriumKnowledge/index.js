import React from "react"
import { Link } from "gatsby"
import Layout from "../../components/layout"
import SEO from "../../components/seo"

const DeliriumKnowledge = () => (
  <Layout
  breadCrumb={
    <><Link className="custom-link" to="/">Home</Link> \ Delirium Knowledge</>   
  }
  >
    <SEO title="Delirium Knowledge" />
    <p><Link to="/DeliriumKnowledge/whatisdelirium/">What is Delirium?</Link></p>
    <p><Link to="/DeliriumKnowledge/causes/">Causes</Link></p>
    <p><Link to="/DeliriumKnowledge/testing/">4AT / AMT Testing</Link></p>
    <p><Link to="/DeliriumKnowledge/respondingtodistress/">Responding to Distress</Link></p>
    <p><Link to="/DeliriumKnowledge/bestinterests/">MCA / Best Interests</Link></p>
    <p><Link to="/DeliriumKnowledge/impacts/">Impacts</Link></p>
  </Layout>
)

export default DeliriumKnowledge
