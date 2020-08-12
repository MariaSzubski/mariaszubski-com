import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { Row, Col } from "react-flexbox-grid"

import endorsements from "../content/endorsements.yml"

import Layout from "../components/layout"
import SEO from "../components/layout/seo"
import Testimonials from "../components/testimonials"
import { SkillGroup } from "../components/skill"
import Button from "../components/button/button"
import Form from "../components/form"

import data from "../content/specialize.yml"
import { colors } from "../components/global/vars"

const Hero = styled.section`
  min-height: 85vh;
  display: flex;
  justify-content: flex-start;
`

const Headshot = styled.div`
  flex: 0 1 39%;
  align-self: stretch;
  background-repeat: no-repeat;
  background-size: 100%;
  background-position: bottom left;
  opacity: 0.7;
  background-image: url("http://images.ctfassets.net/sx9v94b5k8eh/4hcNblDYZaRY7T2j5HH1D2/ed866bc95b329baa65791be6d939d3e8/headshot.png?w=640&h=640&q=100&fm=webp");
`

const Content = styled.div`
  flex-basis: 45vw;
  align-self: flex-start;
  margin-top: 26.5rem;
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
  padding: 3rem 3rem 4rem 3rem;
  border-radius: 1rem;
  text-align: center;
  color: white;
`

const Num = styled.div`
  font-size: 4rem;
  text-transform: lowercase;
  font-weight: 600;
`

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <Hero>
        <Headshot />
        <Content>
          <p style={{ fontSize: "4.6rem" }}>
            Hi, I&#39;m Maria and I work remotely as a{" "}
            <strong>Freelance Frontend Developer</strong> based in Cincinnati,
            OH. I specialize in...
          </p>
          <SkillGroup data={data} size="3.8rem" center theme="transparent" />
          <Button to="/contact" $color="green">
            Let&#39;s work together
          </Button>
        </Content>
      </Hero>
      {/* <Other /> */}
      <Other around="md" top="md" className="background">
        <Stats md={6}>
          <Row>
            <Col md={3}>
              <Num>2.5 yrs</Num>
              <h6>in business</h6>
            </Col>
            <Col md={2}>
              <Num>7</Num>
              <h6>clients</h6>
            </Col>
            <Col md={3}>
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
      <Other>
        <h3>Contact Me</h3>
        <Row around="xs">
          <Col md={7}>
            <Form
              config={{
                form_fields: [
                  {
                    required: true,
                    type: "input",
                    name: "field name 1",
                    placeholder: "What's Your Name?",
                  },
                  {
                    required: false,
                    type: "email",
                    name: "field name 1",
                    placeholder: "Email Address",
                  },
                  {
                    required: false,
                    type: "radio",
                    name: "field name 1",
                    placeholder: "placeholder",
                  },
                  {
                    required: false,
                    type: "textarea",
                    name: "field name 1",
                    placeholder: "How can I help?",
                  },
                  {
                    required: false,
                    type: "submit",
                    name: "field name 1",
                    placeholder: "Submit",
                  },
                ],
              }}
            />
          </Col>
        </Row>
      </Other>
      {/* <Testimonials data={endorsements} /> */}
    </Layout>
  )
}

export default IndexPage
