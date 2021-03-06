import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"

const LayoutMap = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Header siteTitle={data.site.siteMetadata.title} />
        <div
          style={{
            paddingTop: 0,
          }}
        >
        <main>{children}</main>
        </div>
          <footer style={{
            padding: `0.5px 1rem`,
            color: `#5b6c5d`,
            }}>
            © {new Date().getFullYear()} <a href="https://www.andrewl.net">Andrew Larcombe</a>, built with
            {` `}
            <a href="https://www.gatsbyjs.org">Gatsby</a>
          </footer>
      </>
    )}
  />
)

LayoutMap.propTypes = {
  children: PropTypes.node.isRequired,
}

export default LayoutMap