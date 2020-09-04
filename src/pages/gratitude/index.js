import React from "react"

import Layout from "../../components/layout/layout"
import SEO from "../../components/seo"

import styles from '../category/category.module.scss'

const GratitudePage = ({
  data: {
    allMarkdownRemark: { edges },
  },
}) => {
  const Posts = edges
    .map(edge => <GratitudePost key={edge.node.id} post={edge.node} />)

    return (
   <Layout>
    <SEO title="Gratitude Journal" />
    <h1 className={styles.pageHeading}>Gratitude Journal</h1>
    <div className={styles.headingCopy}>
      <p>Every day I strive to be grateful for the plethora of wonderfulness in my life. Here I document a very tiny sliver of those things.</p>
    </div>
    <div className={styles.postsWrapper}>{Posts}</div>
  </Layout>
    )
}

export default GratitudePage

export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }, 
      filter: {frontmatter: {category: {eq: "gratitude"}}}) {
      edges {
        node {
          id
          html
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
          }
        }
      }
    }
  }
`

const GratitudePost = ({ post }) => {
  return (
    <div className={styles.cardWrapper}>
      <div className={styles.date}>{post.frontmatter.date}</div>
      <div className={styles.content} dangerouslySetInnerHTML={{ __html: post.html }} />
    </div>
  )
}
