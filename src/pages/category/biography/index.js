import React from "react"

import Layout from "../../../components/layout/layout"
import SEO from "../../../components/seo"
import PostLink from "../../../components/post-link"

import styles from '../../category/category.module.scss'

const BioPage = ({
  data: {
    allMarkdownRemark: { edges },
  },
}) => {
  const Posts = edges
    .filter(edge => !!edge.node.frontmatter.date) // You can filter your posts based on some criteria
    .map(edge => <PostLink key={edge.node.id} post={edge.node} />)

    return (
   <Layout pageTitle="Biography">
    <SEO title="Category - Biography" />
    <h1 className={styles.pageHeading}>Allow me to introduce myself</h1>
    <div className={styles.headingCopy}>
      <p>In these posts I'll attempt to introduce myself by answering questions I'm frequently asked.</p>
      <p>If there's something you're curious about that's not answered here, send an email to <a href="mailto:brentdanley@gmail.com" title="Brent's email address">brentdanley@gmail.com</a>.</p>
    </div>
    <div className={styles.postsWrapper}>{Posts}</div>
  </Layout>
    )
}

export default BioPage

export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }, 
      filter: {frontmatter: {category: {eq: "biography"}, status: {eq: "published"}}}) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            slug
            title
            summary
            featuredImage {
              childImageSharp {
                fluid(maxWidth: 800) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`
