import React from "react"
import { Link } from "gatsby"

import Layout from "../../components/layout"
import SEO from "../../components/seo"

const Impacts = () => (
  <Layout>
    <SEO title="Impacts" />
    <h1>Impacts</h1>
    <p>some info here...</p>

    <p><Link to="/DeliriumKnowledge">back to Delirium Knowledge</Link></p>
    <p><Link to="/">Go Home</Link></p>
  </Layout>
)

export default Impacts
