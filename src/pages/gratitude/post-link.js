import React from "react"

import styles from './post-link.module.scss'

const GratitudePost = ({ post }) => {
  return (
    <div className={styles.cardWrapper}>
      <div className={styles.date}>{post.frontmatter.date}</div>
      <div className={styles.content} dangerouslySetInnerHTML={{ __html: post.html }} />
    </div>
  )
}

export default GratitudePost