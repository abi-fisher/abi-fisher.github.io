/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"
import "./style.css"

const Layout = ({ children, breadCrumb }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      {breadCrumb && 
        <div className="breadCrumb">
          <h5 className="page-title">{breadCrumb}</h5>
        </div>
      }
      <div>
        <main>{children}</main>
        <footer>
          <p>© {new Date().getFullYear()} Nursing Deliruim, Abi Fisher</p>
          <p>Built by {` `} <a href="https://ericgeorgeriley.com">Eric George Riley.</a> Icons by<a href="https://icons8.com/"> Icons8</a></p>           
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
