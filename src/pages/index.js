import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { Visible, Hidden } from "react-grid-system"

import endorsements from "../content/endorsements.yml"

import { Container } from "../components/demo-grid/container"
import { Row } from "../components/demo-grid/row"
import { Col } from "../components/demo-grid/col"
import Layout from "../components/layout"
import SEO from "../components/layout/seo"

import Testimonials from "../components/testimonials"
import Contact from "../components/contact"
import { SkillGroup } from "../components/skill"
import Button from "../components/button/button"

import skills from "../content/specialize.yml"
import { colors, screen } from "../components/global/vars"

const Hero = styled(Row)`
  min-height: 50vh;
  @media ${screen.min.xl} {
    min-height: 95vh;
  }
`

const Headshot = styled(Col)`
  background-repeat: no-repeat;
  background-size: 100%;
  background-position: bottom left;
  opacity: 0.8;
  background-image: url("http://images.ctfassets.net/sx9v94b5k8eh/4hcNblDYZaRY7T2j5HH1D2/ed866bc95b329baa65791be6d939d3e8/headshot.png?w=640&h=640&q=100&fm=webp");
  @media ${screen.max.lg} {
    background-size: 12rem 12rem;
    background-position: center top;
    opacity: 1;
    height: 12rem;
  }
`

const Content = styled(Col)`
  align-self: center;
  margin-top: 5rem;
  p {
    font-size: 2.4rem;
    line-height: 1.6;
    max-width: 80rem;
    text-align: center;
    margin: auto;
  }
  @media ${screen.min.md} {
    p {
      font-size: 3.8rem;
    }
  }
  @media ${screen.min.lg} {
    margin-top: 10rem;
    p {
      max-width: none;
      text-align: left;
    }
  }
  @media ${screen.min.xxl} {
    p {
      font-size: 4.6rem;
    }
  }
`

const Other = styled(Row)`
  ${"" /* background-color: ${colors.white}; */}
  height: 600px;
`

const Stats = styled(Col)`
  transform: translateY(-30%);
  z-index: 100;
  background-color: ${colors.black};
  background: linear-gradient(
    170deg,
    ${colors.black} 8%,
    ${colors.blue900} 100%
  );
  padding: 3rem 4rem 4rem 4rem;
  border-radius: 1rem;
  text-align: center;
  color: white;
`

const Num = styled.div`
  font-size: 3.2rem;
  text-transform: lowercase;
  font-weight: 600;
  @media ${screen.min.lg} {
    font-size: 4rem;
  }
`

const IndexPage = () => (
  <Layout>
    <Container fluid>
      <Row>
        <Col>
          <SEO title="Home" />
          <Hero>
            <Hidden xs sm md>
              <Headshot xs={12} lg={3.5} xl={4} />
            </Hidden>
            <Content xs={12} lg={7.5} xl={6.8} xxl={6.2} offset={{ xxl: 1 }}>
              <p>
                Hi, I&#39;m Maria and I work remotely as a{" "}
                <strong>Freelance Frontend Developer</strong> based in
                Cincinnati, OH. I specialize in...
              </p>
              <SkillGroup
                data={skills}
                size="3.8rem"
                center
                theme="transparent"
              />
              {/* <Button to="/contact" $color="green">
            Let&#39;s work together
          </Button> */}
            </Content>
          </Hero>
        </Col>
      </Row>
      <Other justify="center" align="flex-start" className="background">
        <Stats xs={11} md={9.5} lg={8} xl={6.75} xxl={5}>
          <Row>
            <Col md={3}>
              <Num>2.5 yrs</Num>
              <h6>in business</h6>
            </Col>
            <Col md={2.4}>
              <Num>7</Num>
              <h6>clients</h6>
            </Col>
            <Col md={2.6}>
              <Num>28+</Num>
              <h6>projects</h6>
            </Col>
            <Col md={4}>
              <Num>11 yrs</Num>
              <h6>industry experience</h6>
            </Col>
          </Row>
        </Stats>
      </Other>
      ^ Appear/hide on scroll
      <Contact />
    </Container>
    {/* <Testimonials data={endorsements} /> */}
  </Layout>
)

export default IndexPage
