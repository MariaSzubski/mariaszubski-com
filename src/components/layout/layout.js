import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { Container } from "react-grid-system"

import { screen } from "../global/vars"
import GlobalStyles from "../global/styles"
import SEO from "./seo"
import Nav from "../nav"
import Footer from "../footer"

const Content = styled.div`
  min-height: 100vh;
`

const Main = styled.main`
  width: 100%;
  ${"" /* max-width: 144rem; */}
  margin: 0 auto;
  ${"" /* padding: 0rem 4rem; */}
  ${"" /* display: flex;
  justify-content: center;
  align-items: center; */}
  @media ${screen.max.md} {
    ${"" /* padding: 0rem 2rem; */}
  }
`

const Layout = ({ title, children }) => {
  return (
    <>
      <SEO title={title} />
      <GlobalStyles />
      <Content>
        <Nav />
        <Main>
          <Container fluid>{children}</Container>
        </Main>
        <Footer />
      </Content>
    </>
  )
}

Layout.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node.isRequired,
}

Layout.defaultProps = {
  title: "",
}

export default Layout
