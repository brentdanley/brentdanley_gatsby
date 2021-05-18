import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import SocialIcons from './social-icons'

import styles from './header.module.scss'

const Header = ({ siteTitle  }) => {

  return (
    <>
    <div className={styles.headerSpacer}>&nbsp;</div>
  <header className={styles.header}>
    <div className={styles.content}>
      <h1>
        <Link
          to="/"
        >
          {siteTitle}
        </Link>
      </h1>
      <SocialIcons styles={styles} />
    </div>
  </header>
  </>
)}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
