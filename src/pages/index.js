import React from "react"
import { Link } from "gatsby"

import endorsements from "../content/endorsements.yml"

import Layout from "../components/layout"
import SEO from "../components/layout/seo"
import Testimonials from "../components/testimonials"

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <h1>Welcome</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <Link to="/page-2/">Go to page 2</Link>
      <Testimonials data={endorsements} />
    </Layout>
  )
}

export default IndexPage
