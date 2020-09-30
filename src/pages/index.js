import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout/layout"
import SEO from "../components/seo"

import RandomQuote from '../components/quotes/randomQuote'
import quoteStyles from './homepageQuoteStyles.module.scss'

const IndexPage = () => {
  return (
   <Layout>
    <SEO title="Brent Danley" />
    <RandomQuote styles={quoteStyles} />
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
    </div>
    <Link to="/category/biography/">Biography Posts</Link> <br />
    <Link to="/gratitude/">Gratitude Journal</Link>
  </Layout>
  )
}

export default IndexPage
