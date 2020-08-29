import React from "react"
import { graphql } from "gatsby"
import SEO from "../components/seo"

import Layout from '../components/layout'

import styles from './postTemplate.module.scss'

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark
  return (
      <Layout>
        <SEO title={frontmatter.title} />
        <div className="blog-post-container">
            <div className="blog-post">
                <h1 className={styles.title}>{frontmatter.title}</h1>
                <h2 className={styles.date}>{frontmatter.date}</h2>
                <div
                className={styles.blogPostContent}
                dangerouslySetInnerHTML={{ __html: html }}
                />
            </div>
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
      }
    }
  }
`