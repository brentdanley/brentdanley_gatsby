/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { useState } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { useScrollPosition } from '../useScrollPosition'

import Header from './header'
import Footer from './footer'
import styles from './layout.module.scss'

const Layout = ({ children, pageTitle }) => {
  const [scroll, setScroll] = useState(0);
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  const [headerTitle, setHeaderTitle] = useState(data.site.siteMetadata.title)


  useScrollPosition(function setScrollPosition ({ currentPosition }) {
    setScroll(currentPosition.y)

    const titlePosition = document.querySelector('[class^="postTemplate-module--title"]') === null ? 200 : document.querySelector('[class^="postTemplate-module--title"]').offsetTop * -1

    setHeaderTitle(scroll < titlePosition ? pageTitle : data.site.siteMetadata.title)
  })

  return (
    <>
      <Header scrollPos={scroll} siteTitle={headerTitle} />
      <div className={styles.contentWrapper}>
        <main>{children}</main>
      </div>
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
