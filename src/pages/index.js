import React from 'react'

import endorsements from "../content/endorsements.yml"

import Layout from '../components/layout'
import Endorsements from '../components/endorsements'

const IndexPage = () => (
  <Layout>
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <Endorsements data={endorsements} />
  </Layout>
)

export default IndexPage
