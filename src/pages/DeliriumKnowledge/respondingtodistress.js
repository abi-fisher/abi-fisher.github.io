import React from "react"
import { Link } from "gatsby"

import Layout from "../../components/layout"
import SEO from "../../components/seo"

const RespondingToDistress = () => (
  <Layout>
    <SEO title="Responding To Distress" />
    <h1>Responding To Distress</h1>
    <p>some info here...</p>

    <p><Link to="/DeliriumKnowledge">back to Delirium Knowledge</Link></p>
    <p><Link to="/">Go Home</Link></p>
  </Layout>
)

export default RespondingToDistress
