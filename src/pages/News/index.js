import React from "react"
import { Link } from "gatsby"
import Layout from "../../components/layout"
import SEO from "../../components/seo"

import {TwitterTimelineEmbed} from 'react-twitter-embed';

const DeliriumKnowledge = () => (
  <Layout
    breadCrumb={
      <><Link className="custom-link" to="/">Home</Link> \ Delirium News</>   
    }
  >
    <SEO title="Delirium News" />
   
    <TwitterTimelineEmbed
      sourceType="profile"
      screenName="NursingDelirium"
      linkColor="#8B3CFF"
      borderColor="#8B3CFF"
      noHeader
      noFooter
    />
  </Layout>
)

export default DeliriumKnowledge
