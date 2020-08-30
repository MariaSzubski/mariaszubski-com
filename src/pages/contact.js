import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

import Layout from "../components/layout"
import Contact from "../components/contact"

const ContactPage = props => {

  return (
    <Layout fluid title="Contact Form">
      <Contact />
    </Layout>
  )
}

export default ContactPage
