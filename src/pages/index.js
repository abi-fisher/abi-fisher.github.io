import React from "react"
import Layout from "../components/layout"
import IconLink from "../components/iconLink"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />

    <div className="info-section">
      <h3 className="welcome-title">Hey Team 205!</h3>
      <p>Select an option below to start a new assessment, download a care plan or learn more about delirium.</p>
    </div>

    <div className="icon-link-grid">
        <IconLink to="/AssessmentTool/" label="Assessment Tool" image="https://img.icons8.com/nolan/96/inspection.png"/>
        <IconLink to="/CarePlan/" label="Care Plan" image="https://img.icons8.com/nolan/96/knowledge-sharing.png"/>
        <IconLink to="/DeliriumKnowledge/" label="Delirium Knowledge" image="https://img.icons8.com/nolan/96/help--v1.png"/>
        <IconLink to="/News/" label="News" image="https://img.icons8.com/nolan/96/twitter.png"/>
    </div>
  </Layout>
)

export default IndexPage
