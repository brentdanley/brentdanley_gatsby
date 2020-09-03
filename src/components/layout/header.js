import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import SocialIcons from './social-icons'

import styles from './header.module.scss'

const Header = ({ siteTitle }) => (
  <header className={styles.header}>
    <div className={styles.content}>
      <h1 style={{ margin: 0, fontFamily: `Fugaz One` }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
      <SocialIcons styles={styles} />
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
