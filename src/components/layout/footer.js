import React from 'react'

import styles from './footer.module.scss'

const Footer = () => {
    return (
        <footer>
          <div className={styles.wrapper}>
            <div className={styles.copyright}>&copy; {new Date().getFullYear()} Brent Danley</div>
          </div>
        </footer>
    )
}

export default Footer