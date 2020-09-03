import React from "react"

import Layout from "../../../components/layout/layout"
import SEO from "../../../components/seo"
import PostLink from "../../../components/post-link"

import styles from '../../category/category.module.scss'

const RelationshipsPage = ({
  data: {
    allMarkdownRemark: { edges },
  },
}) => {
  const Posts = edges
    .filter(edge => !!edge.node.frontmatter.date) // You can filter your posts based on some criteria
    .map(edge => <PostLink key={edge.node.id} post={edge.node} />)

    return (
   <Layout>
    <SEO title="Category - Relationships" />
    <h1>Relationships</h1>
    <div className={styles.postsWrapper}>{Posts}</div>
  </Layout>
    )
}

export default RelationshipsPage

export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }, 
      filter: {frontmatter: {category: {eq: "relationships"}}}) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            slug
            title
            summary
          }
        }
      }
    }
  }
`
