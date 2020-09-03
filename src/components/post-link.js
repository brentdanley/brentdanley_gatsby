import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"

import styles from './post-link.module.scss'

const GratitudePost = ({ post }) => {

  const featuredImgFluid = post.frontmatter.featuredImage ? post.frontmatter.featuredImage.childImageSharp.fluid : ''

  return (
    <div className={styles.cardWrapper}>
      <Img className={styles.featuredImage} fluid={featuredImgFluid} />
      <Link className={styles.titleLink} to={post.frontmatter.slug}>
        <div className={styles.title}>{post.frontmatter.title}</div>
      </Link>
      <p className={styles.summary}>{post.frontmatter.summary}</p>
    </div>
  )
}
export default GratitudePost