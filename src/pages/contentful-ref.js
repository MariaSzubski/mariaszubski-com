import React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/layout/seo'

const FutureIndexPage = () => {
  const { contentfulPage: data } = useStaticQuery(graphql`
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
  `)

  return (
    <Layout>
      <SEO title="Home" />
      <h1>{data.title}</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <Link to="/page-2/">Go to page 2</Link>
    </Layout>
  )
}

export default FutureIndexPage
