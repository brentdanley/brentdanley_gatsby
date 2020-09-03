import React from "react"

import styles from './post-link.module.scss'

const GratitudePost = ({ props }) => {
  return (
    <div className={styles.cardWrapper}>
      <div className={styles.date}>{props.post.frontmatter.date}</div>
      <div className={styles.content} dangerouslySetInnerHTML={{ __html: props.post.html }} />
    </div>
  )
}

export default GratitudePost