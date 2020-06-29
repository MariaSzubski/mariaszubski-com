import React from 'react'
import { Link, graphql } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

const IndexPage = ( data ) => (
  <Layout>
    <SEO title="Home" />
    <h1>{data.data.contentfulPage.title}</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage

export const query = graphql`
  query {
    contentfulPage(contentful_id: {eq: "7KKQ9SlaHWAvVjXwpmF8QC"}) {
      title
      slug
      modules {
      ... on ContentfulSkillGroup {
        id
        title
        displayLabel
        darkMode
        skill
      }
    }
    }
  }
`
