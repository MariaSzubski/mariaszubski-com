import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

import Layout from "../components/layout"
import Attributions from "../components/attributions"

const AttributionsPage = props => (
  <Layout fluid title="Asset Credits">
    <Attributions />
  </Layout>
)

export default AttributionsPage
