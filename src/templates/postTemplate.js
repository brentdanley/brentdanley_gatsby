import React from "react"
import { graphql, Link } from "gatsby"
import SEO from "../components/seo"
import Img from "gatsby-image"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../utils/fontawesome'

import Layout from '../components/layout/layout'

import styles from './postTemplate.module.scss'

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark

  const featuredImgFluid = frontmatter.featuredImage ? frontmatter.featuredImage.childImageSharp.fluid : ''

  return (
      <Layout>
        <SEO title={frontmatter.title} />
        <div className="blog-post-container">
            <div className="blog-post">
                <h1 className={styles.title}>{frontmatter.title}</h1>
                <FontAwesomeIcon icon={['far', 'calendar-day']} className={''} /><h2 className={styles.date}>{frontmatter.date}</h2>
                <Img fluid={featuredImgFluid} />
                <div
                className={styles.blogPostContent}
                dangerouslySetInnerHTML={{ __html: html }}
                />
            </div>
            <Link to={`/category/${frontmatter.category}`}>More {frontmatter.category} posts</Link>
        </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        category
        title
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
`