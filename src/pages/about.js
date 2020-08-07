import React, {useState} from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import Img from "gatsby-image"
import { Row, Col } from "react-flexbox-grid"

import data from "../content/all-skills.yml"

import Layout from "../components/layout"
import { SkillGroup } from "../components/skill"
import { SkillList, SkillTag } from "../components/skill/list"
import Link from "../components/utilities/link"
import ExpCard from "../components/experience/expCard"
import WorkshopCard from "../components/experience/workshop"

const Headshot = () => {
  const data = useStaticQuery(graphql`
    query {
      headshot: file(relativePath: { eq: "headshot.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <Img
      fluid={data.headshot.childImageSharp.fluid}
      css={`
        border-radius: 100%;
        // border: 3px solid black;
      `}
    />
  )
}

const AboutPage = () => {

  let [toggle, setToggle] = useState(false)
  return (
  <Layout>
    <section className="element">
      <hgroup>
        <h1>My Background</h1>
      </hgroup>
      <Row around="md">
        <Col md={12} lg={10} xl={9}>
          <p className="text-lg">
            Hi, I&#39;m Maria and I work remotely as a{" "}
            <strong>Freelance Front-End Developer</strong> based in Cincinnati,
            OH. I specialize in <strong>Javascript</strong>,{" "}
            <strong>React</strong>, <strong>JAMStack</strong>, and{" "}
            <strong>Shopify</strong>. I love to help small businesses launch
            projects with the best practices in accessibility, user experience,
            and maintainable code standards.
          </p>
          <p>
            I&#39;ve been a full-time contractor since 2018 and have worked with{" "}
            <strong>7 clients</strong> on over <strong>25 projects</strong>.
            I’ve launched websites solo and have been embedded in teams
            long-term. I pick up development languages and frameworks quickly
            and am comfortable hopping on whatever tech stack best suits the
            client&#39;s needs.
          </p>
          <p>
            Before freelancing, I spent 7 years as a{" "}
            <strong>UX Designer</strong> and <strong>Developer</strong> in the
            consumer retail, entertainment, sports, and B2B software industries.
            I volunteered with a tech non-profit for 3 years, organizing events
            and classes for the local chapter. I&#39;ve led in-person workshops
            on <strong>GatsbyJS</strong> and Intro to Web Development.
          </p>

          <h4 className="pad">Interested in working together?</h4>

          <p>
            I&#39;m always looking for new clients! Whether you have a specific
            project in mind or your agency needs a part-time developer to handle
            project overflow, I&#39;m happy to hear from you. Reach out at{" "}
            <Link to="mailto:hello@mariaszubski.com" target="_blank">
              hello@mariaszubski.com
            </Link>{" "}
            or through{" "}
            <Link to="https://linkedin.com/in/mariaszubski" target="_blank">
              LinkedIn
            </Link>{" "}
            to get the ball rolling.
          </p>
        </Col>
      </Row>

      <Row around="md">
        <Col xs={5} md={3} xl={2}>
          <Headshot />
        </Col>
      </Row>
    </section>
  </Layout>
)}

export default AboutPage
