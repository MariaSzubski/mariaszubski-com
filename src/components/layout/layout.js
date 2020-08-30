import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

import { Container } from "../grid-system"
import { screen } from "../global/vars"
import GlobalStyles from "../global/styles"
import SEO from "./seo"
import Nav from "../nav"
import Footer from "../footer"

const Content = styled.div`
  min-height: 100vh;
`

const Layout = ({ title, children, fluid }) => {
  return (
    <>
      <SEO title={title} />
      <GlobalStyles />
      <Content>
        <Nav />
        <main>
          <Container fluid={fluid}>{children}</Container>
        </main>
        <Footer />
      </Content>
    </>
  )
}

Layout.propTypes = {
  title: PropTypes.string,
  fluid: PropTypes.bool,
  children: PropTypes.node.isRequired,
}

Layout.defaultProps = {
  title: "",
  fluid: false,
}

export default Layout
